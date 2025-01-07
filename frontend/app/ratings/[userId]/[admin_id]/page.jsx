"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [ratings, setRatings] = useState({});
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const router = useRouter();
  
  const{userId, admin_id}=useParams();

  useEffect(() => {
    console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS);

    const fetchOrders = async () => {
      console.log("userId:", userId, "admin_id:", admin_id);
      if (!userId || !admin_id) 
      {
        return;
      }

      try {
        const response = await axios.get(
          
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/rating/getOrders/${userId}/${admin_id}`
        );
        console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS);

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
    };

    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/rating/submitFoodRating`,
        ratingPayload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Ratings submitted successfully!");
      closeReviewPopup();
    } catch (error) {
      toast.error("Failed to submit ratings. Please try again.");
    }
  };

  const openReviewPopup = (order) => {
    setCurrentOrder(order);
    setShowReviewPopup(true);
  };

  const closeReviewPopup = () => {
    setShowReviewPopup(false);
    setCurrentOrder(null);
  };

  return (
    <div className="bg-black min-h-screen text-[#f8f6f6] p-6">
      <h1 className="text-center text-2xl font-bold mb-8">Your Orders</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
            key={order._id}
            className="relative bg-transparent border border-[#110D0D] rounded-2xl p-4 w-64 h-80 shadow-md transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg"
          >
            {/* Apply backdrop blur to the background */}
            <div className="absolute inset-0 bg-[#121247] opacity-20 backdrop-blur-sm rounded-2xl"></div>
            
            {/* Add custom spacing */}
            <div className="flex justify-center relative z-10 mb-4">
              <h2 className="text-xl font-serif">Order #{order._id.slice(-6)}</h2>
            </div>
            <div className="flex justify-center relative z-10 mb-4">
              <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
            </div>
            <div className="flex justify-center relative z-10 mb-4">
              <p>Total Amount: Rs.{order.totalAmount}</p>
            </div>
            <div className="flex justify-center relative z-10 mb-4">
              <p>Status: {order.status}</p>
            </div>
            <div className="flex justify-center relative z-10">
              <button
                className="mt-4 bg-[#f07634] text-white px-4 py-2 rounded-md hover:bg-[#a21e07] transition"
                onClick={() => openReviewPopup(order)}
              >
                Review
              </button>
            </div>
          </div>
          
          
          
          
          
          ))
        ) : (
          <p>No orders found.</p>
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
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    
    <div className="bg-[#0f0f0e] rounded-lg p-6 max-w-3xl w-full relative ">
    <div className="flex justify-center relative z-10">
      <h2 className="text-xl font-bold mb-4 text-white">
        Review Order #{order._id.slice(-6)}
      </h2>
      </div>
      <div className="flex flex-col gap-4">
        {order.items.map((item) => (
          
          <div
            key={item.foodId}
            className="flex items-center text-white gap-4 bg-[#0e0e25] p-4 rounded-lg shadow-md  transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg"
          >
            <img
              src={
                item.image
                  ? `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/${item.image.replace(
                      "\\",
                      "/"
                    )}`
                  : "/default-image.jpg"
              }
              alt={item.foodName || "Food Item"}
              className="w-20 h-20 rounded-md object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{item.foodName || "No Name"}</h3>
              <p>Price: Rs.{item.price}</p>
              <RatingReview
                rating={ratings[item.foodId] || 0}
                setRating={(newRating) => handleRatingChange(item.foodId, newRating)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          className="bg-[#e76f2f] text-black px-4 py-2 rounded-md hover:bg-[#a21e07] transition"
          onClick={handleSubmitRating}
        >
          Submit
        </button>
        <button
          className="bg-[#e76f2f] text-black px-4 py-2 rounded-md hover:bg-[#a21e07] transition"
          onClick={closeReviewPopup}
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const RatingReview = ({ rating, setRating }) => (
  <div className="flex gap-2 text-xl">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`cursor-pointer ${
          rating >= star ? "text-yellow-400" : "text-gray-300 "
        }`}
        onClick={() => setRating(star)}
      >
        ★
      </span>
    ))}
  </div>
);

export default Orders;
