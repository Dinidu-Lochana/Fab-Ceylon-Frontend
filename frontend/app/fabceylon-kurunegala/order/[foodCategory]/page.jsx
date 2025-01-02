'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuBack_image from '@/components/Assets/MenuBack_image.jpg';
import delete_icon from '@/components/Assets/delete.png';
import { MenuNavBar } from '@/components/MenuNavBar';
import { MainMenuNavBar } from '@/components/MainMenuNavBar';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function KandyMenu({ params }) {
  const foodCategory = params.foodCategory;
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/order/orderfoods/67167ca7d704fb6682f5e82c/${foodCategory}`
        );
        setFoods(response.data);
      } catch (error) {
        toast.error('Failed to fetch foods');
      }
    };

    fetchFoods();
  }, [foodCategory]);

  const handleAddToCart = (food) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === food._id);

    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity if it's already in the cart
    } else {
      cart.push({ ...food, quantity: 1 }); // Add to cart if not already present
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

  // Function to handle the Enter key press for adding or increasing quantity
  const handleKeyPress = (event, food) => {
    if (event.key === 'Enter') {
      const existingItem = cartItems.find((item) => item.id === food._id);
      if (existingItem) {
        handleIncreaseQuantity(food._id); // Increase quantity if already in the cart
      } else {
        handleAddToCart(food); // Add to cart if not in the cart
      }
    }
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
        <MainMenuNavBar />
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
          <h1>{foodCategory.replace(/-/g, ' ').toUpperCase()}</h1>

          <div className="text-white text-4xl font-bold font-['Poppins'] mt-10">
            It is a good time for the great taste of {foodCategory}
          </div>
        </div>

        <div className="flex flex-row items-start justify-center gap-10 mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
              <div
                key={food._id}
                className="w-[320px] h-[780px] px-[43px] pt-[25.50px] pb-[38.50px] bg-[#110c0c] rounded-[30px] flex flex-col items-start gap-5"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/${food.image.replace(
                    "\\",
                    "/"
                  )}`}
                  alt={food.foodName}
                  className="object-cover w-full h-auto border-4 border-white rounded-full"
                />

                <div className="text-white text-4xl font-bold font-['Poppins'] mt-5">
                  {food.foodName}
                </div>

                <div className="text-white text-xl font font-['Poppins'] mt-5">
                  {food.description}
                </div>
                <div className="text-[#eb650f] text-2xl font-bold font-['Poppins'] mt-6">
                  LKR {food.price}
                </div>
                <div
                  onClick={() => handleAddToCart(food)}
                  onKeyPress={(event) => handleKeyPress(event, food)} // Add keypress listener
                  role="button"
                  tabIndex={0}
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
                  <span>{item.foodName}</span>
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