'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuBack_image from '@/components/Assets/MenuBack_image.jpg';
import delete_icon from '@/components/Assets/delete.png';
import Rating_Star from '@/components/Assets/rating_star.png';
import KurunagalMainNavBar from '@/components/Fab-Kurunegala-Main-Navbar';
import {FabKurungalaMenuNavBar} from '@/components/Fab-Kurunegala-Pickup_Navbar'
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Footer from '@/components/Footer';

const getStars = (rating) => {
  const roundedRating = parseFloat(rating.toFixed(1)); 
  const fullStars = Math.floor(roundedRating); // Full stars
  const fractionalStar = (roundedRating % 1).toFixed(1); // Get fractional part

  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <div key={`full-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
        <Image src={Rating_Star} alt="Full Star" width={24} height={24} />
      </div>
    );
  }

  // Add fractional star based on the decimal value
  if (fractionalStar > 0) {
    stars.push(
      <div key={`fractional-star`} className="relative w-4 h-4 overflow-hidden sm:w-5 sm:h-5 md:w-6 md:h-6">
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

export default function KandyMenu({ params }) {
  const foodCategory = params.foodCategory;
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('fab-kurunegala-pickup-cart')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/order/orderfoods/${process.env.NEXT_PUBLIC_FAB_CEYLON_KURUNEGALA}/${foodCategory}`
        );
        setFoods(response.data);
      } catch (error) {
        toast.error('Failed to fetch foods');
      }
    };

    fetchFoods();
  }, [foodCategory]);

  const handleAddToCart = (food) => {
    const cart = JSON.parse(localStorage.getItem('fab-kurunegala-pickup-cart')) || [];
    const existingItem = cart.find((item) => item._id === food._id);

    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      cart.push({ ...food, quantity: 1 }); 
    }

    localStorage.setItem('fab-kurunegala-pickup-cart', JSON.stringify(cart));
    setCartItems(cart);
  };

  const handleIncreaseQuantity = (foodId) => {
    const updatedCart = cartItems.map((item) =>
      item._id === foodId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('fab-kurunegala-pickup-cart', JSON.stringify(updatedCart));
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

    localStorage.setItem('fab-kurunegala-pickup-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDeleteFromCart = (foodId) => {
    const updatedCart = cartItems.filter((item) => item._id !== foodId);
    localStorage.setItem('fab-kurunegala-pickup-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="relative z-50">
          <KurunagalMainNavBar />
          <FabKurungalaMenuNavBar />
        </div>

        {/* Fullscreen Hero Section */}
        <div className="relative w-full mt-10 overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-1/2">
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
            <h1 className="mb-4 font-serif text-3xl font-extrabold leading-tight tracking-wide text-transparent uppercase sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl bg-gradient-to-r from-amber-800 via-orange-700 to-amber-700 bg-clip-text">
              Choose <br />& <br />Enjoy...
            </h1>
            <p className="max-w-2xl px-4 text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl">
              Discover the authentic flavors of Sri Lankan cuisine in our classic cafe atmosphere
            </p>
            <div className="grid w-full max-w-xs grid-cols-3 gap-2 px-4 mt-4 sm:max-w-md sm:gap-4 sm:mt-8">
              <div className="p-2 text-center rounded-lg sm:p-3 bg-white/80 backdrop-blur-sm">
                <div className="text-lg font-bold sm:text-xl md:text-2xl text-amber-700">50+</div>
                <div className="text-xs text-gray-700 sm:text-sm">Menu Items</div>
              </div>
              <div className="p-2 text-center rounded-lg sm:p-3 bg-white/80 backdrop-blur-sm">
                <div className="text-lg font-bold sm:text-xl md:text-2xl text-amber-700">4.8★</div>
                <div className="text-xs text-gray-700 sm:text-sm">Rating</div>
              </div>
              <div className="p-2 text-center rounded-lg sm:p-3 bg-white/80 backdrop-blur-sm">
                <div className="text-lg font-bold sm:text-xl md:text-2xl text-amber-700">15min</div>
                <div className="text-xs text-gray-700 sm:text-sm">Prep Time</div>
              </div>
            </div>
          </div>
        </div>
        </div>

      {/* Food Category and List */}
        <div className="relative px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 sm:px-6 lg:px-8">
          
          <div className="text-[#eb650f] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Poppins'] bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center py-8">
            <h1>{foodCategory.replace(/-/g, ' ').toUpperCase()}</h1>

          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-['Poppins'] mt-4 sm:mt-6 lg:mt-10">
            It is a good time for the great taste of {foodCategory.replace(/-/g, ' ')}
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-6 pb-10 mt-6 lg:flex-row lg:gap-10 lg:mt-10">
          {/* Foods */}
          <div className="w-full lg:flex-1">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 lg:gap-8 xl:gap-10 justify-items-center">
              {foods.map((food) => (
                <div
                  key={food._id}
                  className="w-full max-w-[320px] min-h-[600px] sm:min-h-[700px] lg:min-h-[780px] px-6 sm:px-8 lg:px-[43px] pt-4 sm:pt-6 lg:pt-[25.50px] pb-6 sm:pb-8 lg:pb-[38.50px] bg-[#110c0c] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] flex flex-col items-start gap-3 sm:gap-4 lg:gap-5"
                >
                  <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] overflow-hidden rounded-full border-2 sm:border-3 lg:border-4 border-white mx-auto">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/${food.image.replace(
                        "\\",
                        "/"
                      )}`}
                      alt={food.foodName}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-['Poppins'] mt-2 sm:mt-3 lg:mt-5 text-center sm:text-left w-full">
                    {food.foodName
                      .split(' ')
                      .map((word) =>
                        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(' ')}
                  </div>

                  {/* Star Rating and Total Ratings */}
                  <div className="flex items-center justify-center w-full mt-2 text-white sm:mt-3 lg:mt-4 sm:justify-start">
                    <div className="flex gap-1">{getStars(food.averageRating)}</div>
                    <span className="ml-2 text-xs sm:text-sm font-['Poppins']">
                      <span className="text-sm font-bold sm:text-base lg:text-lg">{food.averageRating.toFixed(1)}</span> 
                      <span className="text-xs"> ({food.totalRatings})</span>
                    </span>
                  </div>

                  <div className="text-white text-sm sm:text-base lg:text-lg xl:text-xl font font-['Poppins'] mt-2 sm:mt-3 lg:mt-5 text-center sm:text-left">
                    {food.description}
                  </div>
                  <div className="text-[#eb650f] text-lg sm:text-xl lg:text-2xl font-bold font-['Poppins'] mt-3 sm:mt-4 lg:mt-6 text-center sm:text-left w-full">
                    LKR {food.price}
                  </div>
                  <div
                    onClick={() => handleAddToCart(food)}
                    role="button"
                    tabIndex={0}
                    className="h-[35px] sm:h-[40px] px-4 sm:px-6 lg:px-[23px] py-2 sm:py-[9px] bg-[#eb650f] rounded-[15px] sm:rounded-[20px] flex justify-center items-center mt-4 sm:mt-6 lg:mt-8 cursor-pointer w-full sm:w-auto mx-auto sm:mx-0 hover:bg-[#d4550d] transition-colors"
                  >
                    <div className="text-black text-base sm:text-lg lg:text-[20px] font-bold font-['Poppins']">
                      ADD
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="w-full lg:w-[397px] lg:min-w-[350px] xl:w-[397px] min-h-[400px] lg:min-h-[780px] px-4 sm:px-5 py-6 sm:py-8 lg:py-10 bg-[#110d0d] rounded-[15px] sm:rounded-[20px] border-2 sm:border-3 lg:border-4 border-white flex flex-col">
            <div className="w-full text-[#eb650f] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-['Poppins'] mb-4 sm:mb-5 text-center lg:text-left">
              Your Cart
            </div>
            <div className="w-full flex flex-col gap-3 sm:gap-4 overflow-y-auto h-[200px] sm:h-[250px] lg:h-[360px] scrollbar-thin scrollbar-thumb-[#eb650f] scrollbar-track-gray-800">
              {cartItems.length === 0 ? (
                <div className="text-white text-center text-sm sm:text-base lg:text-lg font-['Poppins'] mt-4">
                  Your cart is empty
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-white text-sm sm:text-base lg:text-lg xl:text-xl font-bold font-['Poppins'] gap-2 sm:gap-0 p-2 bg-black/30 rounded-lg"
                  >
                    <span className="flex-1 text-xs sm:text-sm lg:text-base xl:text-lg">{item.foodName}</span>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-1 sm:gap-2 bg-[#eb650f] rounded-md px-2 py-1">
                        <button
                          onClick={() => handleDecreaseQuantity(item._id)}
                          className="px-1 text-sm font-bold text-black rounded sm:text-base hover:bg-black/20"
                        >
                          -
                        </button>
                        <span className="text-black text-sm sm:text-base lg:text-lg font-bold min-w-[20px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleIncreaseQuantity(item._id)}
                          className="px-1 text-sm font-bold text-black rounded sm:text-base hover:bg-black/20"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-[#eb650f] text-sm sm:text-base lg:text-lg font-bold">Rs. {item.price * item.quantity}</span>
                      <Image
                        src={delete_icon}
                        alt="Delete"
                        className="w-4 h-4 transition-opacity cursor-pointer sm:w-5 sm:h-5 lg:w-6 lg:h-6 hover:opacity-70"
                        onClick={() => handleDeleteFromCart(item._id)}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="w-full text-white text-lg sm:text-xl font-bold font-['Poppins'] mt-4 sm:mt-5 text-center lg:text-left border-t border-[#eb650f] pt-4">
              Total: Rs.{' '}
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
              .00
            </div>
            {/* Checkout Button */}
            <div className="flex justify-center w-full mt-4 sm:mt-5">
              <button
                className="w-full h-[45px] sm:h-[50px] bg-[#eb650f] text-white text-lg sm:text-xl font-bold font-['Poppins'] rounded-[8px] sm:rounded-[10px] hover:bg-[#d4550d] transition-colors"
              >
                <Link href="/fabceylon-kurunegala/order/pickup/checkout">
                  Checkout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}