import React, { useState } from 'react';
import Link from 'next/link';

export const CafeNuwraOrderNavBar = () => {
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
        
        {/* Menu Links */}
        <div className="relative">
          <Link href="/cafenuwara/order/appetizers">
            <div className="cursor-pointer menu-button">Appetizers</div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/salads-soups">
            <div className="cursor-pointer menu-button">Salads & Soups</div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/pasta-spaghetti">
            <div className="cursor-pointer menu-button">Pasta & Spaghetti</div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/noodles">
            <div className="cursor-pointer menu-button">Noodles</div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/kottu">
            <div className="cursor-pointer menu-button">Kottu</div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/fried-rice">
            <div className="cursor-pointer menu-button">Fried Rice</div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/biriyani">
            <div className="cursor-pointer menu-button">Biriyani</div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/signature-meals">
            <div className="cursor-pointer menu-button">Signature Meals</div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/burgers">
            <div className="cursor-pointer menu-button">Burgers</div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/sandwiches-submarines">
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
                <Link href="/cafenuwara/order/iced-coffee-iced-tea">
                  <div className="dropdown-item">Iced Tea & Coffee</div>
                </Link>
                <Link href="/cafenuwara/order/hot-beverages">
                  <div className="dropdown-item">Hot Beverages</div>
                </Link>
                <Link href="/cafenuwara/order/bubble-tea">
                  <div className="dropdown-item">Bubble Tea</div>
                </Link>
                <Link href="/cafenuwara/order/mojito">
                  <div className="dropdown-item">Mojito</div>
                </Link>
                <Link href="/cafenuwara/order/milk-shakes">
                  <div className="dropdown-item">Milk Shakes</div>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <Link href="/cafenuwara/order/desserts">
            <div className="cursor-pointer menu-button">Desserts</div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .menu-button {
          background: transparent;
          color: #5C4033;
          padding: 12px 20px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          min-width: 120px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(92, 64, 51, 0.2);
          border: 2px solid #5C4033;
        }

        .menu-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(92, 64, 51, 0.4);
          background: rgba(92, 64, 51, 0.1);
          border-color: #7B5E57;
          color: #7B5E57;
        }

        .menu-button:active {
          transform: translateY(0) scale(1.02);
          box-shadow: 0 4px 15px rgba(92, 64, 51, 0.4);
        }

        .dropdown-item {
          color: #5C4033;
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
          background: rgba(92, 64, 51, 0.2);
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
};
