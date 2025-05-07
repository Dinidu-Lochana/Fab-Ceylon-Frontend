import React from 'react';
import Image from 'next/image';
import cafenuwara_nav from '@/components/Assets/cafenuwara_nav.png';
import { CafeNuwaraNavBar } from '@/components/CafeNuwraNavBar';
import CafeNuwaraHero_Image from '@/components/Assets/CafeNuwaraHero_Image.png';
import Elephant_1 from '@/components/Assets/Elephant_1.png';
import Elephant_2 from '@/components/Assets/Elephant_2.png';
import Bugger2 from '@/components/Assets/Bugger2.jpg';
import star_icon from '@/components/Assets/star_icon.png';
import Boder from '@/components/Assets/Boder.png';
import Boder2 from '@/components/Assets/Boder2.png';
import CartTop from '@/components/Assets/CartTop.png';
import Cafe_Nuwara_logo from '@/components/Assets/Cafe_Nuwara_logo.png';
import FooterCafeNuwara from '@/components/FooterCafeNuwara';

export default function CafeNuwara() {
  return (
    <div className="bg-[#f0e6d9] min-h-screen">
      {/* NavBar */}
      <div className="relative">
        <CafeNuwaraNavBar />
      </div>

      {/* Hero Section */}
      <div className="w-[370px] h-[370px] relative -mt-72 ml-28">
        <Image
          src={CafeNuwaraHero_Image}
          alt="Hero"
          layout="fill"
          objectFit="contain"
        />
        <div className="w-[189px] h-[189px] relative ml-[450px]">
          <Image
            src={Elephant_1}
            alt="Elephant 1"
            layout="fill"
            objectFit="contain"
          />
          <div className="w-[215px] h-[215px] relative ml-44">
            <Image
              src={Elephant_2}
              alt="Elephant 2"
              layout="fill"
              objectFit="contain"
              className="-mt-2"
            />
          </div>
          <div className="w-[428px] h-[335px] text-center text-black text-[40px] font-extrabold font-serif uppercase -mt-14 -ml-6">
            Choose <br />& <br />Enjoy...
          </div>
        </div>
        <div className="w-[370px] h-[370px] relative -mt-48 ml-[925px]">
          <Image
            src={CafeNuwaraHero_Image}
            alt="Hero Right"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Cards and Cart Section */}
      <div className="flex flex-row justify-center items-start gap-10 mt-32">
        {/* Card Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="w-[320px] h-[700px] relative bg-[#e1d6c1] rounded-[20px] flex-col justify-start items-start inline-flex"
            >
              <Image
                className="w-[179px] h-[152px] mt-1"
                src={Boder}
                alt="Border"
                width={179}
                height={152}
              />
              <div className="w-[339px] h-[802px] relative">
                <Image
                  className="w-[200px] h-[200px] left-14 top-[-80px] absolute rounded-full border-4 border-[#caa767]"
                  src={Bugger2}
                  alt="Product"
                  width={200}
                  height={200}
                />
                <div className="left-[20px] top-[150px] absolute text-black text-3xl font-bold font-['Reem Kufi']">
                  Veg Burger
                </div>
                <div className="w-[339px] h-[87px] left-[15px] top-[200px] absolute text-black text-[15px] font-bold font-['Reem Kufi'] pr-9">
                  Juicy, seasoned chicken patties, perfect for delicious,
                  flavorful burgers.
                </div>
                <div className="left-[15px] top-[280px] absolute justify-start items-center inline-flex">
                  {Array(4)
                    .fill(0)
                    .map((_, starIndex) => (
                      <Image
                        key={starIndex}
                        className="w-[29px] h-[29px]"
                        src={star_icon}
                        alt="Star"
                        width={29}
                        height={29}
                      />
                    ))}
                </div>
              </div>
              <div className="left-[15px] top-[500px] absolute text-[#caa767] text-3xl font-bold font-['Poppins']">
                LKR 750
              </div>
              <div className="w-[150px] px-[1px] top-[540px] absolute bg-[#caa767] rounded-[20px] justify-center items-center inline-flex ml-[15px] mt-10">
                <div className="text-black text-2xl font-bold font-['Poppins']">
                  ADD
                </div>
              </div>
              <Image
                className="w-[179px] h-[152px] ml-[140px]"
                src={Boder2}
                alt="Bottom Border"
                width={179}
                height={152}
              />
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="w-[370px] h-[700px] px-5 py-10 bg-[#e1d6c1] rounded-[20px] border-4 border-white flex flex-col items-start">
          <Image
            src={CartTop}
            alt="Cart Header"
            width={284}
            height={160}
            className="w-[250px] h-40 -mt-20 ml-10"
          />
          <div className="w-full text-black text-4xl font-bold font-['Poppins'] mb-5 ml-24 -mt-10">
            Your Cart
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={Cafe_Nuwara_logo}
              alt="Cart Logo"
              width={360}
              height={362}
              className="w-[360px] h-[362px] opacity-25 mt-10"
            />
          </div>
          <div className="w-full text-black text-xl font-bold font-['Poppins'] mt-5">
            Sub Total Rs. 0.00
          </div>
          <div className="w-[300px] h-[72px] px-[21px] py-5 bg-[#caa767] rounded-[20px] justify-center items-center gap-2.5 inline-flex mt-10">
            <div className="text-black text-xl font-bold font-['Poppins']">
              Check Out Rs. 0.00
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterCafeNuwara />
    </div>
  );
}
