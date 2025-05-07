'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import cart_icon from './Assets/cart_icon.png';
import user_icon from './Assets/user_icon.png';
import Fabceylon_logo from '@/components/Assets/Fabceylon_logo.png';

export const KandyMainMenuNavBar = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.refresh();
  };

  const menuItems = [
    { label: 'HOME', link: '/' },
    { label: 'MENU', link: '/fabceylon-kandy/menu/salads-soups' },
    { label: 'PLACE ORDER', link: '/fabceylon-kandy/order' },
    { label: 'RESERVATIONS', link: '#' },
    ...(isLoggedIn
      ? [
          { label: 'MY ORDERS', link: `/ratings/${process.env.NEXT_PUBLIC_FAB_CEYLON_KANDY}` },
          { label: 'LOGOUT', action: handleLogout },
        ]
      : [{ label: 'LOGIN', link: '/login' }]
    ),
  ];

  return (
    <div className="relative bg-transparent  w-full z-50">
      <div className="flex items-center justify-between h-[150px] max-w-7xl mx-auto px-6">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <Image
            className="w-[45px] h-[45px]"
            src={Fabceylon_logo}
            alt="Fab Ceylon Logo"
            width={45}
            height={45}
          />
          <div className="text-[#eb650f] text-[36px] font-extrabold font-serif">
            FAB CEYLON
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center gap-8">
          {menuItems.map((item, index) =>
            item.link ? (
              <div
                key={index}
                className={`relative group text-[18px] font-medium font-['Poppins'] cursor-pointer ${
                  activeItem === item.label ? 'text-[#caa767]' : 'text-[#caa767]'
                }`}
                onClick={() => setActiveItem(item.label)}
              >
                <Link href={item.link}>{item.label}</Link>
                <span
                  className={`absolute bottom-[100%] left-0 h-[2px] bg-[#caa767] transition-all duration-300 ease-in-out ${
                    activeItem === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
                <span
                  className={`absolute top-full left-0 h-[2px] bg-[#caa767] transition-all duration-300 ease-in-out ${
                    activeItem === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </div>
            ) : (
              <button
                key={index}
                onClick={item.action}
                className="text-[18px] font-medium font-['Poppins'] text-[#caa767] cursor-pointer"
              >
                {item.label}
              </button>
            )
          )}

          {/* User Icon */}
          <div className="ml-6">
            <Image
              className="w-[40px] h-[40px]"
              src={user_icon}
              alt="User Icon"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
