"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Sidebar = ({ notifications = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-orange-500 text-white rounded-full"
      >
        {isOpen ? "Close" : "Open"} Notifications
      </button>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="w-1/4 p-4 bg-gray-700 text-white h-screen overflow-y-auto fixed top-0 left-0 z-40"
      >
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        {notifications.length === 0 ? (
          <p>No notifications yet.</p>
        ) : (
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="mb-3 p-2 bg-gray-600 rounded-lg">
                <p className="font-semibold">{notification.message}</p>
                <p className="text-sm text-gray-300">
                  {new Date(notification.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </>
  );
};

Sidebar.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
    })
  ),
};

export default Sidebar;