'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

import Fabceylon_PVT from '@/components/Assets/Fabceylon_PVT.png';
import user_icon from '@/components/Assets/User_Icon_login.png';
import background_image from '@/components/Assets/LoginSignUp_back_Image.png';

const ProfileSettingsCustomer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    contactNumber: '',
    newContactNumber: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
          router.push('/profileSetting');
          return;
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/profile`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setFormData({
          contactNumber: response.data.contactNumber,
          newContactNumber: '',
          password: '',
          newPassword: '',
          confirmPassword: '',
        });
      } catch (error) {
        toast.error('Failed to load profile', { containerId: 'ErrorMessage' });
      }
    };
    fetchUserProfile();
  }, [router]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateProfile = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (formData.newPassword !== formData.confirmPassword) {
        toast.error('Passwords do not match', { containerId: 'ErrorMessage' });
        return;
      }
      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/customers/update-profile`,
        {
          newContactNumber: formData.newContactNumber,
          newPassword: formData.newPassword,
        },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      toast.success('Profile updated successfully', { containerId: 'successMessage' });
    } catch (error) {
      toast.error(error.response?.data?.error || 'An error occurred', { containerId: 'ErrorMessage' });
    }
  };

  return (
    <div
      className="w-full h-screen bg-[#ded2b7] pt-[100px] bg-cover bg-center"
      style={{ backgroundImage: `url(${background_image.src})` }}
    >
      <div className="w-[90%] sm:w-[400px] h-auto bg-[#FFFDF7] mx-auto p-[20px] sm:px-[60px] rounded-[30px] shadow-lg">
        <Image className="mt-1 h-[20vh] w-[150px] sm:w-[200px] mx-auto" src={Fabceylon_PVT} alt="Fab Ceylon Logo" width={200} height={100} />
        <h1 className="text-center mt-5 mb-4 text-[22px] sm:text-[26px] font-bold font-serif">Profile Settings</h1>
        <div className="flex flex-col gap-[5px] mt-[10px]">
          <input
            type="text"
            name="newContactNumber"
            placeholder="New Contact Number"
            value={formData.newContactNumber}
            onChange={changeHandler}
            className="h-[35px] w-full bg-[#D9D9D9] rounded-[20px] text-[12px] pl-[15px] border border-[#c9c9c9] placeholder:text-[#888] mb-[10px]"
          />
          <input
            type="password"
            name="password"
            placeholder="Current Password"
            value={formData.password}
            onChange={changeHandler}
            className="h-[35px] w-full bg-[#D9D9D9] rounded-[20px] text-[12px] pl-[15px] border border-[#c9c9c9] placeholder:text-[#888] mb-[10px]"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={changeHandler}
            className="h-[35px] w-full bg-[#D9D9D9] rounded-[20px] text-[12px] pl-[15px] border border-[#c9c9c9] placeholder:text-[#888] mb-[10px]"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={changeHandler}
            className="h-[35px] w-full bg-[#D9D9D9] rounded-[20px] text-[12px] pl-[15px] border border-[#c9c9c9] placeholder:text-[#888] mb-[10px]"
          />
        </div>
        <button
          onClick={updateProfile}
          className="w-full h-[35px] bg-[#E1D6C1] mt-[30px] text-[18px] sm:text-[20px] font-semibold rounded-[20px] cursor-pointer hover:bg-[#d1c4b4] transition-all"
        >
          Save Changes
        </button>
      </div>
      <ToastContainer containerId="successMessage" />
      <ToastContainer containerId="ErrorMessage" />
    </div>
  );
};

export default ProfileSettingsCustomer;
