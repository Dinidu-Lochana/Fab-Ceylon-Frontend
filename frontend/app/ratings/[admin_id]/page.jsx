"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from 'jwt-decode';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [ratings, setRatings] = useState({});
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const router = useRouter();
  
  const { admin_id } = useParams();

  const getUserIdFromToken = () => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      toast.error("No token found. Please log in.");
      return null;
    }

    try {
      const parsedUserData = JSON.parse(userData);
      const token = parsedUserData.createdToken;

      if (!token) {
        toast.error("Token is missing in user data.");
        return null;
      }

      const decodedToken = jwtDecode(token);
      return decodedToken._id || decodedToken.userId || null;
    } catch (error) {
      console.error("Error decoding token:", error);
      toast.error("Invalid token. Please log in again.");
      return null;
    }
  };

  const userId = getUserIdFromToken();

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId || !admin_id) {
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/rating/getorders/${userId}/${admin_id}`
        );
        

        const fetchedOrders = response.data;
        setOrders(fetchedOrders);

        const initialRatings = {};
        fetchedOrders.forEach((order) => {
          order.items.forEach((item) => {
            initialRatings[item.foodId] = item.averageRating || 0;
          });
        });
        setRatings(initialRatings);
      } catch (error) {
        toast.error("Failed to fetch orders. Please try again later.");
      }
    };

    fetchOrders();
  }, [userId, admin_id]);

  const handleRatingChange = (foodId, newRating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [foodId]: newRating,
    }));
  };

  const handleSubmitRating = async () => {
    if (!currentOrder) return;

    const token = localStorage.getItem("customer");

    // Create the base payload
    const ratingPayload = {
      _id: currentOrder._id,
      userId,
      admin_id,
      items: currentOrder.items.map((item) => ({
        foodId: item.foodId,
        quantity: item.quantity,
        price: item.price,
        ratings: [
          {
            userId,
            rating: ratings[item.foodId] || 0,
          },
        ],
      })),
      orderType: currentOrder.orderType,
      paymentMethod: currentOrder.paymentMethod,
      orderDescription: currentOrder.orderDescription,
      // Add all order properties to make sure we include everything required
      ...(currentOrder.receiverName && { receiverName: currentOrder.receiverName }),
      ...(currentOrder.receiverContact && { receiverContact: currentOrder.receiverContact }),
      ...(currentOrder.receiverAddress && { receiverAddress: currentOrder.receiverAddress }),
      // If the order type is delivery, ensure we have the required fields
      ...(currentOrder.orderType === "Delivery" && {
        receiverName: currentOrder.receiverName || "Customer",
        receiverContact: currentOrder.receiverContact || "Not provided",
        receiverAddress: currentOrder.receiverAddress || "Not provided"
      })
    };

    console.log("Submitting rating payload:", ratingPayload);

    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/rating/submitFoodRating`,
        ratingPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      toast.success("Ratings submitted successfully!");
      closeReviewPopup();
      
      // Refresh orders after successful submission
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/rating/getorders/${userId}/${admin_id}`
      );
      
      setOrders(response.data);
    } catch (error) {
      console.error("Rating submission error:", error.response?.data || error.message);
      toast.error(`Failed to submit ratings: ${error.response?.data?.message || error.message}`);

    }
  };

  const openReviewPopup = (order) => {
    setCurrentOrder(order);
    setShowReviewPopup(true);
    console.log("Order data:", order);
  };

  const closeReviewPopup = () => {
    setShowReviewPopup(false);
    setCurrentOrder(null);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  // Function to get status color
  const getStatusColor = (status) => {
    switch(status) {
      case "Delivered":
        return "bg-green-500";
      case "Pending":
        return "bg-yellow-500";
      case "Processing":
        return "bg-blue-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">My Order History</h1>
        
        {orders.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
              <div
                key={order._id}
                className="relative overflow-hidden group"
              >
                <div className="absolute inset-0 transition-all duration-300 border shadow-lg bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-md rounded-xl border-gray-700/50 group-hover:border-orange-500/50 group-hover:shadow-orange-500/20"></div>
                
                <div className="relative z-10 flex flex-col h-full p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                      <h2 className="text-xl font-semibold text-orange-400">#{order._id.slice(-6)}</h2>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(order.status)} text-white font-medium`}>
                      {order.status}
                    </span>

                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div className="flex justify-between pb-2 border-b border-gray-700/50">
                      <span className="text-gray-400">Date</span>
                      <span className="font-medium">{formatDate(order.createdAt)}</span>
                    </div>
                    
                    <div className="flex justify-between pb-2 border-b border-gray-700/50">
                      <span className="text-gray-400">Amount</span>
                      <span className="font-medium text-green-400">Rs.{order.totalAmount?.toFixed(2) || "0.00"}</span>
                    </div>
                    
                    <div className="flex justify-between pb-2 border-b border-gray-700/50">
                      <span className="text-gray-400">Items</span>
                      <span className="font-medium">{order.items?.length || 0}</span>
                    </div>
                    
                    <div className="flex justify-between pb-2 border-b border-gray-700/50">
                      <span className="text-gray-400">Type</span>
                      <span className="font-medium">{order.orderType || "Not specified"}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <button
                      className={`px-6 py-2 rounded-lg transition-all duration-300 transform ${
                        order.status === "Delivered"
                          ? "bg-gradient-to-r from-orange-500 to-pink-600 hover:from-pink-600 hover:to-orange-500 shadow-md hover:shadow-orange-500/50 text-white hover:scale-105"
                          : "bg-gray-700 text-gray-400 cursor-not-allowed"
                      }`}
                      onClick={() => order.status === "Delivered" && openReviewPopup(order)}
                      disabled={order.status !== "Delivered"}
                    >
                      {order.status === "Delivered" ? "Rate & Review" : "Awaiting Delivery"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 border bg-gray-800/50 backdrop-blur-md rounded-xl border-gray-700/50">
            <div className="mb-4 text-6xl">📦</div>
            <p className="text-xl text-gray-300">No orders found yet</p>
            <p className="mt-2 text-gray-400">Your order history will appear here once you place orders</p>
          </div>
        )}
      </div>

      {showReviewPopup && currentOrder && (
        <ReviewPopup
          order={currentOrder}
          ratings={ratings}
          handleRatingChange={handleRatingChange}
          handleSubmitRating={handleSubmitRating}
          closeReviewPopup={closeReviewPopup}
        />
      )}
    </div>
  );
};

const ReviewPopup = ({
  order,
  ratings,
  handleRatingChange,
  handleSubmitRating,
  closeReviewPopup,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
    <div className="relative w-full max-w-4xl p-8 border shadow-2xl rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50">
      <div className="absolute top-4 right-4">
        <button 
          onClick={closeReviewPopup}
          className="text-gray-400 transition-colors hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="relative z-10 mb-8">
        <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
          Rate Your Order #{order._id.slice(-6)}
        </h2>
        <p className="mt-2 text-center text-gray-400">Let us know how you enjoyed your food</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {order.items.map((item) => (
          <div
            key={item.foodId}
            className="flex flex-col overflow-hidden transition-all duration-300 border shadow-lg bg-gray-800/50 rounded-xl md:flex-row hover:shadow-orange-500/20 border-gray-700/50 hover:border-orange-500/50"
          >
            <div className="relative overflow-hidden md:w-1/3">
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/${item.image?.replace("\\", "/")}`}
                alt={item.foodName}
                className="object-cover w-full h-full transition-transform duration-500 transform aspect-square hover:scale-110"
                onError={(e) => {
                  e.target.src = "/placeholder-food.png"; // Fallback image
                  e.target.onerror = null;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs font-semibold text-white">Rs.{item.price}</p>
              </div>
            </div>
            
            <div className="flex flex-col justify-between p-4 md:w-2/3">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-white">{item.foodName || "No Name"}</h3>
                <p className="mb-4 text-sm text-gray-300">Quantity: {item.quantity}</p>
              </div>
              
              <div>
                <p className="mb-2 text-sm text-gray-400">Rate this item:</p>
                <RatingReview
                  rating={ratings[item.foodId] || 0}
                  setRating={(newRating) => handleRatingChange(item.foodId, newRating)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-8">
        <button
          className="px-8 py-3 font-medium text-white transition-all duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-orange-500 to-pink-600 hover:from-pink-600 hover:to-orange-500 hover:shadow-orange-500/50 hover:scale-105"
          onClick={handleSubmitRating}
        >
          Submit Ratings
        </button>
      </div>
    </div>
  </div>
);

const RatingReview = ({ rating, setRating }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`cursor-pointer transition-all duration-200 transform hover:scale-110 ${
          rating >= star ? "text-yellow-400" : "text-gray-500"
        }`}
        onClick={() => setRating(star)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </span>
    ))}
  </div>
);

export default Orders;