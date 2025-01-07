import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cart_icon from "./Assets/cart_icon.png";
import user_icon from "./Assets/user_icon.png";
import Fabceylon_logo from '@/components/Assets/Fabceylon_logo.png';

export const KandyMainMenuNavBar = () => {
  const [activeItem, setActiveItem] = useState(''); // Tracks the active menu item

  const menuItems = [
    { label: 'HOME', link: '#' },
    { label: 'MENU', link: 'http://localhost:3000/fabceylon-kandy/menu/salads' },
    { label: 'PLACE ORDER', link: 'http://localhost:3000/fabceylon-kandy/order/salads' },
    { label: 'RESERVATIONS', link: '#' },
    { label: 'REGISTER', link: '#' },
  ];

  return (
    <div className="relative">
      <div className="flex items-center h-[150px] ml-[20px]">
        <Image
          className="w-[45px] h-[45px] ml-10"
          src={Fabceylon_logo}
          alt="Fab Ceylon Logo"
          width={52}
          height={52}
        />
        <div className="w-[323px] text-[#bb8a6c] text-[40px] font-extrabold font-serif ml-10">
          FAB CEYLON
        </div>

        <div className="flex items-center gap-8 ml-60">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`relative group text-[20px] font-medium font-['Poppins'] cursor-pointer ${
                activeItem === item.label ? 'text-[#caa767]' : 'text-[#caa767]'
              }`}
              onClick={() => setActiveItem(item.label)} // Set active item on click
            >
              <Link href={item.link}>{item.label}</Link>
              {/* Up Line */}
              <span
                className={`absolute bottom-[100%] left-0 h-[2px] bg-[#caa767] transition-all duration-300 ease-in-out ${
                  activeItem === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
              {/* Down Line */}
              <span
                className={`absolute top-full left-0 h-[2px] bg-[#caa767] transition-all duration-300 ease-in-out ${
                  activeItem === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </div>
          ))}

          <div className="h-[52px] justify-start items-center gap-[22px] inline-flex ml-20">
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
    </div>
  );
};
