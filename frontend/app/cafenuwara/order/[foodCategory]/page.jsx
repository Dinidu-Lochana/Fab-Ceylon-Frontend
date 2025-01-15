"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import cafenuwara_nav from '@/components/Assets/cafenuwara_nav.png';
import { CafeNuwaraNavBar } from '@/components/CafeNuwraNavBar';
import CafeNuwaraHero_Image from '@/components/Assets/CafeNuwaraHero_Image.png';
import Elephant_1 from '@/components/Assets/Elephant_1.png';
import Elephant_2 from '@/components/Assets/Elephant_2.png';
import Bugger2 from '@/components/Assets/Bugger2.jpg';
import star_icon from '@/components/Assets/star_icon.png';
import Boder from '@/components/Assets/Boder.png';
import Boder2 from '@/components/Assets/Boder2.png';
import CartTop from '@/components/Assets/CartTop.png';
import delete_icon from '@/components/Assets/delete.png';
import Cafe_Nuwara_logo from '@/components/Assets/Cafe_Nuwara_logo.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function CafeNuwara({ params }) {
  const foodCategory = params.foodCategory;
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);

  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cafe-nuwara-cart')) || [];
    setCartItems(storedCart);
  }, []);

  
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/order/orderfoods/677c4204dce103659628144c/${foodCategory}`
        );
        setFoods(response.data);
      } catch (error) {
        toast.error('Failed to fetch foods');
      }
    };

    fetchFoods();
  }, [foodCategory]);

  const handleAddToCart = (food) => {
    const cart = JSON.parse(localStorage.getItem('cafe-nuwara-cart')) || [];
    const existingItem = cart.find((item) => item._id === food._id);

    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      cart.push({ ...food, quantity: 1 }); 
    }

    localStorage.setItem('cafe-nuwara-cart', JSON.stringify(cart));
    setCartItems(cart);
  };
  
  const handleIncreaseQuantity = (foodId) => {
    const updatedCart = cartItems.map((item) =>
      item._id === foodId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('cafe-nuwara-cart', JSON.stringify(updatedCart));
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

    localStorage.setItem('cafe-nuwara-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDeleteFromCart = (foodId) => {
    const updatedCart = cartItems.filter((item) => item._id !== foodId);
    localStorage.setItem('cafe-nuwara-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div>
      {/* Hero Section */}
      <div>
            <div className="relative h-screen bg-[#f0e6d9]">
              <CafeNuwaraNavBar />
            </div>
            <div className="w-[370px] h-[370px] relative -mt-72 ml-28">
              <Image
                src={CafeNuwaraHero_Image}
                alt="Placeholder"
                layout="fill"
                objectFit="contain"
              />
              <div className="w-[189px] h-[189px] relative ml-[450px]">
                <Image
                  src={Elephant_1}
                  alt="Placeholder"
                  layout="fill"
                  objectFit="contain"
                />
                <div className="w-[215px] h-[215px] relative ml-44">
                  <Image
                    src={Elephant_2}
                    alt="Placeholder"
                    layout="fill"
                    objectFit="contain"
                    className="-mt-2"
                  />
                </div>
                <div className="w-[428px] h-[335px] text-center text-black text-[40px] font-extrabold font-serif uppercase -mt-14 -ml-6">
                  Choose <br />& <br />Enjoy...
                </div>
              </div>
              <div className="w-[370px] h-[370px] relative -mt-48 ml-[925px]">
                <Image
                  src={CafeNuwaraHero_Image}
                  alt="Placeholder"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
        {/* Other hero section elements */}
      </div>

      {/* Food Category and List */}
      <div className="relative ">
        <div className="text-[#000000] text-6xl font-bold font-['Poppins'] text-center">
          <h1>{foodCategory.replace(/-/g, ' ').toUpperCase()}</h1>

          <div className="text-white text-3xl font-bold font-['Poppins'] mt-10">
            It is a good time for the great taste of {foodCategory}
          </div>
        </div>
      </div>

      
      {/* Cards and Cart Container */}
      <div className="flex flex-row items-start justify-center gap-10 mt-32">
        {/* Card Grid Section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => (
            <div
              key={food._id}
              className="w-[320px] h-[700px] relative bg-[#e1d6c1] rounded-[20px] flex-col justify-start items-start inline-flex"
            >
              <Image
                className="w-[179px] h-[152px] mt-1"
                src={Boder}
                alt="Border Image"
                width={179}
                height={152}
              />
              
              <div className="w-[339px] h-[802px] relative">
                
              <div className="w-[200px] h-[200px] left-14 top-[-80px] absolute overflow-hidden rounded-full border-4 border-[#caa767] mx-auto">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/${food.image.replace(
                      "\\",
                      "/"
                    )}`}
                    alt={food.foodName}
                    className="object-cover w-full h-full"
                  />
                </div>

                
                <div className="left-[20px] top-[150px] absolute text-black text-3xl font-bold font-['Reem Kufi']">
                  {food.foodName
                    .split(' ')
                    .map((word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    )
                    .join(' ')}
                </div>
                <div className="w-[339px] h-[87px] left-[15px] top-[200px] absolute text-black text-[15px] font-bold font-['Reem Kufi'] pr-9">
                  {food.description}
                </div>
                <div className="left-[15px] top-[280px] absolute justify-start items-center inline-flex">
                  {Array(food.rating || 4)
                    .fill(0)
                    .map((_, starIndex) => (
                      <Image
                        key={starIndex}
                        className="w-[29px] h-[29px]"
                        src={star_icon}
                        alt="Rating Star"
                        width={29}
                        height={29}
                      />
                    ))}
                </div>
              </div>
              <div className="left-[15px] top-[500px] absolute text-[#caa767] text-3xl font-bold font-['Poppins']">
                LKR {food.price}
              </div>
              <div
                onClick={() => handleAddToCart(food)}
                className="w-[150px] px-[1px] top-[540px] absolute bg-[#caa767] rounded-[20px] justify-center items-center inline-flex ml-[15px] mt-10 cursor-pointer"
              >
                <div className="text-black text-2xl font-bold font-['Poppins']">
                  ADD
                </div>
              </div>
              <Image
                className="w-[179px] h-[152px] ml-[140px]"
                src={Boder2}
                alt="Rotated Border Image"
                width={179}
                height={152}
              />
            </div>
          ))}
        </div>

        
        {/* Cart Section */}
        <div className="w-[370px] h-[700px] px-5 py-10 bg-[#e1d6c1] rounded-[20px] border-4 border-white flex flex-col items-start">
          <Image
            src={CartTop}
            alt="Cart Top"
            width={284}
            height={160}
            className="w-[250px] h-40 -mt-20 ml-10"
          />
          <div className="w-full text-black text-4xl font-bold font-['Poppins'] mb-5 ml-24 -mt-10">
            Your Cart
          </div>
          <div className="   flex justify-center items-center">
                    <Image 
            src={Cafe_Nuwara_logo}
            alt="Placeholder Image" 
            width={360} 
            height={362} 
            className="w-[360px] h-[362px opacity-25 mt-10" 
          />
                    </div>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between w-full mb-4"
            >
              <span className="text-xl font-bold">{item.foodName}</span>
              <div className="flex items-center gap-2">
                <button
                                      onClick={() => handleDecreaseQuantity(item._id)}
                                      className="px-2 py-1 font-extrabold text-black"
                                    >
                                      -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                      onClick={() => handleIncreaseQuantity(item._id)}
                                      className="px-2 py-1 font-extrabold text-black"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span>Rs. {item.price * item.quantity}</span>
                                    <Image
                                      src={delete_icon}
                                      alt="Delete"
                                      className="w-6 h-6 cursor-pointer filter brightness-0"
                                      onClick={() => handleDeleteFromCart(item._id)}
                                    />
                                  </div>
              
            </div>
          ))}
          <div className="w-full text-black text-xl font-bold font-['Poppins'] mt-5">
            Sub Total Rs. {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
          </div>
          <button className="w-[320px] h-[72px] px-[21px] py-5 bg-[#caa767] rounded-[20px] justify-center items-center mt-3">
            <Link 
              href="/cafenuwara/order/checkout" 
              className="text-lg font-bold text-black">
              Checkout
            </Link>
          </button>

        </div>
      </div>
    </div>
  );
}
