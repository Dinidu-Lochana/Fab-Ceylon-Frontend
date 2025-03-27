import React, { useState } from 'react';
import Link from 'next/link';

export const MenuNavBar = () => {
  const [beveragesOpen, setBeveragesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleBeverages = () => {
    setBeveragesOpen(!beveragesOpen);
  };

  const closeBeverages = () => {
    setBeveragesOpen(false);
  };

  const menuItems = [
    { name: "Salads & Soups", href: "/fabceylon-kurunegala/order/salads-soups" },
    { name: "Appetizers", href: "/fabceylon-kurunegala/order/appetizers" },
    { name: "Pasta & Spaghetti", href: "/fabceylon-kurunegala/order/pasta-spaghetti" },
    { name: "Noodles", href: "/fabceylon-kurunegala/order/noodles" },
    { name: "Kottu", href: "/fabceylon-kurunegala/order/kottu" },
    { name: "Fried Rice", href: "/fabceylon-kurunegala/order/fried-rice" },
    { name: "Biriyani", href: "/fabceylon-kurunegala/order/biriyani" },
    { name: "Signature Meals", href: "/fabceylon-kurunegala/order/signature-meals" },
    { name: "Burgers", href: "/fabceylon-kurunegala/order/burgers" },
    { name: "Sandwiches & Submarines", href: "/fabceylon-kurunegala/order/sandwiches-submarines" },
    { name: "Desserts", href: "/fabceylon-kurunegala/order/desserts" },
  ];

  return (
    <div className="w-full shadow-md">
      {/* Desktop Menu */}
      <div className="hidden lg:flex w-full h-16 items-center justify-between px-4 relative">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="menu-item px-2 text-center">
              {item.name}
            </div>
          </Link>
        ))}

        {/* Beverages Dropdown */}
        <div className="relative">
          <div 
            className="menu-item px-2 text-center cursor-pointer"
            onClick={toggleBeverages}
            onMouseEnter={() => setBeveragesOpen(true)}
          >
            Beverages
          </div>
          {beveragesOpen && (
            <div
              className="absolute right-0 top-full min-w-[180px] bg-[rgba(0,0,0,0.9)] shadow-lg p-4 rounded-lg z-50"
              onMouseLeave={closeBeverages}
            >
              <div className="flex flex-col gap-3">
                <Link href="/fabceylon-kurunegala/order/iced-coffee-iced-tea">
                  <div className="text-[#eb650f] text-sm font-bold hover:text-white cursor-pointer">
                    Iced Tea & Coffee
                  </div>
                </Link>
                <Link href="/fabceylon-kurunegala/order/hot-beverages">
                  <div className="text-[#eb650f] text-sm font-bold hover:text-white cursor-pointer">
                    Hot Beverages
                  </div>
                </Link>
                <Link href="/fabceylon-kurunegala/order/bubble-tea">
                  <div className="text-[#eb650f] text-sm font-bold hover:text-white cursor-pointer">
                    Bubble Tea
                  </div>
                </Link>
                <Link href="/fabceylon-kurunegala/order/mojito">
                  <div className="text-[#eb650f] text-sm font-bold hover:text-white cursor-pointer">
                    Mojito
                  </div>
                </Link>
                <Link href="/fabceylon-kurunegala/order/milk-shakes">
                  <div className="text-[#eb650f] text-sm font-bold hover:text-white cursor-pointer">
                    Milk Shakes
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-between items-center h-16 px-4">
        <button 
          className="text-[#eb650f] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden  pb-4">
          <div className="flex flex-col space-y-3 px-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <div 
                  className="menu-item-mobile py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            
            {/* Beverages in Mobile */}
            <div className="py-2 border-b border-gray-100">
              <div 
                className="menu-item-mobile cursor-pointer"
                onClick={toggleBeverages}
              >
                Beverages
              </div>
              {beveragesOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  <Link href="/fabceylon-kurunegala/order/iced-coffee-iced-tea">
                    <div 
                      className="text-[#eb650f] text-sm font-bold hover:text-[#d4430f] cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Iced Tea & Coffee
                    </div>
                  </Link>
                  <Link href="/fabceylon-kurunegala/order/hot-beverages">
                    <div 
                      className="text-[#eb650f] text-sm font-bold hover:text-[#d4430f] cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Hot Beverages
                    </div>
                  </Link>
                  <Link href="/fabceylon-kurunegala/order/bubble-tea">
                    <div 
                      className="text-[#eb650f] text-sm font-bold hover:text-[#d4430f] cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bubble Tea
                    </div>
                  </Link>
                  <Link href="/fabceylon-kurunegala/order/mojito">
                    <div 
                      className="text-[#eb650f] text-sm font-bold hover:text-[#d4430f] cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Mojito
                    </div>
                  </Link>
                  <Link href="/fabceylon-kurunegala/order/milk-shakes">
                    <div 
                      className="text-[#eb650f] text-sm font-bold hover:text-[#d4430f] cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Milk Shakes
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .menu-item {
          color: #eb650f;
          font-size: 20px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease;
          white-space: nowrap;
        }

        .menu-item:hover {
          transform: scale(1.1);
          color: #d4430f;
        }

        .menu-item-mobile {
          color: #eb650f;
          font-size: 0.5rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease;
          white-space: nowrap;
        }

        .menu-item-mobile:hover {
          color: #d4430f;
        }
      `}</style>
    </div>
  );
};