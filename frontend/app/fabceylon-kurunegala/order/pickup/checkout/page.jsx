"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import deleteIcon from "@/components/Assets/delete.png";
import { MainMenuNavBar } from "@/components/MainMenuNavBar";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Card Payment Component
const CardPaymentForm = ({ totalAmount, onPaymentComplete, disabled }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Get client secret from your backend
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/payments/create-payment-intent`,
        { amount: totalAmount }
      );

      const clientSecret = data.clientSecret;

      // Use the client secret to confirm the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            // You could optionally collect and pass billing details here
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
        toast.error(`Payment failed: ${result.error.message}`, { containerId: "ErrorMessage" });
      } else if (result.paymentIntent.status === 'succeeded') {
        toast.success("Payment successful!", { containerId: "successMessage" });
        onPaymentComplete(result.paymentIntent.id);
      }
    } catch (err) {
      setError(err.message);
      toast.error(`Error: ${err.message}`, { containerId: "ErrorMessage" });
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#ffffff',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 bg-gray-700 rounded-lg">
        <CardElement options={cardElementOptions} />
      </div>
      {error && <div className="mt-2 text-red-500">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || isProcessing || disabled}
        className={`w-full py-3 mt-4 text-lg font-bold text-white rounded-lg transition ${
          !stripe || isProcessing || disabled
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderType, setOrderType] = useState("Pick-up"); // Default to Pick-up
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    senderName: "",
    senderContact: "",
    orderDescription: ""
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [paymentIntentId, setPaymentIntentId] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);


  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("fab-kurunegala-pickup-cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Reset payment form when payment method changes
  useEffect(() => {
    if (paymentMethod !== "Card") {
      setPaymentIntentId(null);
      setIsPaymentComplete(false);
    }
  }, [paymentMethod]);

  const handleIncreaseQuantity = (foodId) => {
    const updatedCart = cartItems.map((item) =>
      item._id === foodId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('fab-kurunegala-pickup-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (foodId) => {
    const updatedCart = cartItems
      .map((item) =>
        item._id === foodId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem('fab-kurunegala-pickup-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDeleteFromCart = (foodId) => {
    const updatedCart = cartItems.filter((item) => item._id !== foodId);
    localStorage.setItem('fab-kurunegala-pickup-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePaymentComplete = (paymentId) => {
    setPaymentIntentId(paymentId);
    setIsPaymentComplete(true);
    
    // If we already have an order ID, update the order with payment info
    if (orderId) {
      updateOrderWithPayment(orderId, paymentId);
    }
  };

  const updateOrderWithPayment = async (orderId, paymentId) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/payments/payment-success`,
        { orderId, paymentIntentId: paymentId }
      );
    } catch (error) {
      console.error("Error updating order with payment:", error);
      toast.error("Error updating payment status", { containerId: "ErrorMessage" });
    }
  };

  const validateOrderData = () => {
    if (!agreedToTerms) {
      toast.error("You must agree to the Terms and Conditions to proceed.", { containerId: "ErrorMessage" });
      return false;
    }
    
    if (!orderType || !paymentMethod || !formData.senderName || !formData.senderContact) {
      toast.error("Please fill in all required fields.", { containerId: "ErrorMessage" });
      return false;
    }

    // Validate delivery details if orderType is Delivery
    if (orderType === "Delivery" && (!formData.receiverName || !formData.receiverContact || !formData.receiverAddress)) {
      toast.error("Please fill in all receiver details for delivery.", { containerId: "ErrorMessage" });
      return false;
    }

    // Check if payment is complete for Card payment
    if (paymentMethod === "Card" && !isPaymentComplete) {
      toast.error("Please complete the payment before proceeding.", { containerId: "ErrorMessage" });
      return false;
    }

    return true;
  };
  
  const addOrder = async () => {
    
    if (!validateOrderData()) return;

    if (!agreedToTerms) {
      toast.error("You must agree to the Terms and Conditions to proceed.", { containerId: "ErrorMessage" });
      return;
    }
    
    const token = localStorage.getItem("user");
    let userId = null;

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        userId = decodedToken._id;
      } catch (error) {
        console.error("Error decoding token:", error);
        toast.error("Invalid user session. Please log in again.", { containerId: "ErrorMessage" });
        return;
      }
    }

    if (!orderType || !paymentMethod || !formData.senderName || !formData.senderContact) {
      toast.error("Please fill in all required fields.", { containerId: "ErrorMessage" });
      return;
    }


    const orderData = {
      admin_id: process.env.NEXT_PUBLIC_FAB_CEYLON_KURUNEGALA, 
      userId: userId,
      items: cartItems.map((item) => ({
        foodId: item._id, 
        foodName : item.foodName,
        quantity: item.quantity,
        price: item.price,
        image: item.image
      })),
      orderType,
      paymentMethod,
      totalAmount, 
      senderDetails: {
        name: formData.senderName,
        contactNumber: formData.senderContact,
      },
      orderDescription: formData.orderDescription || "", 
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/order/orderfoods/${process.env.NEXT_PUBLIC_FAB_CEYLON_KURUNEGALA}/put-order`,
        orderData
      );

      // Save the order ID
      const newOrderId = response.data._id;
      setOrderId(newOrderId);

      // If payment is already complete, update the order with payment info
      if (isPaymentComplete && paymentIntentId) {
        await updateOrderWithPayment(newOrderId, paymentIntentId);
      }

      toast.success("Successfully created Order!", { containerId: "successMessage" });
      localStorage.removeItem("fab-kurunegala-pickup-cart"); 
      router.push("/fabceylon-kurunegala");
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error(error.response?.data?.message || "An error occurred.", { containerId: "ErrorMessage" });
    }
  };

  return (
    <div>
      <MainMenuNavBar />
      <div className="flex flex-col items-center min-h-screen px-4 py-10 text-white bg-gray-900">
        <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="mb-6 text-3xl font-bold text-orange-400">Your Cart</h1>
          
          {/* Cart Items */}
          <div className="space-y-4 overflow-y-auto max-h-96">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
                >
                  <div className="text-lg font-bold">{item.foodName}</div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleDecreaseQuantity(item._id)}
                      className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-gray-600 rounded-full"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item._id)}
                      className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-gray-600 rounded-full"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold">
                      Rs. {item.price * item.quantity}
                    </span>
                    <Image
                      src={deleteIcon}
                      alt="Delete"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => handleDeleteFromCart(item._id)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">Your cart is empty</p>
            )}
          </div>

          {/* Total Amount */}
          <div className="pt-4 mt-6 border-t border-gray-700">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Amount:</span>
              <span>Rs. {totalAmount}.00</span>
            </div>
          </div>

          {/* Sender Details */}
          <div className="mt-6">
            <h2 className="mb-2 text-xl font-bold text-orange-400">Sender Details:</h2>
            <input
              type="text"
              name="senderName"
              value={formData.senderName}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 mb-3 text-gray-900 bg-gray-200 rounded-lg placeholder-italic"
            />
            <input
              type="text"
              name="senderContact"
              value={formData.senderContact}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
              className="w-full px-4 py-3 text-gray-900 bg-gray-200 rounded-lg placeholder-italic"
            />
          </div>

          {/* Order Type Selection */}
          <div className="mt-6">
            <h2 className="mb-2 text-xl font-bold text-orange-400">Order Type:</h2>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="orderType"
                  value="Pick-up"
                  checked={orderType === "Pick-up"}
                  onChange={(e) => setOrderType(e.target.value)}
                  className="w-5 h-5"
                />
                <span>Pick-up</span>
              </label>
              
            </div>
          </div>

          {/* Receiver Details (for Delivery) */}
          {orderType === "Delivery" && (
            <div className="mt-6">
              <h2 className="mb-2 text-xl font-bold text-orange-400">Receiver Details:</h2>
              <input
                type="text"
                name="receiverName"
                value={formData.receiverName}
                onChange={handleInputChange}
                placeholder="Receiver's name"
                className="w-full px-4 py-3 mb-3 text-gray-900 bg-gray-200 rounded-lg placeholder-italic"
              />
              <input
                type="text"
                name="receiverContact"
                value={formData.receiverContact}
                onChange={handleInputChange}
                placeholder="Receiver's contact number"
                className="w-full px-4 py-3 mb-3 text-gray-900 bg-gray-200 rounded-lg placeholder-italic"
              />
              <textarea
                name="receiverAddress"
                value={formData.receiverAddress}
                onChange={handleInputChange}
                placeholder="Delivery address"
                className="w-full px-4 py-3 text-gray-900 bg-gray-200 rounded-lg placeholder-italic"
                rows="3"
              />
            </div>
          )}

          {/* Payment Method Selection */}
          <div className="mt-6">
            <h2 className="mb-2 text-xl font-bold text-orange-400">Payment Method:</h2>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash"
                  checked={paymentMethod === "Cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5"
                />
                <span>Cash Payment</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5"
                />
                <span>Online Payment</span>
              </label>
            </div>
          </div>

          {/* Stripe Card Element (for Card payment) */}
          {paymentMethod === "Card" && (
            <div className="mt-6">
              <h2 className="mb-2 text-xl font-bold text-orange-400">Card Details:</h2>
              <Elements stripe={stripePromise}>
                <CardPaymentForm 
                  totalAmount={totalAmount}
                  onPaymentComplete={handlePaymentComplete}
                  disabled={!agreedToTerms}
                />
              </Elements>
              {isPaymentComplete && (
                <div className="mt-2 text-green-400">
                  ✓ Payment complete
                </div>
              )}
            </div>
          )}

          {/* Order Description */}
          <div className="mt-6">
            <h2 className="mb-2 text-xl font-bold text-orange-400">Order Description:</h2>
            <textarea
              name="orderDescription"
              value={formData.orderDescription}
              onChange={handleInputChange}
              placeholder="Enter order description (Ex: Don't add onions...)"
              className="w-full px-4 py-3 text-gray-900 bg-gray-200 rounded-lg placeholder-italic"
              rows="2"
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center mt-6 space-x-2">
            <input
              type="checkbox"
              id="termsCheckbox"
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
              className="w-5 h-5"
            />
            <label htmlFor="termsCheckbox" className="text-sm text-gray-400">
              I have read and agreed to the{" "}
              <a
                href="/order-terms-conditions"
                target="_blank"
                className="text-orange-400 underline"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
              .
            </label>
          </div>
          
          {/* Submit Button (show only if using cash payment OR card payment is complete) */}
          {(paymentMethod !== "Card" || isPaymentComplete) && (
            <button
              onClick={addOrder}
              disabled={!agreedToTerms || cartItems.length === 0}
              className={`w-full py-3 mt-6 text-lg font-bold text-white rounded-lg transition ${
                agreedToTerms && cartItems.length > 0 
                  ? "bg-orange-500 hover:bg-orange-600" 
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              Place Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;