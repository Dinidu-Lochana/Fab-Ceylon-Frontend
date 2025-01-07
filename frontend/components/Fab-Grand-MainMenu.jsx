import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cart_icon from "./Assets/cart_icon.png"
import user_icon from "./Assets/user_icon.png"
import Fabceylon_logo from '@/components/Assets/Fabceylon_logo.png'
import Fabceylon_Grand_logo from "@/components/Assets/Fabceylon_Grand_logo.png";

export const GrandMainMenuNavBar = () => {
  return (
    <div className="relative">
      <div className="flex items-center h-[150px]  ml-[20px]">
        
       
        <div className="w-[323px] text-[#eb650f] text-[25px] font-extrabold font-postNoe ml-10">
          FAB CEYLON GRAND
        </div>

        
        <div className="flex items-center gap-8 ml-60 ">
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">HOME</div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins'] whitespace-nowrap">
            <Link href="http://localhost:3000/fabceylon-grand/menu/salads">
              MENU
            </Link>
          </div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins'] whitespace-nowrap">
            <Link href="http://localhost:3000/fabceylon-grand/order/salads">
              PLACE ORDER
            </Link>
          </div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">RESERVATIONS</div>
          <div className="text-[#caa767] text-[20px] font-medium font-['Poppins']">REGISTER</div>

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