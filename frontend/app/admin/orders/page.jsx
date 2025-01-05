"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);

  
  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("admin");

      if (!token) {
        toast.error("Unauthorized: No token found.");
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/admins/order/getorders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          toast.error("Unauthorized access. Invalid or expired token.");
        } else {
          toast.error("Failed to fetch orders");
        }
      }
    };

    fetchOrders();
  }, []);

  // Handle order deletion
  const handleDelete = async (id) => {
    const tokenObj = JSON.parse(localStorage.getItem("admin")); // Parse stored token
    const token = tokenObj ? tokenObj.createdToken : null; // Extract the createdToken

    if (!token) {
      toast.error("Unauthorized: No token found.");
      return;
    }

    const isConfirmed = window.confirm(
      "Are you sure you want to delete this Order?"
    );
    if (!isConfirmed) {
      return;
    }

    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/admins/order/deleteorder/${id}`;
      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Use the correct token format
        },
      });

      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
      toast.success("Order deleted successfully!");
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Unauthorized access. Invalid or expired token.");
      } else {
        toast.error("Failed to delete order.");
      }
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto px-5 py-6 font-sans bg-white">
      <h1 className="mb-6 text-2xl font-bold text-center">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-collapse border-gray-300 table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">Order ID</th>
              <th className="px-4 py-2 border border-gray-300">Customer Name & Contact Info</th>
              <th className="px-4 py-2 border border-gray-300">Items</th>
              <th className="px-4 py-2 border border-gray-300">Total Amount</th>
              <th className="px-4 py-2 border border-gray-300">Order Type</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{order._id}</td>
                <td className="px-4 py-2 border border-gray-300">{order.customerName} - {order.contactNumber}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {order.items.map((item, index) => (
                    <div key={index}>
                      Food Name : {item.foodName}, Quantity: {item.quantity}, Price: Rs.{item.price}.00
                    </div>
                  ))}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Rs.{order.totalAmount}.00
                </td>
                <td className="px-4 py-2 border border-gray-300">{order.orderType}</td>
                <td className="px-4 py-2 border border-gray-300">{order.status}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="px-3 py-2 text-white transition-transform bg-red-500 rounded-md shadow-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewOrders;
