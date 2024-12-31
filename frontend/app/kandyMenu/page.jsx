'use client';
import React from 'react';
import MenuBack_image from '@/components/Assets/MenuBack_image.jpg';
import Bugger from '@/components/Assets/Bugger.png';
import Image from 'next/image';
import Down_arrow from '@/components/Assets/Down_arrow.svg';
import star_icon from '@/components/Assets/star_icon.png';
import { MenuNavBar } from '@/components/MenuNavBar';
import { MainMenuNavBar } from '@/components/MainMenuNavBar';

export default function KandyMenu() {
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
        <MainMenuNavBar />
        <MenuNavBar />

        {/* Hero Section */}
        <div className="gap-2 relative text-left text-white">
          <div style={{ marginLeft: '100px' }}>
            <h1 className="text-7xl font-poppins font-bold pt-40 ml-32 tracking-wider">
              CHOOSE <br />
              <span className="text-white ml-28 mt-72">&</span> <br />
              <span className="text-white ml-8">ENJOY...</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-black">
        {/* Section Title */}
        <div className="text-[#eb650f] text-8xl font-bold font-['Poppins'] bg-black text-center">
          <h1>Burger</h1>
          <div className="text-white text-4xl font-bold font-['Poppins'] mt-10">
            It is good time for the great taste of burgers
          </div>
        </div>

        {/* Cards and Cart Container */}
        <div className="flex flex-row justify-center items-start gap-10 mt-10">
          {/* Card Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4,5,6,7,8,9,10].map((_, index) => (
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
                <div className="w-[260px] text-white text-xl font-bold font-['Poppins'] mt-5">
                  Juicy, seasoned chicken patties, perfect for delicious, flavorful burgers.
                </div>
                <div className="text-[#eb650f] text-2xl font-bold font-['Poppins'] mt-6">
                  LKR 750
                </div>
                <div className="text-white text-xl font-bold font-['Poppins'] mt-8">
                  Customer Reviews
                  <Image
                    className="w-[29px] h-[31px] rounded-full -mt-7 ml-44"
                    src={Down_arrow}
                    alt="Customer"
                  />
                </div>
                <div className="flex justify-start items-center gap-[3px] mt-3">
                  {Array(4)
                    .fill(0)
                    .map((_, starIndex) => (
                      <Image
                        key={starIndex}
                        className="w-[20px] h-[20px]"
                        src={star_icon}
                        alt={`Review ${starIndex + 1}`}
                      />
                    ))}
                </div>
                <div className="h-[40px] px-[23px] py-[9px] bg-[#eb650f] rounded-[20px] flex justify-center items-center mt-8">
                  <div className="text-black text-[20px] font-bold font-['Poppins']">
                    ADD
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Section */}
          <div className="w-[397px] h-[780px] px-5 py-10 bg-[#110d0d] rounded-[20px] border-4 border-white flex flex-col items-start">
            <div className="w-full text-[#eb650f] text-5xl font-bold font-['Poppins'] mb-5">
              Your Cart
            </div>
            <div className="w-full h-[360px] relative">
              <Image
                alt="Placeholder Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full text-white text-xl font-bold font-['Poppins'] mt-5">
              Check Out Rs. 0.00
            </div>
            <div className="w-full text-white text-xl font-medium font-['Poppins'] mt-3">
              Sub Total: 0.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
