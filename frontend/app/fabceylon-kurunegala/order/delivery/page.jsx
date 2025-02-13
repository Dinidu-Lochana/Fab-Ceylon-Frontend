'use client';
import React, { useState, useEffect } from 'react';
import { MainMenuNavBar } from '@/components/MainMenuNavBar';
import { motion } from 'framer-motion';

export default function EnterAddress() {
    const [address, setAddress] = useState('');
    const [isDeliveryAccepted, setIsDeliveryAccepted] = useState(null);

    useEffect(() => {
        // Check localStorage for existing delivery acceptance status
        const storedDeliveryStatus = localStorage.getItem('deliveryAccepted');
        if (storedDeliveryStatus !== null) {
            setIsDeliveryAccepted(storedDeliveryStatus === 'true');
        }
    }, []);

    const handleConfirmAddress = (e) => {
        e.preventDefault();

        // Mock condition: Accepts delivery only if address contains "Main St"
        const accepted = address.toLowerCase().includes('main st');

        // Store in localStorage
        localStorage.setItem('deliveryAccepted', accepted.toString());

        // Update state
        setIsDeliveryAccepted(accepted);
    };

    return (
        <div>
            <MainMenuNavBar />
            <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
                
                {/* Animated Heading */}
                <motion.h2 
                    className="mt-2 mb-6 text-3xl font-semibold"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    Enter Delivery Location
                </motion.h2>

                {/* Address Form */}
                <motion.form 
                    className="p-6 bg-gray-800 rounded-lg shadow-lg w-80"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    onSubmit={handleConfirmAddress}
                >
                    {/* Address Input */}
                    <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <label className="block mb-2 text-sm font-medium">Enter Your Street Here</label>
                        <input 
                            type="text" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            className="w-full p-2 text-black rounded-lg outline-none focus:ring-2 focus:ring-[#eb650f]" 
                            placeholder="123 Main St"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button 
                        type="submit"
                        className="w-full p-2 font-semibold text-black transition-transform duration-300 bg-[#eb650f] rounded-lg hover:bg-opacity-90 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Confirm Address
                    </motion.button>
                </motion.form>

                {/* Delivery Acceptance Message */}
                {isDeliveryAccepted !== null && (
                    <motion.div 
                        className={`mt-4 p-3 rounded-lg text-center ${isDeliveryAccepted ? 'bg-green-500' : 'bg-red-500'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {isDeliveryAccepted ? 'Delivery is available in your area! 🚀' : 'Sorry, delivery is not available in your area. 😞'}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
