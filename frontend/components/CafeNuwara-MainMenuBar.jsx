'use client'; // Add this line to mark this file as a client component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import cafenuwara_nav from '@/components/Assets/cafenuwara_nav.png';
import Cafe_Nuwara_logo from '@/components/Assets/Nuwara _Logo_flat.png';
import cart_icon from './Assets/cart_icon.png';
import user_icon from './Assets/user_icon.png';
import cafenuwaranav_2 from '@/components/Assets/cafenuwaranav_2.png';


export const CafeNuwaraMainMenuNavBar = () => {
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
                          width={220}
                          height={80}
                          className="mr-20"
                        />

            {/*Main MEnu Item*/}
            
            <div className="flex gap-8 text-black text-[25px] font-normal font-reemKufi ml-96">
              <div>
                <Link href="/cafenuwara/menu/appetizers">
                  Menu
                </Link>
              </div>
              <div>
                <Link href="/cafenuwara/order">
                  Place Order
                </Link>
              </div>
              <div>Reservation</div>
              <div>
                <Link href="/login">
                  Login
                </Link>
              </div>
            </div>
            <div className="h-[52px] justify-start items-center  inline-flex ml-10">
              
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
        {/*Menu Item*/}
       
      </div>
    </div>
  );
};
