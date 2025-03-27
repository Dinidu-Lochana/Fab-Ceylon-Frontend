<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const ViewFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/getfoods/67167ca7d704fb6682f5e82c`,
        );
        setFoods(response.data);
      } catch (error) {
        toast.error("Failed to fetch foods");
      }
    };

    fetchFoods();
  }, []);

  const addToCart = async (id) => {
    try {
      // Find the food item by its ID
      const selectedFood = foods.find((food) => food._id === id);
      if (!selectedFood) {
        throw new Error("Food item not found");
      }
  
      // Retrieve the current cart from local storage (or initialize if empty)
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Check if the item is already in the cart
      const isAlreadyInCart = cart.some((item) => item._id === id);
      if (isAlreadyInCart) {
        toast.info(`${selectedFood.foodName} is already in the cart.`);
        return;
      }
  
      // Add the selected food to the cart
      cart.push(selectedFood);
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Show success message
      toast.success(`${selectedFood.foodName} added to the cart!`);
    } catch (error) {
      console.error("Error adding food to cart:", error.message);
      toast.error("Failed to add food to the cart.");
    }
  };
  
  

  return (
    <div className="max-w-[1600px] mx-auto px-5 py-6 font-sans bg-white">
      <h1 className="mb-6 text-2xl font-bold text-center">Foods</h1>
      <div className="flex flex-wrap gap-5">
        {foods.map((food) => (
          <div
            className="bg-gray-100 border border-gray-300 rounded-lg shadow-md w-[20%] flex flex-col items-center p-4 transition-transform hover:translate-y-[-5px] hover:shadow-lg"
            key={food._id}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/${food.image.replace(
                "\\",
                "/"
              )}`}
              alt={food.foodName}
              className="object-cover w-full h-auto rounded-lg"
            />

            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {food.foodName}
              </h2>
              <p className="mt-1 text-gray-600">Price: Rs.{food.price}.00</p>
              <p className="mt-1 text-gray-500">
                {food.foodCategory.replace(/-&-/g, " & ")}
              </p>
              <p className="mt-1 text-gray-600">
                Delivery Available: {food.isDeliveryAvailable ? "Yes" : "No"}
              </p>
              <p className="mt-2 text-gray-500">{food.description}</p>
            </div>

            <div className="flex gap-4 mt-4">
              
            <button 
              onClick={() => addToCart(food._id)} 
              className="px-5 py-2 text-white bg-blue-500 rounded-lg shadow-md transition-transform hover:translate-y-[-3px] hover:bg-blue-600 hover:shadow-lg active:translate-y-[1px] active:shadow"
            >
              Add to Cart
            </button>

            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewFoods;
=======
'use client';
import React from 'react';
import MenuBack_image from '@/components/Assets/MenuBack_image.jpg';
import Bugger from '@/components/Assets/Bugger.png';
import Image from 'next/image';
import star_icon from '@/components/Assets/star_icon.png';
import delete_icon from '@/components/Assets/delete.png';
import { MenuNavBar } from '@/components/MenuNavBar';
import { KandyMainMenuNavBar } from '@/components/Fab-Kandy-MainMenuNavBar';

export default function KandyMenu() {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleAddToCart = (food) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === food.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...food, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDeleteFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div>
      <div className="relative h-screen bg-black">
        <Image
          src={MenuBack_image}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
        <KandyMainMenuNavBar />
        <MenuNavBar />

        <div className="relative gap-2 text-left text-white">
          <div style={{ marginLeft: '100px' }}>
            <h1 className="pt-40 ml-32 font-bold tracking-wider text-7xl font-poppins">
              CHOOSE <br />
              <span className="text-white ml-28 mt-72">&</span> <br />
              <span className="ml-8 text-white">ENJOY...</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="relative bg-black">
        <div className="text-[#eb650f] text-8xl font-bold font-['Poppins'] bg-black text-center">
          <h1>Burger</h1>
          <div className="text-white text-4xl font-bold font-['Poppins'] mt-10">
            It is good time for the great taste of burgers
          </div>
        </div>

        <div className="flex flex-row items-start justify-center gap-10 mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
              <div
                key={index}
                className="w-[320px] h-[780px] px-[43px] pt-[25.50px] pb-[38.50px] bg-[#110c0c] rounded-[30px] flex flex-col items-start gap-5"
              >
                <Image
                  className="w-[200px] h-[200px] rounded-full border-4 border-white ml-4"
                  src={Bugger}
                  alt="Chicken Burger"
                />
                <div className="text-white text-4xl font-bold font-['Poppins'] mt-5">
                  Chicken Burger
                </div>
                <div className="text-[#eb650f] text-2xl font-bold font-['Poppins'] mt-6">
                  LKR 750
                </div>
                <div
                  onClick={() =>
                    handleAddToCart({
                      id: index, // Replace with unique ID in a real application
                      name: 'Chicken Burger',
                      price: 750,
                    })
                  }
                  className="h-[40px] px-[23px] py-[9px] bg-[#eb650f] rounded-[20px] flex justify-center items-center mt-8 cursor-pointer"
                >
                  <div className="text-black text-[20px] font-bold font-['Poppins']">
                    ADD
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[397px] h-[780px] px-5 py-10 bg-[#110d0d] rounded-[20px] border-4 border-white flex flex-col items-start">
            <div className="w-full text-[#eb650f] text-5xl font-bold font-['Poppins'] mb-5">
              Your Cart
            </div>
            <div className="w-full flex flex-col gap-4 overflow-y-auto h-[360px]">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex justify-between items-center text-white text-xl font-bold font-['Poppins']"
                >
                  <span>{item.name}</span>
                  <div className="flex items-center gap-2">
                  <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="px-2 py-1 font-bold text-white"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="px-2 py-1 font-bold text-white"
                    >
                      +
                    </button>

                  </div>
                  <div className="flex items-center gap-2">
                    <span>Rs. {item.price * item.quantity}</span>
                    <Image
                      src={delete_icon}
                      alt="Delete"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => handleDeleteFromCart(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full text-white text-xl font-bold font-['Poppins'] mt-5">
              Total: Rs.{' '}
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
              .00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 4e25e367453dd3dbc91797f570fe309e25323746
