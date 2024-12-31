import React from 'react';
import Image from 'next/image';
import cafenuwara_nav from '@/components/Assets/cafenuwara_nav.png';
import {CafeNuwaraNavBar} from '@/components/CafeNuwraNavBar';

export default function CafeNuwara() {
  return (
    <div >
      <div className='relative h-screen bg-[#f0e6d9] '>
      <CafeNuwaraNavBar />
      </div>
       
    </div>
  )
}
