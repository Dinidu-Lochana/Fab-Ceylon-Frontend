import React from 'react';
import Image from 'next/image';
import cafenuwara_nav from '@/components/Assets/cafenuwara_nav.png';
import Cafe_Nuwara_logo from '@/components/Assets/Cafe_Nuwara_logo.png';

export const CafeNuwaraNavBar= () => {
  return (
    <div >
      <div className="relative h-screen bg-[#f0e6d9]">
       
        <div className="relative rounded-[20px] overflow-hidden pt-10 pl-10 pr-10 ">
          <Image
            src={cafenuwara_nav}
            alt="Cafe Nuwara Navigation Background"
            width={1798}
            height={176}
            className="rounded-[20px] opacity-50" 
          />

          
          <div className="absolute top-0 left-0 w-full h-full  opacity-100 mt-[50.5px] ml-20">
            <Image
              src={Cafe_Nuwara_logo}
              alt="Cafe Nuwara Logo"
              width={80}
              height={80}
              className="rounded-full"
              
            />
          </div>
          <div class="text-black text-5xl font-normal font-['PT Serif Caption']">CAFE NUWARA</div>
        </div>
      </div>
       
    </div>
  )
}
