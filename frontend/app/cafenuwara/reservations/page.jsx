"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../components/Assets/Cafe_Nuwara_logo.png";
import back from "../../../components/Assets/back.png";
import axios from "axios";

const Home = () => {
  const [formData, setFormData] = useState({
    cafe: "Cafe Nuwara",
    email: "",
    date: "",
    time: "",
    people: "",
    agreeToTerms: true,
    email: "",
  });

  const [message, setMessage] = useState(""); // Feedback messages

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
      setMessage(
        "You must agree to the terms and conditions to make a reservation."
      );
      return;
    }

    try {
      await axios.post("http://localhost:4000/api/reservations", formData);
      setMessage("Reservation confirmed!");
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to submit reservation. Please try again."
      );
    }
  };

  return (
    <div
      className="flex items-center justify-center p-10 min-h-screen bg-orange-100"
      style={{
        backgroundImage: `url(${back.src})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="w-5/6 max-w-md p-6 bg-orange-50 shadow-md rounded-lg">
        {/* Logo */}
        <div className="flex justify-center  m-10">
        <Image src={logo} alt="Logo" width={400} height={200} />
        </div>  
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="people" className="block mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your Email"
            />
          </div>

          <div>
            <label htmlFor="date" className="block mb-2 text-gray-700">
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
            <label htmlFor="time" className="block mb-2 text-gray-700">
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
            <label htmlFor="people" className="block mb-2 text-gray-700">
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
            <label htmlFor="agreeToTerms" className="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
          >
            Reserve a Table
          </button>
        </form>

        {/* Feedback Message */}
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </div>
    </div>

    
  );
};

export default Home;
