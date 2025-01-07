import React from 'react';
import Image from 'next/image';
import cafenuwara_nav from '@/components/Assets/cafenuwara_nav.png';
import Cafe_Nuwara_logo from '@/components/Assets/Cafe_Nuwara_logo.png';
import cart_icon from "./Assets/cart_icon.png";
import user_icon from "./Assets/user_icon.png";
import cafenuwaranav_2 from '@/components/Assets/cafenuwaranav_2.png';

export const CafeNuwaraNavBar = () => {
  return (
    <div>
      <div className="relative h-screen bg-[#f0e6d9]">
        <div className="relative rounded-[20px] overflow-hidden pt-10 pl-10 pr-10">
          <Image
            src={cafenuwara_nav}
            alt="Cafe Nuwara Navigation Background"
            width={1798}
            height={176}
            className="rounded-[20px] opacity-50"
          />

          <div className="absolute top-0 left-0 w-full h-full flex items-center mt-[20px] ml-24">
            <Image
              src={Cafe_Nuwara_logo}
              alt="Cafe Nuwara Logo"
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <div className="text-black text-3xl font-extrabold font-serif mr-10">
              CAFE NUWARA
            </div>
            <div className="flex gap-10 text-black text-[30px] font-normal font-reemKufi font-semibold ml-60">
              <div>Menu</div>
              <div>Reservation</div>
              <div>Register</div>
            </div>
             <div className="h-[52px] justify-start items-center gap-[22px] inline-flex ml-20">
                  <Image
                    className="w-[40px] h-[40px]"
                    src={cart_icon} 
                    alt="Icon 1"
                    width={52}
                    height={52}
                  />
                  <Image
                    className="w-[40px] h-[40px]"
                    src={user_icon} 
                    alt="Icon 2"
                    width={52}
                    height={52}
                  />
                </div>
          </div>
        </div>
        <div className='overflow-hidden pt-10 pl-5 pr-5'>
      <Image
        src={cafenuwaranav_2}
        alt="Placeholder Image"
        width={1798}
        height={223}
        style={{ width: '1700px', height: '160px' }}
      />
      <div class="w-[1500px] h-[66px] relative">
    <div class="left-[250px] -mt-28 absolute text-center text-black text-[20px] font-bold font-reemKufi">Fried Rice</div>
    <div class="] left-[135px] -mt-28 absolute text-center text-black text-[20px] font-bold font-reemKufi">Burger</div>
    <div class=" left-[410px] -mt-28 absolute text-center text-black text-[20px] font-bold font-reemKufi">Kottu</div>
    <div class="] left-[510px] -mt-28 absolute text-center text-black text-[20px] font-bold font-reemKufi">Biriyani</div>
    <div class=" left-[660px] -mt-28 absolute text-center text-black text-[20px] font-bold font-reemKufi">Noodles</div>
    <div class=" left-[800px] -mt-28 absolute text-center text-black text-[20px] font-bold font-reemKufi">Soup</div>
    <div class=" h-9 left-[920px] v -mt-28 absolute text-center text-black text-[20px] font-bold font-reemKufi">Milk Shake</div>
    <div class=" left-[1130px] -mt-28 absolute text-center text-black text-[20px] font-bold font-reemKufi">Mojito</div>
    <div class=" left-[1300px] -mt-28 absolute text-center text-black text-[20px] font-bold font-reemKufi">Salad</div>
</div>
    </div>
      </div>
    </div>
  );
};
