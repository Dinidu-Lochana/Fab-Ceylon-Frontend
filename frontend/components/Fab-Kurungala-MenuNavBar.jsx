<<<<<<< HEAD
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
            Salads
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/soups">
          <div className="w-[125px] left-[220px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Soups
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/pasta-spaghetti">
          <div className="w-[125px] left-[350px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Pasta & Spaghetti
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/noodles">
          <div className="w-[125px] left-[480px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Noodles
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/kottu">
          <div className="w-[125px] left-[590px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Kottu
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/fried-rice">
          <div className="w-[125px] left-[700px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Fried Rice
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/biriyani">
          <div className="w-[125px] left-[800px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Biriyani
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/signature-meals">
          <div className="w-[125px] left-[1000px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Signature Meals
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/seafood-monster">
          <div className="w-[125px] left-[1150px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Seafood Monster
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/burgers">
          <div className="w-[125px] left-[1300px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Burgers
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/sandwiches-submarines">
          <div className="w-[125px] left-[1450px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Sandwiches & Submarines
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/desserts">
          <div className="w-[125px] left-[1600px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Desserts
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/iced-coffee-iced-tea">
          <div className="w-[215px] h-9 left-[1750px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Iced Coffee & Iced Tea
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/bubble-tea">
          <div className="w-[125px] left-[1970px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Bubble Tea
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/mojito">
          <div className="w-[125px] left-[2120px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Mojito
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/milk-shakes">
          <div className="w-[215px] h-9 left-[2270px] top-[16px] absolute text-center text-[#eb650f] text-xl font-bold font-['Poppins'] cursor-pointer">
            Milk Shakes
          </div>
        </Link>
      </div>
=======
import React, { useState } from 'react';
import Link from 'next/link';

export const FabKurungalaMenuNavBar = () => {
  const [beveragesOpen, setBeveragesOpen] = useState(false);

  const toggleBeverages = () => {
    setBeveragesOpen(!beveragesOpen);
  };

  const closeBeverages = () => {
    setBeveragesOpen(false);
  };

  return (
    <div>
      {/* Main Menu Items */}
      <div className="w-[1500px] h-[200px] relative">

        {/* Beverages Dropdown */}
        <div className="w-[1500px] h-[120px] relative">
          <div className="menu-item left-[1200px] absolute text-center">
            <a href="#" onClick={toggleBeverages}>
              Beverages
            </a>
            {beveragesOpen && (
              <div
                className="absolute top-[30px] left-0 min-w-[180px] bg-[rgba(0,0,0,0.8)] shadow-lg p-4 rounded-lg h-[130px]"
                onMouseLeave={closeBeverages}
              >
                <div className="flex-col gap-3 h-[100px]">
                  <Link href="/fabceylon-kurunegala/menu/iced-coffee-iced-tea">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Iced Tea & Coffee
                    </div>
                  </Link>
                  <Link href="/fabceylon-kurunegala/menu/hot-beverages">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Hot Beverages
                    </div>
                  </Link>
                  <Link href="/fabceylon-kurunegala/menu/bubble-tea">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Bubble Tea
                    </div>
                  </Link>
                  <Link href="/fabceylon-kurunegala/menu/mojito">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Mojito
                    </div>
                  </Link>
                  <Link href="/fabceylon-kurunegala/menu/milk-shakes">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Milk Shakes
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <Link href="/fabceylon-kurunegala/menu/appetizers">
          <div className="menu-item left-[140px]">Appetizers</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/salads-soups">
          <div className="menu-item left-[20px]">Salads & Soups</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/pasta-spaghetti">
          <div className="menu-item left-[260px]">Pasta & Spaghetti</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/noodles">
          <div className="menu-item left-[370px]">Noodles</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/kottu">
          <div className="menu-item left-[470px]">Kottu</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/fried-rice">
          <div className="menu-item left-[580px]">Fried Rice</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/biriyani">
          <div className="menu-item left-[690px]">Biriyani</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/signature-meals">
          <div className="menu-item left-[800px]">Signature Meals</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/burgers">
          <div className="menu-item left-[910px]">Burgers</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/sandwiches-submarines">
          <div className="menu-item left-[1050px]">Sandwiches & Submarines</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/desserts">
          <div className="menu-item left-[1330px]">Desserts</div>
        </Link>

      </div>

      <style jsx>{`
        .menu-item {
          width: 125px;
          top: 16px;
          position: absolute;
          text-align: center;
          color: #eb650f;
          font-size: 1.2rem;
          font-weight: semi-bold;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .menu-item:hover {
          transform: scale(1.2); /* Enlarges the text slightly */
          color: #d4430f; /* Changes the color on hover */
        }
      `}</style>
>>>>>>> 4e25e367453dd3dbc91797f570fe309e25323746
    </div>
  );
};
