'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuBack_image from '@/components/Assets/MenuBack_image.jpg';
import delete_icon from '@/components/Assets/delete.png';
import { KandyOderNavBar } from '@/components/Fab-Kandy-PlaceOrderNavBar';
import { KandyMainMenuNavBar } from '@/components/Fab-Kandy-MainMenuNavBar';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function KandyMenu({ params }) {
  const foodCategory = params.foodCategory;
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('fab-kandy-cart')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/order/orderfoods/677c41acdce1036596281448/${foodCategory}`
        );
        setFoods(response.data);
      } catch (error) {
        toast.error('Failed to fetch foods');
      }
    };

    fetchFoods();
  }, [foodCategory]);

  const handleAddToCart = (food) => {
    const cart = JSON.parse(localStorage.getItem('fab-kandy-cart')) || [];
    const existingItem = cart.find((item) => item._id === food._id);

    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      cart.push({ ...food, quantity: 1 }); 
    }

    localStorage.setItem('fab-kandy-cart', JSON.stringify(cart));
    setCartItems(cart);
  };

  const handleIncreaseQuantity = (foodId) => {
    const updatedCart = cartItems.map((item) =>
      item._id === foodId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('fab-kandy-cart', JSON.stringify(updatedCart));
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

    localStorage.setItem('fab-kandy-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDeleteFromCart = (foodId) => {
    const updatedCart = cartItems.filter((item) => item._id !== foodId);
    localStorage.setItem('fab-kandy-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div>
      {/* Background and Navigation */}
      <div className="relative h-screen bg-black">
        <Image
          src={MenuBack_image}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
        <KandyMainMenuNavBar />
        <KandyOderNavBar />

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

      {/* Food Category and List */}
      <div className="relative bg-black">
        <div className="text-[#eb650f] text-7xl font-bold font-['Poppins'] bg-black text-center">
          <h1>{foodCategory.replace(/-/g, ' ').toUpperCase()}</h1>

          <div className="text-white text-3xl font-bold font-['Poppins'] mt-10">
            It is a good time for the great taste of {foodCategory.replace(/-/g, ' ')}
          </div>
        </div>

        <div className="flex flex-row items-start justify-center gap-10 mt-10">
          {/* Foods */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
              <div
                key={food._id}
                className="w-[320px] h-[780px] px-[43px] pt-[25.50px] pb-[38.50px] bg-[#110c0c] rounded-[30px] flex flex-col items-start gap-5"
              >
                <div className="w-[200px] h-[200px] overflow-hidden rounded-full border-4 border-white mx-auto">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/${food.image.replace(
                      "\\",
                      "/"
                    )}`}
                    alt={food.foodName}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="text-white text-4xl font-bold font-['Poppins'] mt-5">
                  {food.foodName
                    .split(' ')
                    .map((word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    )
                    .join(' ')}
                </div>

                <div className="text-white text-xl font font-['Poppins'] mt-5">
                  {food.description}
                </div>
                <div className="text-[#eb650f] text-2xl font-bold font-['Poppins'] mt-6">
                  LKR {food.price}
                </div>
                <div
                  onClick={() => handleAddToCart(food)}
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

          {/* Cart */}
          <div className="w-[397px] h-[780px] px-5 py-10 bg-[#110d0d] rounded-[20px] border-4 border-white flex flex-col items-start">
            <div className="w-full text-[#eb650f] text-5xl font-bold font-['Poppins'] mb-5">
              Your Cart
            </div>
            <div className="w-full flex flex-col gap-4 overflow-y-auto h-[360px]">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="w-full flex justify-between items-center text-white text-xl font-bold font-['Poppins']"
                >
                  <span>{item.foodName}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecreaseQuantity(item._id)}
                      className="px-2 py-1 font-bold text-white"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item._id)}
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
                      onClick={() => handleDeleteFromCart(item._id)}
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
            {/* Checkout Button */}
            <div className="flex justify-center w-full mt-5">
              <button
                className="w-[200px] h-[50px] bg-[#eb650f] text-white text-xl font-bold font-['Poppins'] rounded-[10px] hover:bg-[#d4550d] transition-colors"
              >
                <Link href="/fabceylon-kandy/order/checkout">
                  Checkout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
