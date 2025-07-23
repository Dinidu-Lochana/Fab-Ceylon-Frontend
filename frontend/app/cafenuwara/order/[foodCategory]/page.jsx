"use client";
import React, { useState, useEffect, use } from "react";
import CafeNuwaraNavBar from "@/components/CafeNuwaraNavBar";
import { CafeNuwraOrderNavBar } from "@/components/CafeNuwaraOrderNavBar";
import Image from "next/image";
import Boder from "@/components/Assets/Boder.png";
import Boder2 from "@/components/Assets/Boder2.png";
import star_icon from "@/components/Assets/star_icon.png";
import axios from "axios";
import toast from "react-hot-toast";
import CartTop from '@/components/Assets/CartTop.png'
import Cafe_Nuwara_logo from '@/components/Assets/Cafe_Nuwara_logo.png'
import Link from "next/link";
import CafeNuwaraHero_Image from "@/components/Assets/CafeNuwaraHero_Image.png";
import delete_icon from "@/components/Assets/delete.png";


const getStars = (rating) => {
  const roundedRating = parseFloat(rating.toFixed(1)); 
  const fullStars = Math.floor(roundedRating); // Full stars
  const fractionalStar = (roundedRating % 1).toFixed(1); // Get fractional part

  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <div key={`full-${i}`} className="w-6 h-6">
        <Image src={Rating_Star} alt="Full Star" width={24} height={24} />
      </div>
    );
  }

  // Add fractional star based on the decimal value
  if (fractionalStar > 0) {
    stars.push(
      <div key={`fractional-star`} className="relative w-6 h-6 overflow-hidden">
        {/* Full star in the background */}
        <Image src={Rating_Star} alt="Fractional Star" width={24} height={24} />
        {/* Overlay part based on fractional value */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: `calc(${fractionalStar} * 100%)`,
            width: `${(1 - fractionalStar) * 100}%`,
            height: '100%',
            backgroundColor: 'black', 
            zIndex: 1,
          }}
        ></div>
      </div>
    );
  }

  return stars;
};

export default function CafeNuwara({ params }) {
  const { foodCategory } = params;
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
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/order/orderfoods/${process.env.NEXT_PUBLIC_CAFE_NUWARA}/${foodCategory}`
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
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100">
      <div className="relative z-50">
        <CafeNuwaraNavBar />
        <CafeNuwraOrderNavBar />
      </div>

      {/* Fullscreen Hero Section */}
      <div className="relative w-full h-screen mt-4 overflow-hidden md:mt-10">
        <video
          src="/videos/heroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 z-10 bg-black/30" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="mb-6 font-serif text-3xl font-extrabold leading-tight tracking-wide text-transparent uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl bg-gradient-to-r from-amber-800 via-orange-700 to-amber-700 bg-clip-text">
            Choose <br />& <br />Enjoy...
          </h1>
          <p className="max-w-2xl px-4 text-base font-medium text-white sm:text-lg md:text-xl">
            Discover the authentic flavors of Sri Lankan cuisine in our classic cafe atmosphere
          </p>
          <div className="grid w-full max-w-sm grid-cols-3 gap-2 px-4 mt-6 md:max-w-md md:gap-4 md:mt-8">
            <div className="p-2 text-center rounded-lg md:p-3 bg-white/80 backdrop-blur-sm">
              <div className="text-lg font-bold md:text-2xl text-amber-700">50+</div>
              <div className="text-xs text-gray-700 md:text-sm">Menu Items</div>
            </div>
            <div className="p-2 text-center rounded-lg md:p-3 bg-white/80 backdrop-blur-sm">
              <div className="text-lg font-bold md:text-2xl text-amber-700">4.8★</div>
              <div className="text-xs text-gray-700 md:text-sm">Rating</div>
            </div>
            <div className="p-2 text-center rounded-lg md:p-3 bg-white/80 backdrop-blur-sm">
              <div className="text-lg font-bold md:text-2xl text-amber-700">15min</div>
              <div className="text-xs text-gray-700 md:text-sm">Prep Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Food Category Title Section with Decorative Images */}
      <div className="relative mt-12 md:mt-24">
        {/* Decorative Images - Hidden on mobile and small tablets */}
        <div className="absolute top-[-60px] md:top-[-80px] left-4 md:left-10 hidden xl:block animate-spin-slow-reverse z-30">
          <div className="w-32 h-32 overflow-hidden rounded-full lg:w-44 lg:h-44 xl:w-52 xl:h-52">
            <Image
              src={CafeNuwaraHero_Image}
              alt="Cafe Nuwara Hero Left"
              width={208}
              height={208}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="absolute top-[-60px] md:top-[-80px] right-4 md:right-10 hidden xl:block animate-spin-slow z-30">
          <div className="w-32 h-32 overflow-hidden rounded-full lg:w-44 lg:h-44 xl:w-52 xl:h-52">
            <Image
              src={CafeNuwaraHero_Image}
              alt="Cafe Nuwara Hero Right"
              width={208}
              height={208}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="text-[#000000] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] text-center px-4">
          <h1>{foodCategory.replace(/-/g, " ").toUpperCase()}</h1>
          <div className="text-black text-lg sm:text-xl md:text-2xl font-bold font-['Poppins'] mt-6 md:mt-10">
            It is a good time for the great taste of {foodCategory}
          </div>
        </div>
      </div>

      {/* Cards and Cart Container */}
      <div className="flex flex-col items-start justify-center gap-6 px-4 mt-16 xl:flex-row md:gap-10 md:mt-32">
        {/* Card Grid Section */}
        <div className="w-full xl:flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-10 justify-items-center">
            {foods.map((food) => (
              <div
                key={food._id}
                className="w-full max-w-[320px] min-h-[600px] md:min-h-[700px] relative bg-[#e1d6c1] rounded-[20px] flex flex-col justify-start items-center p-4"
              >
                {/* Top Border */}
                <div className="flex justify-start w-full">
                  <Image
                    className="w-[120px] h-[100px] md:w-[179px] md:h-[152px]"
                    src={Boder}
                    alt="Border Image"
                    width={179}
                    height={152}
                  />
                </div>

                {/* Food Image */}
                <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] -mt-12 md:-mt-16 overflow-hidden rounded-full border-4 border-[#caa767] mx-auto mb-4">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/${food.image.replace(
                      "\\",
                      "/"
                    )}`}
                    alt={food.foodName}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Food Name */}
                <div className="text-black text-xl md:text-2xl lg:text-3xl font-bold font-['Reem Kufi'] text-center mb-4 px-2">
                  {food.foodName
                    .split(" ")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </div>

                {/* Star Rating and Total Ratings */}
                <div className="flex items-center justify-center mb-4 text-black">
                  <div className="flex gap-1">{getStars(food.averageRating)}</div>
                  <span className="ml-2 text-sm font-['Poppins']">
                    <span className="text-base font-bold md:text-lg">
                      {food.averageRating.toFixed(1)}
                    </span>{" "}
                    <span className="text-xs">({food.totalRatings})</span>
                  </span>
                </div>

                {/* Description */}
                <div className="text-black text-sm md:text-[15px] font-bold font-['Reem Kufi'] text-center mb-4 px-2 flex-grow">
                  {food.description}
                </div>

                {/* Rating Stars */}
                <div className="flex items-center justify-center mb-4">
                  {Array(food.rating || 4)
                    .fill(0)
                    .map((_, starIndex) => (
                      <Image
                        key={starIndex}
                        className="w-[20px] h-[20px] md:w-[29px] md:h-[29px]"
                        src={star_icon}
                        alt="Rating Star"
                        width={29}
                        height={29}
                      />
                    ))}
                </div>

                {/* Price */}
                <div className="text-[#bb995b] text-xl md:text-2xl lg:text-3xl font-bold font-['Poppins'] mb-4">
                  LKR {food.price}
                </div>

                {/* Add to Cart Button - New Addition */}
                <button
                  onClick={() => handleAddToCart(food)}
                  className="w-full max-w-[200px] h-[45px] bg-[#caa767] rounded-[15px] text-black font-bold text-sm md:text-base hover:bg-[#b8956b] transition-colors duration-200 mb-4"
                >
                  Add to Cart
                </button>

                {/* Bottom Border */}
                <div className="flex justify-end w-full">
                  <Image
                    className="w-[120px] h-[100px] md:w-[179px] md:h-[152px]"
                    src={Boder2}
                    alt="Rotated Border Image"
                    width={179}
                    height={152}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="w-full max-w-[400px] xl:max-w-[370px] xl:min-w-[370px] min-h-[500px] px-5 py-10 bg-[#e1d6c1] rounded-[20px] border-4 border-white flex flex-col items-center xl:sticky xl:top-4">
          <Image
            src={CartTop}
            alt="Cart Top"
            width={284}
            height={160}
            className="w-[200px] md:w-[250px] h-32 md:h-40 -mt-16 md:-mt-20"
          />
          <div className="w-full text-black text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] mb-5 text-center -mt-6 md:-mt-10">
            Your Cart
          </div>
          
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center flex-grow">
              <Image 
                src={Cafe_Nuwara_logo}
                alt="Placeholder Image" 
                width={360} 
                height={362} 
                className="w-[250px] md:w-[300px] lg:w-[360px] h-[250px] md:h-[300px] lg:h-[362px] opacity-25" 
              />
            </div>
          ) : (
            <div className="w-full flex-grow overflow-y-auto max-h-[400px]">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col items-start justify-between w-full gap-2 p-3 mb-4 rounded-lg sm:flex-row sm:items-center bg-white/20"
                >
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm font-bold text-black truncate md:text-base lg:text-lg">
                      {item.foodName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/40">
                    <button
                      onClick={() => handleDecreaseQuantity(item._id)}
                      className="w-6 h-6 flex items-center justify-center bg-[#caa767] rounded-full font-extrabold text-black hover:bg-[#b8956b]"
                    >
                      -
                    </button>
                    <span className="text-sm md:text-base font-bold text-black min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncreaseQuantity(item._id)}
                      className="w-6 h-6 flex items-center justify-center bg-[#caa767] rounded-full font-extrabold text-black hover:bg-[#b8956b]"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-black md:text-base">
                      Rs. {item.price * item.quantity}
                    </span>
                    <Image
                      src={delete_icon}
                      alt="Delete"
                      className="w-5 h-5 transition-all cursor-pointer md:w-6 md:h-6 filter brightness-0 hover:brightness-50"
                      onClick={() => handleDeleteFromCart(item._id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {cartItems.length > 0 && (
            <>
              <div className="w-full text-black text-lg md:text-xl font-bold font-['Poppins'] mt-5 text-center border-t border-black/20 pt-4">
                Sub Total Rs. {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              </div>
              <button className="w-full max-w-[320px] h-[60px] md:h-[72px] px-[21px] py-4 md:py-5 bg-[#caa767] rounded-[20px] justify-center items-center mt-3 hover:bg-[#b8956b] transition-colors duration-200">
                <Link 
                  href="/cafenuwara/order/checkout" 
                  className="text-base font-bold text-black md:text-lg">
                  Checkout
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}