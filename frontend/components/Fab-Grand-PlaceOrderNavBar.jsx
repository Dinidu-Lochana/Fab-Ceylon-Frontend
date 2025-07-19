import React, { useState } from 'react';
import Link from 'next/link';

export const GrandOderNavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto p-4">
      {/* Main Menu Items */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        
        {/* Appetizers Dropdown */}
       <div className="relative">
          <Link href="/fabceylon-grand/order/appetizers">
            <div className="cursor-pointer menu-button">
              Appetizers
            </div>
          </Link>
        </div>

        
        {/* Salads & Soups */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/salads-soups">
            <div className="cursor-pointer menu-button">Salads & Soups</div>
          </Link>
        </div>
          
        {/* Pasta & Spaghetti */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/pasta-spaghetti">
            <div className="cursor-pointer menu-button">Pasta & Spaghetti</div>
          </Link>
        </div>
          
        {/* Noodles */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/noodles">
            <div className="cursor-pointer menu-button">Noodles</div>
          </Link>
        </div>
          
        {/* Kottu */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/kottu">
            <div className="cursor-pointer menu-button">Kottu</div>
          </Link>
        </div>
          
        {/* Fried Rice */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/fried-rice">
            <div className="cursor-pointer menu-button">Fried Rice</div>
          </Link>
        </div>
          
        {/* Biriyani */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/biriyani">
            <div className="cursor-pointer menu-button">Biriyani</div>
          </Link>
        </div>
          
        {/* Signature Meals */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/signature-meals">
            <div className="cursor-pointer menu-button">Signature Meals</div>
          </Link>
        </div>
          
        {/* Burgers */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/burgers">
            <div className="cursor-pointer menu-button">Burgers</div>
          </Link>
        </div>
          
        {/* Sandwiches & Submarines */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/sandwiches-submarines">
            <div className="cursor-pointer menu-button">Sandwiches & Submarines</div>
          </Link>
        </div>


        {/* Beverages Dropdown */}
        <div className="relative">
          <div 
            className="cursor-pointer menu-button"
            onClick={() => toggleDropdown('beverages')}
          >
            Beverages
          </div>
          {openDropdown === 'beverages' && (
            <div
              className="absolute top-[60px] left-0 min-w-[200px] bg-black/80 backdrop-blur-sm shadow-lg p-4 rounded-lg z-10"
              onMouseLeave={closeDropdown}
            >
              <div className="flex flex-col gap-3">
                <Link href="/fabceylon-grand/order/iced-coffee-iced-tea">
                  <div className="dropdown-item">
                    Iced Tea & Coffee
                  </div>
                </Link>
                <Link href="/fabceylon-grand/order/hot-beverages">
                  <div className="dropdown-item">
                    Hot Beverages
                  </div>
                </Link>
                <Link href="/fabceylon-grand/order/bubble-tea">
                  <div className="dropdown-item">
                    Bubble Tea
                  </div>
                </Link>
                <Link href="/fabceylon-grand/order/mojito">
                  <div className="dropdown-item">
                    Mojito
                  </div>
                </Link>
                <Link href="/fabceylon-grand/order/milk-shakes">
                  <div className="dropdown-item">
                    Milk Shakes
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        
        {/* Desserts */}
        <div className="relative">
          <Link href="/fabceylon-grand/order/desserts">
            <div className="cursor-pointer menu-button">Desserts</div>
          </Link>
        </div>


      </div>

      <style jsx>{`
        .menu-button {
          background: transparent;
          color: #eb650f;
          padding: 12px 20px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          min-width: 120px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(235, 101, 15, 0.2);
          border: 2px solid #eb650f;
        }

        .menu-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(235, 101, 15, 0.4);
          background: rgba(235, 101, 15, 0.1);
          border-color: #ff7420;
          color: #ff7420;
        }

        .menu-button:active {
          transform: translateY(0) scale(1.02);
          box-shadow: 0 4px 15px rgba(235, 101, 15, 0.4);
        }

        .dropdown-item {
          color: #eb650f;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 12px;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
        }

        .dropdown-item:hover {
          color: white;
          background: rgba(235, 101, 15, 0.2);
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
};