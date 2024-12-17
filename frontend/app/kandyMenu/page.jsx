'use client';
import React from 'react'
import MenuBack_image from '@/components/Assets/MenuBack_image.jpg';
import Image from 'next/image';


export default function KandyMenu() {
  return (
    <div>
        <div className="relative h-screen bg-black ">
        <Image 
        src={MenuBack_image}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
        {/* Hero Section */}
        <div className=" gap-2 relative text-left text-white ">
        <div style={{ marginLeft: '100px' }}>
          <h1 className="text-7xl font-poppins font-bold pt-96 ml-32 tracking-wider ">
            CHOOSE  <br />
            <span className="text-white ml-28 mt-72">&</span>  <br />
             <span className="text-white ml-8">ENJOY...</span>
          </h1>
        </div>
        
      </div>
        </div >
        <div className="relative h-screen bg-black ">
        <div class="text-[#eb650f] text-8xl font-bold font-['Poppins'] bg-black text-center ">
          <div className=''>
            <h1 className=''>Burger</h1>
            <div class="text-white text-4xl font-bold font-['Poppins'] mt-10">It is good time for the grete taste of buggers</div>
          </div>
          </div>
        </div>


        

       
        
        
    </div>
  )
}
