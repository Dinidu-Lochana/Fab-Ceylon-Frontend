'use client';
import React from 'react';
import { KandyMainMenuNavBar } from '@/components/Fab-Kandy-MainMenuNavBar';
import Image from 'next/image';
import Link from 'next/link'; 
import { motion } from 'framer-motion';
import deliveryImage from '@/components/Assets/delivery_icon.png'; // Delivery image
import pickupImage from '@/components/Assets/pickup_icon.png'; // Pickup image

export default function OrderTypeSelection() {
    return (
        <div>
            <KandyMainMenuNavBar />
            <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
                {/* Heading with Animation */}
                <motion.h2 
                    className="mt-1 mb-4 text-3xl font-semibold"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    Choose Order Type
                </motion.h2>

                <div className="flex gap-6">
                    {/* Delivery Box with Moving Image Animation */}
                    <Link href="https://www.ubereats.com/lk/store/fab-ceylon-kandy/sGKK3McvRmCcXD_pYMDAyg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkZhY3VsdHklMjBvZiUyMEVuZ2luZWVyaW5nJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFJ1aHVuYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUplMnIyaUV0eDRUb1JHcUE1bUtqdWY0byUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E2LjA3OTM2ODQlMkMlMjJsb25naXR1ZGUlMjIlM0E4MC4xOTE5NjQ1OTk5OTk5OSU3RA%3D%3D">
                    <div className="flex flex-col items-center justify-center w-48 h-64 p-6 text-center transition-transform duration-300 transform bg-yellow-400 shadow-lg cursor-pointer order-box rounded-xl hover:scale-105 hover:shadow-2xl hover:bg-yellow-300">
                        <motion.div 
                            animate={{ x: [-5, 5, -5] }} // Moves left and right
                            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                        >
                            <Image src={deliveryImage} alt="Delivery" width={100} height={100} />
                        </motion.div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-800">Delivery</h3>
                    </div>
                    </Link>
                    

                    {/* Pickup Box with Popping Image Animation */}
                    <Link href="/fabceylon-kandy/order/appetizers">
                        <div className="flex flex-col items-center justify-center w-48 h-64 p-6 text-center transition-transform duration-300 transform bg-green-500 shadow-lg cursor-pointer order-box rounded-xl hover:scale-105 hover:shadow-2xl hover:bg-green-400">
                            <motion.div 
                                animate={{ scale: [1, 1.1, 1] }} // Pops in and out
                                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                            >
                                <Image src={pickupImage} alt="Pickup" width={100} height={100} />
                            </motion.div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">Pickup</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
