import React, { useState } from 'react';
import Link from 'next/link';

export const MenuNavBar = () => {
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
                    <Link href="/fabceylon-kurunegala/order/pickup/iced-coffee-iced-tea">
                      <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                        Iced Tea & Coffee
                      </div>
                    </Link>
                    <Link href="/fabceylon-kurunegala/order/pickup/hot-beverages">
                      <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                        Hot Beverages
                      </div>
                    </Link>
                    <Link href="/fabceylon-kurunegala/order/pickup/bubble-tea">
                      <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                        Bubble Tea
                      </div>
                    </Link>
                    <Link href="/fabceylon-kurunegala/order/pickup/mojito">
                      <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                        Mojito
                      </div>
                    </Link>
                    <Link href="/fabceylon-kurunegala/order/pickup/milk-shakes">
                      <div className="text-[#eb650f] text-[14px] font-bold hover:text-white cursor-pointer">
                        Milk Shakes
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
       


        <Link href="/fabceylon-kurunegala/order/pickup/appetizers">
          <div className="menu-item left-[140px]">Appetizers</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/salads-soups">
          <div className="menu-item left-[20px]">Salads & Soups</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/pasta-spaghetti">
          <div className="menu-item left-[260px]">Pasta & Spaghetti</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/noodles">
          <div className="menu-item left-[370px]">Noodles</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/kottu">
          <div className="menu-item left-[470px]">Kottu</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/fried-rice">
          <div className="menu-item left-[580px]">Fried Rice</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/biriyani">
          <div className="menu-item left-[690px]">Biriyani</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/signature-meals">
          <div className="menu-item left-[800px]">Signature Meals</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/burgers">
          <div className="menu-item left-[910px]">Burgers</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/sandwiches-submarines">
          <div className="menu-item left-[1050px]">Sandwiches & Submarines</div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pickup/desserts">
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
    </div>
  );
};
