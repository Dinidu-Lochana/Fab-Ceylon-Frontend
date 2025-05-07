'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import cart_icon from './Assets/cart_icon.png';
import user_icon from './Assets/user_icon.png';
import Fabceylon_logo from '@/components/Assets/fab_kurunegala.png';

export const MainMenuNavBar = () => {
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
    <div className="relative w-full shadow-md z-50">
      <div className="flex items-center justify-between h-[150px] max-w-7xl mx-auto px-6">
        {/* Logo */}
        <Image
          className="w-[260px] h-[45px]"
          src={Fabceylon_logo}
          alt="Fab Ceylon Logo"
          width={260}
          height={45}
        />

        {/* Menu Items */}
        <div className="flex items-center gap-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`relative group text-[18px] font-medium font-['Poppins'] cursor-pointer ${
                activeItem === item.label ? 'text-[#caa767]' : 'text-[#caa767]'
              }`}
              onClick={() => {
                if (item.action) {
                  item.action();
                } else {
                  setActiveItem(item.label);
                  router.push(item.link);
                }
              }}
            >
              {item.link ? (
                <Link href={item.link}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
              {/* Top Line */}
              <span
                className={`absolute bottom-[100%] left-0 h-[2px] bg-[#caa767] transition-all duration-300 ease-in-out ${
                  activeItem === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
              {/* Bottom Line */}
              <span
                className={`absolute top-full left-0 h-[2px] bg-[#caa767] transition-all duration-300 ease-in-out ${
                  activeItem === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </div>
          ))}

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
