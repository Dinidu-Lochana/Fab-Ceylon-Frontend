'use client'; // For client-side rendering

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';

const UpdateFood = () => {
    const router = useRouter();
    const { id } = router.query; // Fetch ID from query params
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        foodName: "",
        price: "",
        description: "",
        foodCategory: "",
        isDeliveryAvailable: "",
        image: ""
    });

    // Fetch food details
    useEffect(() => {
        const fetchFood = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/admins/getfoodbyid/${id}`
                );
                setFormData(response.data); // Set fetched data
                setLoading(false);
            } catch (error) {
                toast.error("Failed to fetch food details", { containerId: 'ErrorMessage' });
                setLoading(false);
            }
        };

        if (id) fetchFood();
    }, [id]);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, image: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const updateFood = async () => {
        const token = localStorage.getItem("admin");
        let adminId = null;

        if (token) {
            const decodedToken = jwtDecode(token);
            adminId = decodedToken._id;
        }

        const payload = { ...formData, admin_id: adminId };

        try {
            await axios.patch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL_ADDRESS}/api/admins/updatefood/${id}`,
                JSON.stringify(payload),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success("Successfully updated Food", { containerId: 'successMessage' });
            router.push("/foods");
        } catch (error) {
            toast.error(error.response?.data?.error || "An error occurred", { containerId: 'ErrorMessage' });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative w-full min-h-screen bg-gray-100 parent">
            <div className="absolute inset-0 flex items-center justify-center child">
                <form className="w-full max-w-2xl p-10 bg-white rounded-lg shadow-md">
                    <h1 className="mb-6 text-2xl font-semibold text-center">Update Food</h1>

                    <div className="mb-4">
                        <label htmlFor="file-upload" className="block mb-2 text-sm font-medium text-gray-700">
                            Upload Image
                        </label>
                        <label
                            htmlFor="file-upload"
                            className="inline-block px-4 py-2 font-bold text-black transition duration-300 bg-yellow-400 rounded cursor-pointer hover:bg-yellow-500">
                            Upload Image
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            value={formData.foodName}
                            onChange={changeHandler}
                            className="w-full h-10 px-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl"
                            placeholder="Food Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={changeHandler}
                            className="w-full h-10 px-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl"
                            placeholder="Price"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={changeHandler}
                            rows="4"
                            className="w-full h-32 px-3 text-sm text-gray-800 bg-white border border-gray-300 resize-none rounded-xl"
                            placeholder="Description"></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
                        <select
                            name="foodCategory"
                            value={formData.foodCategory}
                            onChange={changeHandler}
                            className="w-full h-10 px-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl">
                            <option value="" disabled>Select Category</option>
                            <option value="Appetizer">Appetizer</option>
                            <option value="Main Course">Main Course</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Beverage">Beverage</option>
                            <option value="Salad">Salad</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Delivery Available?</label>
                        <select
                            name="isDeliveryAvailable"
                            value={formData.isDeliveryAvailable}
                            onChange={changeHandler}
                            className="w-full h-10 px-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl">
                            <option value="" disabled>Is Delivery Available?</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        onClick={updateFood}
                        className="w-full h-10 font-semibold text-white transition duration-300 bg-blue-600 rounded-xl hover:bg-blue-700">
                        Update Food
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;
