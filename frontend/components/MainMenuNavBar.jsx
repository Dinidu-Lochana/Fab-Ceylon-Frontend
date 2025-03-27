import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cart_icon from "../components/Assets/cart_icon.png"
import user_icon from "../components/Assets/user_icon.png"
import Fabceylon_logo from '../components/Assets/Fabceylon_logo.png'

export const MainMenuNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full  shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Image
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              src={Fabceylon_logo}
              alt="Fab Ceylon Logo"
              width={52}
              height={52}
            />
            <div className="text-[#eb650f] text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Post No Bills Colombo ExtraBold']">
              FAB CEYLON
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-[#caa767] text-sm xl:text-base font-medium font-['Poppins'] hover:text-[#eb650f] transition-colors">
              HOME
            </Link>
            <Link href="/fabceylon-kurunegala/menu/salads" className="text-[#caa767] text-sm xl:text-base font-medium font-['Poppins'] whitespace-nowrap hover:text-[#eb650f] transition-colors">
              MENU
            </Link>
            <Link href="/fabceylon-kurunegala/order/salads" className="text-[#caa767] text-sm xl:text-base font-medium font-['Poppins'] whitespace-nowrap hover:text-[#eb650f] transition-colors">
              PLACE ORDER
            </Link>
            <Link href="/fabceylon-kurunegala/reservations" className="text-[#caa767] text-sm xl:text-base font-medium font-['Poppins'] hover:text-[#eb650f] transition-colors">
              RESERVATIONS
            </Link>
            <Link href="/login" className="text-[#caa767] text-sm xl:text-base font-medium font-['Poppins'] hover:text-[#eb650f] transition-colors">
              LOGIN
            </Link>
            <div className="flex items-center space-x-4">
              <Image
                className="w-6 h-6 xl:w-8 xl:h-8 cursor-pointer"
                src={user_icon}
                alt="User Icon"
                width={32}
                height={32}
              />
              <Image
                className="w-6 h-6 xl:w-8 xl:h-8 cursor-pointer"
                src={cart_icon}
                alt="Cart Icon"
                width={32}
                height={32}
              />
            </div>
          </div>

          {/* Mobile Menu Button and Icons */}
          <div className="flex items-center lg:hidden space-x-4">
            <Image
              className="w-6 h-6 cursor-pointer"
              src={cart_icon}
              alt="Cart Icon"
              width={24}
              height={24}
            />
            <button 
              className="text-[#caa767] focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden  pb-4`}>
          <div className="flex flex-col space-y-3 px-4">
            <Link 
              href="/" 
              className="text-[#caa767] text-base font-medium font-['Poppins'] hover:text-[#eb650f] py-2 border-b "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/fabceylon-kurunegala/menu/salads" 
              className="text-[#caa767] text-base font-medium font-['Poppins'] hover:text-[#eb650f] py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MENU
            </Link>
            <Link 
              href="/fabceylon-kurunegala/order/salads" 
              className="text-[#caa767] text-base font-medium font-['Poppins'] hover:text-[#eb650f] py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PLACE ORDER
            </Link>
            <Link 
              href="/fabceylon-kurunegala/reservations" 
              className="text-[#caa767] text-base font-medium font-['Poppins'] hover:text-[#eb650f] py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESERVATIONS
            </Link>
            <Link 
              href="/login" 
              className="text-[#caa767] text-base font-medium font-['Poppins'] hover:text-[#eb650f] py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LOGIN
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <Image
                className="w-6 h-6 cursor-pointer"
                src={user_icon}
                alt="User Icon"
                width={24}
                height={24}
              />
              <span className="text-[#caa767] text-base font-medium font-['Poppins']">My Account</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};