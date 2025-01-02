import React from 'react';
import Link from 'next/link';

export const MenuNavBar = () => {
  return (
    <div>
      <div className="w-[15px] h-[66px] relative">
        <Link href="/fabceylon-kurunegala/order/appetizers">
          <div className="w-[125px] left-[140px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Appetizers
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/salads">
          <div className="w-[125px] left-[0px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Salads
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/soups">
          <div className="w-[125px] left-[280px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Soups
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pasta-spaghetti">
          <div className="w-[125px] left-[425px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Pasta & Spaghetti
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/noodles">
          <div className="w-[12px] left-[590px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Noodles
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/kottu">
          <div className="w-[125px] left-[700px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Kottu
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/fried-rice">
          <div className="w-[125px] left-[820px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Fried Rice
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/biriyani">
          <div className="w-[125px] left-[1050px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Biriyani
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/signature-meals">
          <div className="w-[125px] left-[1250px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Signature Meals
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/seafood-monster">
          <div className="w-[125px] left-[1400px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Seafood Monster
          </div>
        </Link>
        
        <Link href="/fabceylon-kurunegala/order/burgers">
          <div className="w-[125px] left-[1600px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Burgers
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/sandwiches-submarines">
          <div className="w-[125px] left-[1800px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Sandwiches & Submarines
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/desserts">
          <div className="w-[125px] left-[2000px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Desserts
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/iced-coffee-iced-tea">
          <div className="w-[215px] h-9 left-[2200px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Iced Coffee & Iced Tea
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/bubble-tea">
          <div className="w-[125px] left-[2450px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Bubble Tea
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/mojito">
          <div className="w-[125px] left-[2650px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Mojito
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/milk-shakes">
          <div className="w-[215px] h-9 left-[2850px] top-[16px] absolute text-center text-[#eb650f] text-2xl font-bold font-['Poppins'] cursor-pointer">
            Milk Shakes
          </div>
        </Link>
      </div>
    </div>
  );
};
