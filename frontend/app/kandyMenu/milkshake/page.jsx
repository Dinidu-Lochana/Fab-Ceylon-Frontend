'use client';
import React from 'react';
import MenuBack_image from '@/components/Assets/MenuBack_image.jpg';
import Bugger from '@/components/Assets/Bugger.png';
import Image from 'next/image';
import Down_arrow from '@/components/Assets/Down_arrow.svg';
import star_icon from '@/components/Assets/star_icon.png';
import { MenuNavBar } from '@/components/MenuNavBar';
import { MainMenuNavBar } from '@/components/MainMenuNavBar'

export default function KandyMenu() {
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

        {/* Hero Section */}
        <div className="gap-2 relative text-left text-white">
          <div style={{ marginLeft: '100px' }}>
            <h1 className="text-7xl font-poppins font-bold pt-40 ml-32 tracking-wider">
              CHOOSE  <br />
              <span className="text-white ml-28 mt-72">&</span>  <br />
              <span className="text-white ml-8">ENJOY...</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="relative bg-black">
        <div className="text-[#eb650f] text-8xl font-bold font-['Poppins'] bg-black text-center">
          <div className="">
            <h1 className="">Milkshake</h1>
            <div className="text-white text-4xl font-bold font-['Poppins'] mt-10">
              It is good time for the great taste of burgers
            </div>
          </div>
        </div>

        <div className="w-[320px] h-[700px] px-[43px] pt-[25.50px] mt-20 ml-10 pb-[38.50px] bg-[#110c0c] rounded-[30px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-[339px] h-[630px] relative flex-col justify-start items-start flex">
            <Image
              className="w-[200px] h-[200px] rounded-full border-4 border-white ml-4"
              src={Bugger}
              alt="Chicken Burger"
            />
            <div className="text-white text-4xl font-bold font-['Poppins'] mt-5">
              Chicken Burger
            </div>
            <div className=" w-[260px] text-white text-xl font-bold font-['Poppins'] mt-5">
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
            
            <div className="justify-start items-center gap-[3px] inline-flex">
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 1"
              />
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 2"
              />
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 3"
              />
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 4"
              />
            </div>
          </div>
          <div className="h-[40px] px-[23px] py-[9px] bg-[#eb650f] rounded-[20px] justify-center items-center gap-2.5 inline-flex -mt-20 ">
            <div className="text-black text-[20px] font-bold font-['Poppins']">ADD</div>
          </div>
        </div>
        <div className="w-[320px] h-[700px] px-[43px] pt-[25.50px] mt-20 ml-10 pb-[38.50px] bg-[#110c0c] rounded-[30px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-[339px] h-[630px] relative flex-col justify-start items-start flex">
            <Image
              className="w-[200px] h-[200px] rounded-full border-4 border-white ml-4"
              src={Bugger}
              alt="Chicken Burger"
            />
            <div className="text-white text-4xl font-bold font-['Poppins'] mt-5">
              Chicken Burger
            </div>
            <div className=" w-[260px] text-white text-xl font-bold font-['Poppins'] mt-5">
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
            
            <div className="justify-start items-center gap-[3px] inline-flex">
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 1"
              />
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 2"
              />
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 3"
              />
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 4"
              />
            </div>
          </div>
          <div className="h-[40px] px-[23px] py-[9px] bg-[#eb650f] rounded-[20px] justify-center items-center gap-2.5 inline-flex -mt-20 ">
            <div className="text-black text-[20px] font-bold font-['Poppins']">ADD</div>
          </div>
        </div>
        <div className="w-[320px] h-[700px] px-[43px] pt-[25.50px] mt-20 ml-10 pb-[38.50px] bg-[#110c0c] rounded-[30px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-[339px] h-[630px] relative flex-col justify-start items-start flex">
            <Image
              className="w-[200px] h-[200px] rounded-full border-4 border-white ml-4"
              src={Bugger}
              alt="Chicken Burger"
            />
            <div className="text-white text-4xl font-bold font-['Poppins'] mt-5">
              Chicken Burger
            </div>
            <div className=" w-[260px] text-white text-xl font-bold font-['Poppins'] mt-5">
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
            
            <div className="justify-start items-center gap-[3px] inline-flex">
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 1"
              />
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 2"
              />
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 3"
              />
              <Image
                className="w-[20px] h-[20px]"
                src={star_icon}
                alt="Review 4"
              />
            </div>
          </div>
          <div className="h-[40px] px-[23px] py-[9px] bg-[#eb650f] rounded-[20px] justify-center items-center gap-2.5 inline-flex -mt-20 ">
            <div className="text-black text-[20px] font-bold font-['Poppins']">ADD</div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
