import React from 'react';
import Link from 'next/link';

export const MenuNavBar = () => {
  return (
    <div>
      <div className="w-[15px] h-[66px] relative">
        <Link href="/fabceylon-kandy/order/appetizers">
          <div className="w-[125px] left-[120px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Appetizers
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/salads">
          <div className="w-[125px] left-[0px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Salads
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/soups">
          <div className="w-[125px] left-[220px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Soups
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/pasta-spaghetti">
          <div className="w-[125px] left-[350px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Pasta & Spaghetti
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/noodles">
          <div className="w-[125px] left-[480px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Noodles
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/kottu">
          <div className="w-[125px] left-[590px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Kottu
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/fried-rice">
          <div className="w-[125px] left-[700px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Fried Rice
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/biriyani">
          <div className="w-[125px] left-[800px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Biriyani
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/signature-meals">
          <div className="w-[125px] left-[1000px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Signature Meals
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/seafood-monster">
          <div className="w-[125px] left-[1150px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Seafood Monster
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/burgers">
          <div className="w-[125px] left-[1300px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Burgers
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/sandwiches-submarines">
          <div className="w-[125px] left-[1450px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Sandwiches & Submarines
          </div>
        </Link>
        <Link href="/fabceylon-kandy/order/desserts">
          <div className="w-[125px] left-[1600px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Desserts
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/desserts">
          <div className="w-[125px] left-[1600px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Beverages
          </div>
        </Link>
      </div>
    </div>
  );
};
