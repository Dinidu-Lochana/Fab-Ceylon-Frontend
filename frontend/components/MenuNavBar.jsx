import React from 'react';
import Link from 'next/link';

export const MenuNavBar = () => {
  return (
    <div>
      <div className="w-[15px] h-[66px] relative">
        <Link href="/kandyMenu/friedrice">
          <div className="w-[125px] left-[140px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Fried Rice
          </div>
        </Link>
        <Link href="/kandyMenu">
          <div className="w-[125px] left-[0px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Burger
          </div>
        </Link>
        <Link href="/kandyMenu/kottu">
          <div className="w-[125px] left-[280px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Kottu
          </div>
        </Link>
        <Link href="/kandyMenu/biriyani">
          <div className="w-[125px] left-[425px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Biriyani
          </div>
        </Link>
        <Link href="/kandyMenu/noodles">
          <div className="w-[12px] left-[590px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Noodles
          </div>
        </Link>
        <Link href="/kandyMenu/soup">
          <div className="w-[125px] left-[700px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Soup
          </div>
        </Link>
        <Link href="/kandyMenu/milkshake">
          <div className="w-[215px] h-9 left-[820px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Milk Shake
          </div>
        </Link>
        <Link href="/kandyMenu/mojito">
          <div className="w-[125px] left-[1050px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Mojito
          </div>
        </Link>
        <Link href="/kandyMenu/salad">
          <div className="w-[125px] left-[1250px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Salad
          </div>
        </Link>
      </div>
    </div>
  );
};