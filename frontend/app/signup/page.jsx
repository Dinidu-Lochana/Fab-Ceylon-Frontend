'use client'; // Mark this file as a client component

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Fabceylon_PVT from '../../components/Assets/Fabceylon_PVT.png';
import user_icon from '../../components/Assets/User_Icon_login.png';
import user_icon2 from '../../components/Assets/User_Icon_login2.png';

import lock from '../../components/Assets/Lock.png';
import background_image from '../../components/Assets/LoginSignUp_back_Image.png';

const SignUpCustomer = () => {
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    password: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    if (formData.password !== confirmPassword) {
      toast.error('Passwords do not match.', { containerId: 'ErrorMessage' });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/signup`,
        {
          name: formData.name,
          contactNumber: formData.contactNumber,
          password: formData.password,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      localStorage.setItem('user', JSON.stringify(response.data));
      toast.success('Account created successfully!', { containerId: 'SuccessMessage' });
      router.push('/');
    } catch (error) {
      toast.error(error.response?.data?.error || 'An error occurred.', { containerId: 'ErrorMessage' });
    }
  };

  return (
    <div className="w-full h-screen bg-[#ded2b7] pt-24 bg-cover bg-center" style={{ backgroundImage: `url(${background_image.src})` }}>
      <div className="signup-container w-[350px] bg-[#FFFDF7] mx-auto p-[30px] px-[40px] rounded-[30px] shadow-lg">
        <div className="flex justify-center mb-6">
          <Image src={Fabceylon_PVT} alt="Fab Ceylon Logo" width={150} height={75} />
        </div>
        <h1 className="text-[26px] font-extrabold text-center text-[#333] font-serif">Sign Up</h1>
        <div className="signup-field flex flex-col gap-[15px] mt-[20px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              className="h-[40px] w-full bg-[#D9D9D9] rounded-[20px] text-[14px] pl-[50px] border border-[#c9c9c9] text-[#333] placeholder:text-[#888] placeholder:text-[12px]"
            />
            <Image src={user_icon} alt="User Icon" width={20} height={20} className="absolute transform -translate-y-1/2 left-3 top-1/2" />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Phone Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={changeHandler}
              className="h-[40px] w-full bg-[#D9D9D9] rounded-[20px] text-[14px] pl-[50px] border border-[#c9c9c9] text-[#333] placeholder:text-[#888] placeholder:text-[12px]"
            />
            <Image src={user_icon2} alt="Phone Icon" width={20} height={20} className="absolute transform -translate-y-1/2 left-3 top-1/2" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className="h-[40px] w-full bg-[#D9D9D9] rounded-[20px] text-[14px] pl-[50px] border border-[#c9c9c9] text-[#333] placeholder:text-[#888] placeholder:text-[12px]"
            />
            <Image src={lock} alt="Lock Icon" width={20} height={20} className="absolute transform -translate-y-1/2 left-3 top-1/2" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-[40px] w-full bg-[#D9D9D9] rounded-[20px] text-[14px] pl-[50px] border border-[#c9c9c9] text-[#333] placeholder:text-[#888] placeholder:text-[12px]"
            />
            <Image src={lock} alt="Lock Icon" width={20} height={20} className="absolute transform -translate-y-1/2 left-3 top-1/2" />
          </div>
        </div>
        <button
          onClick={signup}
          className="w-full h-[40px] bg-[#E1D6C1] mt-[30px] text-[18px] font-semibold font-sans rounded-[20px] hover:bg-[#d4c6b1] transition ease-in-out"
        >
          Sign Up
        </button>
        <div className="signup-login mt-[20px] text-[15px] font-medium flex ml-[10px]">
          <p>
            Already have an account?{' '}
            <a href="/login" className="font-extrabold text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <ToastContainer containerId="SuccessMessage" />
      <ToastContainer containerId="ErrorMessage" />
    </div>
  );
};

export default SignUpCustomer;
