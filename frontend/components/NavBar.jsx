import React from 'react'
import Image from 'next/image';

import cart_icon from "./Assets/cart_icon.png"
import user_icon from "./Assets/user_icon.png"

export const NavBar = () => {
  return (
    <div>
        <nav className="p-5 flex justify-between items-center  ">
        <div className="flex justify-between items-center h-12">
            
        <p className="text-white text-2xl font-bold px-4 mds:text-xl mds:ml-64 sms:ml-[420px] sms:text-xs ">FABCEYLON (PVT) LTD</p>
        </div>

          <div className="flex items-center space-x-2 text-white mds:space-x-1 sms:mr-40" >
        

          <a href="/login" className="text-white text-2xl font-bold px-4 mds:xl sms:text-xs ">Login</a>
          <a href="/register" className="text-white text-2xl font-bold px-4 mds:xl sms:text-xs ">Register</a>
          
         
          <div className="flex items-center space-x-10 ">

          <button className="relative">
          <Image className="h-8 w-8 m-10 " src={cart_icon} alt="Cart Icon" width={32}   height={32}  />
          </button>

          <button>
          <Image className="h-8 w-8 m-10 " src={user_icon} alt="Cart Icon" width={32}   height={32} />

          </button>
          
          </div>

          </div>
        
      </nav>
        
    </div>
    

  )
}
