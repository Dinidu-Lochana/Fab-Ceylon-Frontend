import React, { useState } from 'react';
import Link from 'next/link';

export const GrandMenuNavBar = () => {
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
                  <Link href="/fabceylon-grand/menu/iced-coffee-iced-tea">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Iced Tea & Coffee
                    </div>
                  </Link>
                  <Link href="/fabceylon-grand/menu/hot-beverages">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Hot Beverages
                    </div>
                  </Link>
                  <Link href="/fabceylon-grand/menu/bubble-tea">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Bubble Tea
                    </div>
                  </Link>
                  <Link href="/fabceylon-grand/menu/mojito">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Mojito
                    </div>
                  </Link>
                  <Link href="/fabceylon-grand/menu/milk-shakes">
                    <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                      Milk Shakes
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <Link href="/fabceylon-grand/menu/appetizers">
          <div className="menu-item left-[140px]">Appetizers</div>
        </Link>
        <Link href="/fabceylon-grand/menu/salads-soups">
          <div className="menu-item left-[20px]">Salads & Soups</div>
        </Link>
        <Link href="/fabceylon-grand/menu/pasta-spaghetti">
          <div className="menu-item left-[260px]">Pasta & Spaghetti</div>
        </Link>
        <Link href="/fabceylon-grand/menu/noodles">
          <div className="menu-item left-[370px]">Noodles</div>
        </Link>
        <Link href="/fabceylon-grand/menu/kottu">
          <div className="menu-item left-[460px]">Kottu</div>
        </Link>
        <Link href="/fabceylon-grand/menu/fried-rice">
          <div className="menu-item left-[540px] text-center">
            <span>Fried</span>
            <br />
            <span>Rice</span>
          </div>
        </Link>

        <Link href="/fabceylon-grand/menu/biriyani">
          <div className="menu-item left-[630px]">Biriyani</div>
        </Link>
        <Link href="/fabceylon-grand/menu/signature-meals">
          <div className="menu-item left-[730px]">Signature Meals</div>
        </Link>
        <Link href="/fabceylon-grand/menu/add-on">
          <div className="menu-item left-[830px]">Add-On</div>
        </Link>
        
        <Link href="/fabceylon-grand/menu/burgers">
          <div className="menu-item left-[930px]">Burgers</div>
        </Link>
        <Link href="/fabceylon-grand/menu/sandwiches-submarines">
          <div className="menu-item left-[1060px]">Sandwiches & Submarines</div>
        </Link>
        <Link href="/fabceylon-grand/menu/desserts">
          <div className="menu-item left-[1340px]">Desserts</div>
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
    </div>
  );
};
