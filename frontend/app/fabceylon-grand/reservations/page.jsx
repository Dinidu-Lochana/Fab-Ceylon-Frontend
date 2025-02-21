"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../components/Assets/fab_grand.png";
import back from "../../../components/Assets/back.png";
import axios from "axios";
import Sidebar from "../../../components/reservation-sidebar";

const Home = () => {
  const [formData, setFormData] = useState({
    cafe: "Cafe Nuwara",
    email: "",
    date: "",
    time: "",
    people: "",
    agreeToTerms: false,
  });

  const [message, setMessage] = useState(""); // Feedback messages
  const [notifications, setNotifications] = useState([]); // Notifications state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!formData.date || !formData.time || !formData.people) {
      setMessage("Please fill in all the fields.");
      return;
    }

    if (!formData.agreeToTerms) {
      setMessage("You must agree to the terms and conditions to make a reservation.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/reservations", formData);
      setMessage("Reservation confirmed!");

      // Add a notification for the successful reservation
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        {
          message: `Reservation confirmed for ${formData.email}`,
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to submit reservation. Please try again."
      );

      // Add a notification for the failed reservation
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        {
          message: `Reservation failed for ${formData.email}`,
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-500">
    {/* Sidebar */}
        <div className="absolute top-0 right-10 m-4">
          <Sidebar notifications={notifications} />
        </div>

        {/* Main Content */}
      <div
        className="flex-1 flex items-center justify-center p-10"
        style={{
          backgroundImage: `url(${back.src})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="w-1/3 p-10 bg-gray-800 border border-orange-500 shadow-md rounded-lg">
          {/* Logo */}
          <div className="flex justify-center mb-4 p-10">
            <Image src={logo} alt="Logo" width={400} height={200} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 p-10">
            <div>
              <label htmlFor="email" className="block mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email" // Added name attribute
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your Email"
              />
            </div>

            <div>
              <label htmlFor="vip" className="block mb-2 text-white">
                VIP Reservation
              </label>
              <select
                id="vip"
                name="vip"
                value={formData.vip}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block mb-2 text-white">
                Select Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="time" className="block mb-2 text-white">
                Select Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="people" className="block mb-2 text-white">
                Amount of People
              </label>
              <input
                type="number"
                id="people"
                name="people"
                min="1"
                value={formData.people}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter number of people"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="agreeToTerms" className="text-white">
                I agree to the terms and conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-yellow-600"
            >
              Reserve a Table
            </button>
          </form>

          {/* Feedback Message */}
          {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Home;