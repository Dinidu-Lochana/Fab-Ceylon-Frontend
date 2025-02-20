'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuBack_image from '@/components/Assets/MenuBack_image.jpg';
import delete_icon from '@/components/Assets/delete.png';
import Rating_Star from '@/components/Assets/rating_star.png';
import { GrandMenuNavBar } from '@/components/Fab-Grand-MenuNavBar';
import { GrandMainMenuNavBar } from '@/components/Fab-Grand-MainMenu';
import axios from 'axios';
import { toast } from 'react-toastify';

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
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/getfoods/${process.env.NEXT_PUBLIC_FAB_CEYLON_GRAND}/${foodCategory}`
        );
        setFoods(response.data);
      } catch (error) {
        toast.error('Failed to fetch foods');
      }
    };

    fetchFoods();
  }, [foodCategory]);

  

  return (
    <div>
      <div className="relative h-screen bg-black">
        <Image
          src={MenuBack_image}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
        <GrandMainMenuNavBar />
        <GrandMenuNavBar />

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
        <div className="text-[#eb650f] text-7xl font-bold font-['Poppins'] bg-black text-center">
          <h1>{foodCategory.replace(/-/g, ' ').toUpperCase()}</h1>

          <div className="text-white text-3xl font-bold font-['Poppins'] mt-10">
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
                  {food.foodName.split(' ').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  ).join(' ')}
                </div>

                {/* Star Rating and Total Ratings */}
                <div className="flex items-center mt-4 text-white">
                  <div className="flex gap-1">{getStars(food.averageRating)}</div>
                  <span className="ml-2 text-sm font-['Poppins']">
                    <span className="text-lg font-bold">{food.averageRating.toFixed(1)}</span> 
                    <span className="text-xs"> ({food.totalRatings})</span>
                  </span>
                </div>
                

                <div className="text-white text-xl font font-['Poppins'] mt-5">
                  {food.description}
                </div>
                <div className="text-[#eb650f] text-2xl font-bold font-['Poppins'] mt-6">
                  LKR {food.price}
                </div>

                {/* Extra Add Cheese */}
                {food.isExtraAddCheeseAvailable && (
                  <div className="text-white text-xl font-bold font-['Poppins'] mt-2">
                    Extra Add Cheese + LKR 200
                  </div>
                )}
                
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
}
