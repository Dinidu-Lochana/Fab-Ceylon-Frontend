import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cart_icon from "./Assets/cart_icon.png";
import user_icon from "./Assets/user_icon.png";
import Fabceylon_logo from '@/components/Assets/Fabceylon_logo.png';

export const MainMenuNavBar = () => {
  return (
    <div className="relative">
      <div className="flex items-center h-[150px] ml-[20px]">
        {/* Fabceylon Logo */}
        <Image
          className="w-[45px] h-[45px] ml-10"
          src={Fabceylon_logo}
          alt="Fabceylon Logo"
          width={52}
          height={52}
        />
        <div className="w-[323px] text-[#eb650f] text-[40px] font-extrabold font-['Post No Bills Colombo ExtraBold'] ml-10">
          FAB CEYLON
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 ml-60">
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">HOME</div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">MENU</div>

          {/* PLACE ORDER Link - Use relative URL */}
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins'] whitespace-nowrap">
            <Link href="/fabceylon-kandy/order/salads">
              PLACE ORDER
            </Link>
          </div>

          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">RESERVATIONS</div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">REGISTER</div>

          {/* Cart and User Icons */}
          <div className="h-[52px] justify-start items-center gap-[22px] inline-flex ml-20">
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
    </div>
  );
};
