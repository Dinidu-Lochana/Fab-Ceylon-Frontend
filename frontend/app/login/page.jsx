'use client'; // Required for client-side rendering in Next.js

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Fabceylon_PVT from '@/components/Assets/Fabceylon_PVT.png';
import user_icon from '@/components/Assets/User_Icon_login.png';
import lock from '@/components/Assets/Lock.png';
import background_image from '@/components/Assets/LoginSignUp_back_Image.png';

const LoginCustomer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    contactNumber: '',
    password: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/login`,
        JSON.stringify({
          contactNumber: formData.contactNumber,
          password: formData.password,
        }),
        { headers: { 'Content-Type': 'application/json' } }
      );

      localStorage.setItem('user', JSON.stringify(response.data));
      toast.success('Successfully logged in', { containerId: 'successMessage' });
      router.push('/');
    } catch (error) {
      toast.error(error.response?.data?.error || 'An error occurred', { containerId: 'ErrorMessage' });
    }
  };

  return (
    <div
      className="w-full h-screen bg-[#ded2b7] pt-[100px] bg-cover bg-center"
      style={{ backgroundImage: `url(${background_image.src})` }}
    >
      <div className="w-[400px] h-[500px] bg-[#FFFDF7] mx-auto p-[20px] px-[60px] rounded-[30px] shadow-lg">
        <Image
          className="mt-1 h-[20vh] w-[200px] mx-auto"
          src={Fabceylon_PVT}
          alt="Fab Ceylon Logo"
          width={200}
          height={100}
        />
        <h1 className="text-center mt-5 mb-4 text-[26px] font-bold font-serif">Login</h1>
        <div className="flex flex-col gap-[5px] mt-[10px]">
          <div className="relative mb-[10px]">
            <Image
              className="absolute transform -translate-y-1/2 left-2 top-1/2"
              src={user_icon}
              alt="User Icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Contact Number"
              name="contactNumber"
              onChange={changeHandler}
              value={formData.contactNumber}
              required
              className="h-[35px] w-full bg-[#D9D9D9] rounded-[20px] text-[12px] pl-[50px] border border-[#c9c9c9] placeholder:text-[#888]"
            />
          </div>
          <div className="relative mb-[10px]">
            <Image
              className="absolute transform -translate-y-1/2 left-2 top-1/2"
              src={lock}
              alt="Lock Icon"
              width={20}
              height={20}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
              value={formData.password}
              required
              className="h-[35px] w-full bg-[#D9D9D9] rounded-[20px] text-[12px] pl-[50px] border border-[#c9c9c9] placeholder:text-[#888]"
            />
          </div>
        </div>
        <button
          onClick={login}
          className="w-full h-[35px] bg-[#E1D6C1] mt-[30px] text-[20px] font-semibold rounded-[20px] cursor-pointer hover:bg-[#d1c4b4] transition-all"
        >
          Login
        </button>
        <p className="mt-[20px] text-[15px] font-medium flex justify-center">
          Don't have an Account?{' '}
          <a href="/signup" className="ml-1 font-extrabold text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
      <ToastContainer containerId="successMessage" />
      <ToastContainer containerId="ErrorMessage" />
    </div>
  );
};

export default LoginCustomer;
