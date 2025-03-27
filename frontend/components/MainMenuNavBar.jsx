<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cart_icon from "./Assets/cart_icon.png"
import user_icon from "./Assets/user_icon.png"
import Fabceylon_logo from '@/components/Assets/Fabceylon_logo.png'

export const MainMenuNavBar = () => {
  return (
    <div className="relative">
      <div className="flex items-center h-[150px]  ml-[20px]">
        
        <Image
        className="w-[45px] h-[45px] ml-10"
        src={Fabceylon_logo} 
        alt="Icon 1"
        width={52}
        height={52}
      />
        <div className="w-[323px] text-[#eb650f] text-[40px] font-extrabold font-['Post No Bills Colombo ExtraBold'] ml-10">
          FAB CEYLON
        </div>

        
        <div className="flex items-center gap-8 ml-60 ">
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">
            <Link href="/">
              HOME
            </Link></div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins'] whitespace-nowrap">
            <Link href="/fabceylon-kurunegala/menu/salads">
              MENU
            </Link>
          </div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins'] whitespace-nowrap">
            <Link href="/fabceylon-kurunegala/order/salads">
              PLACE ORDER
            </Link>
          </div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">RESERVATIONS</div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">
          <Link href="/login">
              LOGIN
          </Link></div>

          <div className="h-[52px] justify-start items-center gap-[22px] inline-flex ml-20">
     
      <Image
        className="w-[40px] h-[40px]"
        src={user_icon} 
        alt="Icon 2"
        width={52}
        height={52}
      />
    </div>
        </div>
      </div>
    </div>
  );
};
=======
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import cart_icon from "./Assets/cart_icon.png";
import user_icon from "./Assets/user_icon.png";
import Fabceylon_logo from '@/components/Assets/fab_kurunegala.png';

export const MainMenuNavBar = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.refresh(); // Refresh page to update UI
  };

  const menuItems = [
    { label: 'HOME', link: '/' },
    { label: 'MENU', link: '/fabceylon-kurunegala/menu/salads-soups' },
    { label: 'PLACE ORDER', link: '/fabceylon-kurunegala/order' },
    { label: 'RESERVATIONS', link: '#' },
    ...(isLoggedIn
      ? [
          { label: 'MY ORDERS', link: `/ratings/${process.env.NEXT_PUBLIC_FAB_CEYLON_KURUNEGALA}` },
          { label: 'LOGOUT', action: handleLogout },
        ]
      : [{ label: 'LOGIN', link: '/login' }]
    ),
  ];
  

  return (
    <div className="relative">
      <div className="flex items-center h-[150px] ml-[20px]">
        <Image
          className="w-[260px] h-[45px] ml-10"
          src={Fabceylon_logo}
          alt="Fab Ceylon Logo"
          width={352}
          height={352}
        />

        <div className="flex items-center gap-8 ml-60">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`relative group text-[20px] font-medium font-['Poppins'] cursor-pointer ${
                activeItem === item.label ? 'text-[#caa767]' : 'text-[#caa767]'
              }`}
              onClick={() => {
                if (item.action) {
                  item.action(); // Call action for logout
                } else {
                  setActiveItem(item.label);
                  router.push(item.link); // Navigate if it's a link
                }
              }}
            >
              {item.link ? (
                <Link href={item.link}>{item.label}</Link>
              ) : (
                <span>{item.label}</span> // Render text instead of a broken link
              )}
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
>>>>>>> 4e25e367453dd3dbc91797f570fe309e25323746
