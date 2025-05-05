'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Fabceylon_logo from '@/components/Assets/Fabceylon_logo.png';
import user_icon from './Assets/user_icon.png';

export const AdminNavBar = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('admin'));
    if (admin) {
      setAdminName(admin.name || 'Admin');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    router.push('/admin');
  };

  const menuItems = [
    { label: 'DASHBOARD', link: '/analyse' },
    { label: 'ORDERS', link: '/admin/orders' },
    { label: 'MANAGE MENU', link: '/admin/foods' },
    { label: 'RESERVATIONS', link: '/admin/reservation' },
    { label: 'LOGOUT', action: handleLogout },
  ];

  const handleNavClick = (label) => {
    setActiveItem(label);
    if (typeof window !== 'undefined') {
      localStorage.setItem('activeAdminNav', label);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('activeAdminNav');
    if (stored) setActiveItem(stored);
  }, []);

  return (
    <div className="bg-[#1f1f1f] text-[#caa767] shadow-md px-10 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src={Fabceylon_logo} alt="Logo" width={45} height={45} />
        <div className="text-2xl font-bold font-serif text-[#eb650f]">FAB CEYLON ADMIN</div>
      </div>

      <div className="flex items-center gap-10">
        {menuItems.map((item, index) =>
          item.link ? (
            <Link key={index} href={item.link}>
              <div
                onClick={() => handleNavClick(item.label)}
                className={`relative group font-medium text-lg cursor-pointer ${
                  activeItem === item.label ? 'text-[#ffffff]' : 'text-[#caa767]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#caa767] transition-all duration-300 ease-in-out ${
                    activeItem === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </div>
            </Link>
          ) : (
            <button
              key={index}
              onClick={item.action}
              className="text-lg font-medium text-[#caa767] hover:text-white transition"
            >
              {item.label}
            </button>
          )
        )}

        <div className="flex items-center gap-2 ml-6">
          <Image src={user_icon} alt="Admin Icon" width={32} height={32} />
          <span className="text-sm font-semibold text-white">{adminName}</span>
        </div>
      </div>
    </div>
  );
};
