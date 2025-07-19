"use client";

import React, { useState } from 'react';
import { Menu, X, User, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Fabceylon_logo from "@/components/Assets/Fabceylon_logo.png";

const KandyMainMenuNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative ">
      {/* Main Navigation */}
      <div className="relative rounded-[20px] overflow-hidden mx-4 sm:mx-10 mt-6 shadow-xl h-[120px] sm:h-[160px] bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Content on top of background */}
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full px-4 sm:px-8 lg:px-16">
          
          {/* Logo with Text */}
          <div className="flex items-center">
            <div className="flex items-center px-4 py-2 space-x-3 transition-all duration-200 transform rounded-lg shadow-lg sm:px-6 sm:py-3 lg:px-8 lg:py-4 hover:scale-105">
              <Image 
                src={Fabceylon_logo} 
                alt="Fabceylon Logo" 
                width={40} 
                height={40} 
                className="object-contain"
                priority
              />
              <h1 className="font-serif text-lg font-bold tracking-wide text-orange-600 sm:text-2xl lg:text-2xl">
                FABCEYLON KANDY
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 lg:flex">
            <nav className="flex gap-6 xl:gap-8 text-[#caa767] font-serif font-semibold">
              {["menu", "order", "reservation", "register"].map((id) => (
                <a
                  key={id}
                  href={
                    id === "order"
                      ? "/fabceylon-kandy/order"
                      : `/fabceylon-kandy/${id}/appetizers`
                  }
                  className="relative text-lg transition-colors duration-200 xl:text-xl hover:text-amber-300 group"
                >
                  {id === "order" ? "Place Order" : id.charAt(0).toUpperCase() + id.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* User Icon */}
            <div className="w-[45px] h-[45px] bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-[40px] h-[40px] bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute z-50 mt-2 bg-white border shadow-2xl lg:hidden top-full left-4 right-4 rounded-xl border-amber-200 animate-fade-in">
          <div className="p-6 space-y-4">
            {["menu", "order", "reservation", "register"].map((id) => (
              <a
                key={id}
                href={
                  id === "order"
                    ? "/fabceylon-kandy/order"
                    : `/fabceylon-kandy/${id}/appetizers`
                }
                className="block py-2 text-lg font-semibold text-gray-800 transition-colors duration-200 border-b hover:text-amber-700 border-amber-100"
              >
                {id === "order" ? "Place Order" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <div className="pt-4 border-t border-amber-100">
              <div className="flex items-center justify-center w-full">
                <div className="w-[40px] h-[40px] bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Info Bar */}
      <div className="items-center justify-center hidden mt-4 space-x-8 text-sm sm:flex text-amber-700">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span>Kandy, Sri Lanka</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>+94 77 123 4567</span>
        </div>
      </div>
    </div>
  );
};

export default KandyMainMenuNavBar;
