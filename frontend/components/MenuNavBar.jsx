import React from 'react';
import Link from 'next/link';

export const MenuNavBar = () => {
  return (
    <div>
      <div className="w-[15px] h-[66px] relative">
        <Link href="/fabceylon-kurunegala/order/appetizers">
          <div className="menu-item left-[120px]">
            Appetizers
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/salads">
          <div className="menu-item left-[0px]">
            Salads & Soups
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/pasta-spaghetti">
          <div className="menu-item left-[250px]">
            Pasta & Spaghetti
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/noodles">
          <div className="menu-item left-[370px]">
            Noodles
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/kottu">
          <div className="menu-item left-[470px]">
            Kottu
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/fried-rice">
          <div className="menu-item left-[580px]">
            Fried Rice
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/biriyani">
          <div className="menu-item left-[690px]">
            Biriyani
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/signature-meals">
          <div className="menu-item left-[800px]">
            Signature Meals
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/seafood-monster">
          <div className="menu-item left-[910px]">
            Seafood Monster
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/burgers">
          <div className="menu-item left-[1010px]">
            Burgers
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/sandwiches-submarines">
          <div className="menu-item left-[1140px]">
            Sandwiches & Submarines
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/desserts">
          <div className="menu-item left-[1270px]">
            Desserts
          </div>
        </Link>
        <Link href="/fabceylon-kurunegala/order/beverages">
          <div className="menu-item left-[1380px]">
            Beverages
          </div>
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
          font-weight: semi-bold
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
