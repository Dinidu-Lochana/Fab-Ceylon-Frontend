'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Fabceylon_PVT from '@/components/Assets/Fabceylon_PVT.png';
import user_icon from '@/components/Assets/User_Icon_login.png';
import lock from '@/components/Assets/Lock.png';
import background_image from '@/components/Assets/LoginSignUp_back_Image.png';

const SignUpCustomer = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorShake, setErrorShake] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 500);
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:4000/api/customers/signup', {
        name: formData.name,
        contactNumber: formData.contactNumber,
        password: formData.password,
      });

      localStorage.setItem('token', res.data.createdToken);
      router.push('/');
    } catch (err) {
      alert(err.response?.data?.error || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background_image.src})` }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 w-[90%] max-w-md bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl px-8 py-10 ${
          errorShake ? 'animate-shake' : ''
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <Image src={Fabceylon_PVT} alt="Fab Ceylon Logo" width={120} height={80} className="rounded-md" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 -mt-5"
        >
          Create Account
        </motion.h1>

        {/* Inputs */}
        <div className="space-y-5">
          {['name', 'contactNumber', 'password', 'confirmPassword'].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              <Image
                src={field.includes('password') ? lock : user_icon}
                alt={field}
                width={20}
                height={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
              <input
                type={
                  field === 'password'
                    ? showPassword
                      ? 'text'
                      : 'password'
                    : field === 'confirmPassword'
                    ? showConfirmPassword
                      ? 'text'
                      : 'password'
                    : 'text'
                }
                name={field}
                placeholder={
                  field === 'name'
                    ? 'Full Name'
                    : field === 'contactNumber'
                    ? 'Contact Number'
                    : field === 'password'
                    ? 'Password'
                    : 'Confirm Password'
                }
                onChange={changeHandler}
                value={formData[field]}
                className="w-full pl-10 pr-10 py-4 rounded-xl bg-white/70 border border-gray-300 text-sm placeholder-gray-500 text-black"
              />
              {(field === 'password' || field === 'confirmPassword') && (
                <button
                  type="button"
                  onClick={() =>
                    field === 'password'
                      ? setShowPassword(!showPassword)
                      : setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {field === 'password'
                    ? showPassword
                      ? <EyeOff size={20} />
                      : <Eye size={20} />
                    : showConfirmPassword
                    ? <EyeOff size={20} />
                    : <Eye size={20} />}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(255,165,0,0.7)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSignup}
          disabled={loading}
          className="w-full mt-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold rounded-xl transition-all"
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </motion.button>

        {/* Login Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-sm text-white text-center"
        >
          Already have an account?{' '}
          <a href="/login" className="font-bold text-blue-300 hover:underline">
            Login
          </a>
        </motion.p>
      </motion.div>

      {/* Shake Animation Style */}
      <style jsx>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SignUpCustomer;
