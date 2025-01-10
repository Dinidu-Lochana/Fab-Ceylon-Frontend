"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import cafenuwara_nav from '@/components/Assets/cafenuwara_nav.png';
import { CafeNuwaraMenuNavBar } from '@/components/CafeNuwaraMenuNavBar';
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
import Rating_Star from '@/components/Assets/rating_star_nuwara.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

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
          `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/getfoods/677c4204dce103659628144c/${foodCategory}`
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
      {/* Hero Section */}
      <div>
            <div className="relative h-screen bg-[#f0e6d9]">
              <CafeNuwaraMenuNavBar />
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
        <div className="text-[#000000] text-5xl font-bold font-['Poppins'] text-center">
          <h1>{foodCategory.replace(/-/g, ' ').toUpperCase()}</h1>

          <div className="text-black text-2xl font-bold font-['Poppins'] mt-10">
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
                
                {/* Star Rating and Total Ratings */}
                <div className="flex items-center mt-4 text-black">
                  <div className="flex gap-1">{getStars(food.averageRating)}</div>
                  <span className="ml-2 text-sm font-['Poppins']">
                    <span className="text-lg font-bold">{food.averageRating.toFixed(1)}</span> 
                    <span className="text-xs"> ({food.totalRatings})</span>
                  </span>
                </div>
                
                <div className="w-[339px] h-[87px] left-[15px] top-[200px] absolute text-black text-[15px] font-bold font-['Reem Kufi'] pr-9">
                  {food.description}
                </div>
                
              </div>
              <div className="left-[15px] top-[500px] absolute text-[#bb995b] text-3xl font-bold font-['Poppins']">
                LKR {food.price}
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

        
     
        
      </div>
    </div>
  );
}
