import React from 'react';
import Link from 'next/link';

export const FabKurungalaMenuNavBar = () => {
  return (
    <div>
      <div className="w-[15px] h-[66px] relative">
        <Link href="/fabceylon-kurunegala/menu/appetizers">
          <div className="w-[125px] left-[120px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Appetizers
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/salads">
          <div className="w-[125px] left-[0px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Salads &  Soups
          </div>
        </Link>
        
        <Link href="/fabceylon-kurunegala/menu/pasta-spaghetti">
          <div className="w-[125px] left-[250px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Pasta & Spaghetti
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/noodles">
          <div className="w-[125px] left-[370px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Noodles
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/kottu">
          <div className="w-[125px] left-[470px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Kottu
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/fried-rice">
          <div className="w-[125px] left-[580px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Fried Rice
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/biriyani">
          <div className="w-[125px] left-[690px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Biriyani
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/signature-meals">
          <div className="w-[125px] left-[800px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Signature Meals
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/seafood-monster">
          <div className="w-[125px] left-[910px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Seafood Monster
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/burgers">
          <div className="w-[125px] left-[1010px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Burgers
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/sandwiches-submarines">
          <div className="w-[125px] left-[1140px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Sandwiches & Submarines
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/desserts">
          <div className="w-[125px] left-[1270px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Desserts
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/beverages">
          <div className="w-[125px] left-[1380px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Beverages
          </div>
        </Link>
        
      </div>
    </div>
  );
};
