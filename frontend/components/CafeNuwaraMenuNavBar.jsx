'use client'; // Add this line to mark this file as a client component

import React, { useState } from 'react';
import Image from 'next/image';
import cafenuwara_nav from '@/components/Assets/cafenuwara_nav.png';
import Cafe_Nuwara_logo from '@/components/Assets/Nuwara _Logo_flat.png';
import cart_icon from './Assets/cart_icon.png';
import user_icon from './Assets/user_icon.png';
import cafenuwaranav_2 from '@/components/Assets/cafenuwaranav_2.png';
import Link from 'next/link';

export const CafeNuwaraMenuNavBar = () => {
  const [beveragesOpen, setBeveragesOpen] = useState(false); // State to toggle the flow box for beverages

  const toggleBeverages = () => {
    setBeveragesOpen(!beveragesOpen);
  };

  const closeBeverages = () => {
    setBeveragesOpen(false);
  };

  return (
    <div>
      <div className="relative h-screen bg-[#f0e6d9]">
        <div className="relative rounded-[20px] overflow-hidden pt-10 pl-10 pr-10">
          <Image
            src={cafenuwara_nav}
            alt="Cafe Nuwara Navigation Background"
            width={1798}
            height={176}
            className="rounded-[20px] opacity-50"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center mt-[20px] ml-24">
            <Image
                          src={Cafe_Nuwara_logo}
                          alt="Cafe Nuwara Logo"
                          width={220}
                          height={80}
                          className="mr-20"
                        />

            {/*Main MEnu Item*/}
            
            <div className="flex gap-8 text-black text-[25px] font-normal font-reemKufi ml-96">
              <div>
                <Link href="/cafenuwara/menu/appetizers">
                  Menu
                </Link>
              </div>
              <div>
                <Link href="/cafenuwara/order/appetizers">
                  Place Order
                </Link>
              </div>
              <div>Reservation</div>
              <div>
                <Link href="/signup">
                  Register
                </Link>
              </div>
            </div>
            <div className="h-[52px] justify-start items-center gap-[22px] inline-flex ml-10">
              
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
        {/*Menu Item*/}
        <div className="pt-10 pl-5 pr-5 overflow-hidden">
          <Image
            src={cafenuwaranav_2}
            alt="Placeholder Image"
            width={1798}
            height={223}
            style={{ width: '1700px', height: '160px' }}
          />
          
          <div className="w-[1500px] h-[120px] relative">
            <div className="left-[1270px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="#" onClick={toggleBeverages}>
                Beverages
              </a>

              {beveragesOpen && (
                <div
                  className="absolute top-[30px] left-0 min-w-[180px] bg-[#f0e6d9] shadow-lg p-4 rounded-md h-[130px] "
                   // Close when mouse leaves the entire dropdown area
                >
                  <div className="flex-col gap-3 h-[100px]"  onMouseLeave={closeBeverages}>
                    <div>
                    <Link href="/cafenuwara/menu/iced-coffee-iced-tea">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Iced Tea & Coffee
                      </div>
                    </Link>
                    <Link href="/cafenuwara/menu/hot-beverages">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Hot Beverages
                      </div>
                    </Link>
                    <Link href="/cafenuwara/menu/bubble-tea">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Bubble Tea
                      </div>
                    </Link>
                    <Link href="/cafenuwara/menu/mojito">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Mojito
                      </div>
                    </Link>
                    <Link href="/cafenuwara/menu/milk-shakes">
                      <div className="text-black text-[14px] font-bold hover:text-gray-600 cursor-pointer">
                        Milk Shakes
                      </div>
                    </Link>
                    </div>
                  </div>
                </div>
)}



            </div>

            {/* Other menu items */}
            <div className="left-[40px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/appetizers">Appetizers</a>
            </div>
            <div className="left-[150px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/salads-soups">
                Salads &
                <br />
                 Soups
              </a>
            </div>
            <div className="left-[240px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/pasta-spaghetti">
                Pasta &
                <br />
                 Spaghetti
              </a>
            </div>
            <div className="left-[360px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/noodles">Noodles</a>
            </div>
            <div className="left-[460px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/kottu">Kottu</a>
            </div>
            <div className="left-[540px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/fried-rice">
                Fried
                <br />
                Rice
              </a>
            </div>
            <div className="left-[620px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/biriyani">Biriyani</a>
            </div>
            <div className="left-[720px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/signature-meals">
                Signature
                <br />
                Meals
              </a>
            </div>
            <div className="left-[840px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/add-on">Add-On</a>
            </div>
            <div className="left-[940px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/burgers">Burgers</a>
            </div>
            <div className="left-[1040px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/sandwiches-submarines">
                Sandwiches
                <br />
                & Submarines
              </a>
            </div>
            <div className="left-[1190px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/bowls">Bowls</a>
            </div>
            <div className="left-[1370px] -mt-28 absolute text-center text-black text-[16px] font-bold font-reemKufi">
              <a href="/cafenuwara/menu/desserts">Desserts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
