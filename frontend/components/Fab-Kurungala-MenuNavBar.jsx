import React from 'react';
import Link from 'next/link';

export const FabKurungalaMenuNavBar = () => {
  return (
    <div>
      <div className="w-[15px] h-[66px] relative">
        <Link href="/fabceylon-kurunegala/menu/appetizers">
          <div className="menu-item left-[120px]">Appetizers</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/salads">
          <div className="menu-item left-[0px]">Salads & Soups</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/pasta-spaghetti">
          <div className="menu-item left-[250px]">Pasta & Spaghetti</div>
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
        <Link href="/fabceylon-kurunegala/menu/seafood-monster">
          <div className="menu-item left-[910px]">Seafood Monster</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/burgers">
          <div className="menu-item left-[1010px]">Burgers</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/sandwiches-submarines">
          <div className="menu-item left-[1140px]">Sandwiches & Submarines</div>
        </Link>
        <Link href="/fabceylon-kurunegala/menu/desserts">
          <div className="menu-item left-[1270px]">Desserts</div>
        </Link>
        <div className="menu-item beverages-dropdown left-[1380px]">
          Beverages
          <div className="submenu">
            <Link href="/fabceylon-kurunegala/menu/beverages">
              <div className="submenu-item">Mojito</div>
            </Link>
            <Link href="/fabceylon-kurunegala/menu/milk-shake">
              <div className="submenu-item">Milk Shake</div>
            </Link>
            <Link href="/fabceylon-kurunegala/menu/tea">
              <div className="submenu-item">Tea</div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-item {
          width: 125px;
          position: absolute;
          top: 16px;
          text-align: center;
          color: #eb650f;
          font-size: 1.2rem;
          font-weight: semi-bold;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .menu-item:hover {
          transform: scale(1.2);
          color: #d4430f;
        }

        .beverages-dropdown {
          position: relative;
        }

        .submenu {
          position: absolute;
          top: 40px;
          left: 0;
          background-color: black;
          border: 1px solid #ccc;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: none;
          z-index: 10;
          width: 125px;
        }

        .beverages-dropdown:hover .submenu {
          display: block;
        }

        .submenu-item {
          padding: 10px;
          text-align: left;
          color: #eb650f;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .submenu-item:hover {
          background-color: #f9f9f9;
          color: #d4430f;
        }
      `}</style>
    </div>
  );
};
