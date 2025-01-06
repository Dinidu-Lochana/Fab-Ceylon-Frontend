'use client'; // Add this line to mark this file as a client component

import React, { useState } from 'react';
import Image from 'next/image';
import cafenuwara_nav from '@/components/Assets/cafenuwara_nav.png';
import Cafe_Nuwara_logo from '@/components/Assets/Cafe_Nuwara_logo.png';
import cart_icon from './Assets/cart_icon.png';
import user_icon from './Assets/user_icon.png';
import cafenuwaranav_2 from '@/components/Assets/cafenuwaranav_2.png';
import Link from 'next/link';

export const CafeNuwaraNavBar = () => {
  const [beveragesOpen, setBeveragesOpen] = useState(false); // State to toggle the flow box for beverages

  const toggleBeverages = () => {
    setBeveragesOpen(!beveragesOpen);
  };

  const closeBeverages = () => {
    setBeveragesOpen(false);
  };

  return (
    <div>
      <div className="relative h-screen bg-[#f0e6d9]">
        <div className="relative rounded-[20px] overflow-hidden pt-10 pl-10 pr-10">
          <Image
            src={cafenuwara_nav}
            alt="Cafe Nuwara Navigation Background"
            width={1798}
            height={176}
            className="rounded-[20px] opacity-50"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center mt-[20px] ml-24">
            <Image
              src={Cafe_Nuwara_logo}
              alt="Cafe Nuwara Logo"
              width={100}
              height={100}
              className="mr-4 rounded-full"
            />
            <div className="mr-10 font-serif text-3xl font-extrabold text-black">
              CAFE NUWARA
            </div>
            <div className="flex gap-8 text-black text-[30px] font-normal font-['Reem Kufi'] ml-40">
              <div>Menu</div>
              <div>Reservation</div>
              <div>Register</div>
            </div>
            <div className="h-[52px] justify-start items-center gap-[22px] inline-flex ml-10">
              <Image
                className="w-[40px] h-[40px]"
                src={cart_icon}
                alt="Cart Icon"
                width={52}
                height={52}
              />
              <Image
                className="w-[40px] h-[40px]"
                src={user_icon}
                alt="User Icon"
                width={52}
                height={52}
              />
            </div>
          </div>
        </div>
        <div className="pt-10 pl-5 pr-5 overflow-hidden">
          <Image
            src={cafenuwaranav_2}
            alt="Placeholder Image"
            width={1798}
            height={223}
            style={{ width: '1700px', height: '160px' }}
          />
          
          <div className="w-[1500px] h-[120px] relative">
            <div className="left-[1270px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="#" onClick={toggleBeverages}>
                Beverages
              </a>

              {beveragesOpen && (
                <div
                  className="absolute top-[30px] left-0 min-w-[180px] bg-[#f0e6d9] shadow-lg p-4 rounded-md h-[130px] "
                   // Close when mouse leaves the entire dropdown area
                >
                  <div className="flex-col gap-3 h-[100px]"  onMouseLeave={closeBeverages}>
                    <div>
                    <Link href="/cafenuwara/order/Iced-Tea-&-Coffee">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Iced Tea & Coffee
                      </div>
                    </Link>
                    <Link href="/cafenuwara/order/Hot-Beverage">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Hot Beverage
                      </div>
                    </Link>
                    <Link href="/cafenuwara/order/Bubble-Tea">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Bubble Tea
                      </div>
                    </Link>
                    <Link href="/cafenuwara/order/Mojito">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Mojito
                      </div>
                    </Link>
                    <Link href="/cafenuwara/order/Milk-Shake">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Milk Shake
                      </div>
                    </Link>
                    </div>
                  </div>
                </div>
)}



            </div>

            {/* Other menu items */}
            <div className="left-[40px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Appetizer">Appetizer</a>
            </div>
            <div className="left-[150px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Salad-and-Soup">
                Salad
                <br />
                & Soup
              </a>
            </div>
            <div className="left-[240px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Pasta-and-Spaghetti">
                Pasta
                <br />
                & Spaghetti
              </a>
            </div>
            <div className="left-[360px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Noodles">Noodles</a>
            </div>
            <div className="left-[460px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Kottu">Kottu</a>
            </div>
            <div className="left-[540px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Fried-Rice">
                Fried
                <br />
                Rice
              </a>
            </div>
            <div className="left-[620px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Biriyani">Biriyani</a>
            </div>
            <div className="left-[720px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Signature-Meals">
                Signature
                <br />
                Meals
              </a>
            </div>
            <div className="left-[840px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Add-On">Add-On</a>
            </div>
            <div className="left-[940px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Burger">Burger</a>
            </div>
            <div className="left-[1040px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Sandwiches-and-Submarines">
                Sandwiches
                <br />
                & Submarines
              </a>
            </div>
            <div className="left-[1190px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Bowls">Bowls</a>
            </div>
            <div className="left-[1370px] -mt-20 absolute text-center text-black text-[16px] font-bold font-['Reem Kufi']">
              <a href="/cafenuwara/order/Dessert">Dessert</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
