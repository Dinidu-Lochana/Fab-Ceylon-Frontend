import React from 'react'
import Image from 'next/image';
import Footer_back_image from './Assets/Footer_back_image.png'

export const Footer = () => {
  return (
    <div className="relative h-[500px] bg-black -mt-10 ">
        <Image 
          className='h-2/3'
          src={Footer_back_image}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />

        <div className='grid-cols-2  relative text-left text-[#C8AB58] flex items-center justify-left text-[Post No Bills Colombo ExtraBold] -mt-28'>
            <h1 className='text-5xl font-Post No Bills Colombo ExtraBold font-bold p-20 ml-100 tracking-wider '>FAB CEYLON</h1>
            <p className='text-white top-28'> Meet  Eat & Enjoy  
            The true taste</p>
        </div>
        <div>
            <p></p>
        </div>

    </div>
  )
}
