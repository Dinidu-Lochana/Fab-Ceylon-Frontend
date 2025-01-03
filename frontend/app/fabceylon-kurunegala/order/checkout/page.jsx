"use client"; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import deleteIcon from '@/components/Assets/delete.png';
import { MainMenuNavBar } from '@/components/MainMenuNavBar';

const CheckoutPage = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const [orderType, setOrderType] = useState('Pick-up'); 
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('fab-kurunegala-cart')) || [];
      setCartItems(storedCart);
    }, []);

    const handleIncreaseQuantity = (id) => {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('fab-kurunegala-cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    };
  
    const handleDecreaseQuantity = (id) => {
      const updatedCart = cartItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
  
      localStorage.setItem('fab-kurunegala-cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    };
  
    const handleDeleteFromCart = (id) => {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      localStorage.setItem('fab-kurunegala-cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    };
  

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!orderType || !paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    alert(
      `Checkout successful! Order Type: ${orderType}, Payment Method: ${paymentMethod}`
    );
  };

  return (
    <div>
        <MainMenuNavBar />
    <div className="flex flex-col items-center min-h-screen px-4 py-10 text-white bg-gray-900">
        
      <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-orange-400">Your Cart</h1>
        <div className="space-y-4 overflow-y-auto max-h-96">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
            >
              <div className="text-lg font-bold">{item.foodName}</div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-gray-600 rounded-full"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
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
                  onClick={() => handleDeleteFromCart(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="pt-4 mt-6 border-t border-gray-700">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Amount:</span>
            <span>Rs. {totalAmount}.00</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold text-orange-400">
            Order Type:
          </h2>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="orderType"
                value="Pick-up"
                checked={orderType === 'Pick-up'} // Always select Pick-up
                onChange={(e) => setOrderType(e.target.value)}
                className="w-5 h-5"
              />
              <span>Pick-up</span>
            </label>
            
          </div>
        </div>

        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold text-orange-400">
            Payment Method:
          </h2>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash"
                checked={paymentMethod === 'Cash'}
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
                checked={paymentMethod === 'Card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5"
              />
              <span>Online Payment</span>
            </label>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full py-3 mt-6 text-lg font-bold text-white transition bg-orange-500 rounded-lg hover:bg-orange-600"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
    </div>
  );
};

export default CheckoutPage;
