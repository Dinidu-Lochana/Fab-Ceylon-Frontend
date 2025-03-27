"use client";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

import {  Legend } from "recharts";


export default function OrderAnalysis() {
    const [admin_id, setAdminId] = useState(""); // Change to admin_id
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [foodName, setFoodId] = useState("");
    const [foodCategory, setFoodCategory] = useState("");
    const [orderData, setOrderData] = useState([]);
    const [orderType, setOrderType]=useState("");
    const [startYear, setStartYear]=useState("");
    const [startMonth, setStartMonth]=useState("");
    const [endYear, setEndYear]=useState("");
    const [endMonth, setEndMonth]=useState("");
    const [ordermonthdata, setOrder]=useState("");


    const [data, setData] = useState([]);

  
    // Function to get admin_id from token
    const getAdminIdFromToken = () => {
        const userData = localStorage.getItem("admin");
        if (!userData) {
            toast.error("No token found. Please log in.");
            return null;
        }

        try {
            const parsedUserData = JSON.parse(userData);
            const token = parsedUserData.createdToken;

            if (!token) {
                toast.error("Token is missing in user data.");
                return null;
            }

            const decodedToken = jwtDecode(token);
            console.log("Decoded Token:", decodedToken);

            const admin_id = decodedToken._id || null;  // Ensure to use admin_id here
            console.log("Extracted admin_id:", admin_id);

            return admin_id;
        } catch (error) {
            console.error("Error decoding token:", error);
            toast.error("Invalid token. Please log in again.");
            return null;
        }
    };

    // Set admin_id on component mount
    useEffect(() => {
        const adminId = getAdminIdFromToken();
        if (adminId) {
            setAdminId(adminId); // Use setAdminId
        }
    }, []);

    const fetchOrderCount = async (admin_id, startDate, endDate) => {
        try {
            console.log("asmm", admin_id);
            console.log("s", startDate);
            console.log("e", endDate);
            const url = `http://localhost:4000/api/ordercount/orders/count/${admin_id}?startDate=${startDate}&endDate=${endDate}`;
            console.log("Request URL:", url); // Debugging log
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json', // Ensures the correct content type
                }
            });
            console.log(response.data);
            setOrderData(response.data); // Set order data for chart rendering
        } catch (error) {
            console.error("Error fetching order count:", error);
            toast.error("Failed to fetch order count.");
        }
    };

    const fetchOrderTypeCount = async (admin_id, orderType, startDate, endDate)=>{
        try{
            const url=`http://localhost:4000/api/ordercount/orders/count/type/${admin_id}?orderType=${orderType}&startDate=${startDate}&endDate=${endDate}`
           const response=await axios.get(url, {
            headers: {
                'Content-Type': 'application/json', // Ensures the correct content type
            }
           });
           setOrderData(response.data);
        }
        catch(error){
            toast.error("Failed to fetch order count.");

        }

    };

    // Fetch order count by food
const fetchOrderCountByFood = async (admin_id, foodName, startDate, endDate) => {  
    try {
        const url = `http://localhost:4000/api/ordercount/orders/count/food/${admin_id}?foodName=${foodName}&startDate=${startDate}&endDate=${endDate}`;
        
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json', // Ensures the correct content type
            }
        });

        console.log('Response:', response.data);
        setOrderData(response.data); // Update state with fetched data
    } catch (error) {
        console.error("Error fetching order count by food name:", error);
        toast.error("Failed to fetch order count by food name.");
    }
};

// Fetch order count by category
const fetchOrderCountByCategory = async (admin_id, foodCategory, startDate, endDate) => {  
    try {
        console.log('dsdhjfsdf',admin_id);
        console.log('dsfgdfg',foodCategory);
        console.log('WEW',startDate);
        console.log('ertrtr',endDate);
        const url = `http://localhost:4000/api/ordercount/orders/count/category/${admin_id}?foodCategory=${foodCategory}&startDate=${startDate}&endDate=${endDate}`;
        console.log("Request URL:", url);
        const response = await axios.post(url, {
            headers: {
                'Content-Type': 'application/json', // Ensures the correct content type
            }
        }); 
        console.log('res',response.data);
        setOrderData(response.data);  // Use GET request
        
    } catch (error) {
        console.error("Error fetching order count by food category:", error);
        toast.error("Failed to fetch order count by food category.");
    }
};

const fetchmonthOrderCount = async(admin_id, startYear, startMonth, endYear, endMonth) =>{
    try{
    
    const url = `http://localhost:4000/api/ordercount/orders/month/count/${admin_id}?startYear=${startYear}&startMonth=${startMonth}&endYear=${endYear}&endMonth=${endMonth}`;

    const response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json', // Ensures the correct content type
        }
    }); 
    console.log('res',response.data);
    setOrder(response.data);

    }
    catch{

        console.error("Error fetching order count by month:", error);
        toast.error("Failed to fetch order count by month.");

    }
};

const fetchmonthOrderCountFoodName = async(admin_id, startYear, startMonth, endYear, endMonth, foodName) =>{
    try{
    
    const url = `http://localhost:4000/api/ordercount/orders/month/count/food/${admin_id}?startYear=${startYear}&startMonth=${startMonth}&endYear=${endYear}&endMonth=${endMonth}&foodName=${foodName}`;

    const response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json', // Ensures the correct content type
        }
    }); 
    console.log('res',response.data);
    setOrder(response.data);

    }
    catch{

        console.error("Error fetching order count by month:", error);
        toast.error("Failed to fetch order count by month.");

    }
};

const fetchmonthOrderCountFoodCategory = async(admin_id, startYear, startMonth, endYear, endMonth, foodCategory) =>{
    try{
    
    const url = `http://localhost:4000/api/ordercount/orders/month/count/category/${admin_id}?startYear=${startYear}&startMonth=${startMonth}&endYear=${endYear}&endMonth=${endMonth}&foodCategory=${foodCategory}`;

    const response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json', // Ensures the correct content type
        }
    }); 
    console.log('res',response.data);
    setOrder(response.data);

    }
    catch{

        console.error("Error fetching order count by month:", error);
        toast.error("Failed to fetch order count by month.");

    }
};


const fetchmonthOrderCountOrderType = async(admin_id, startYear, startMonth, endYear, endMonth, orderType) =>{
    try{
    
    const url = `http://localhost:4000/api/ordercount/orders/month/count/type/${admin_id}?startYear=${startYear}&startMonth=${startMonth}&endYear=${endYear}&endMonth=${endMonth}&orderType=${orderType}`;

    const response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json', // Ensures the correct content type
        }
    }); 
    console.log('res',response.data);
    setOrder(response.data);

    }
    catch{

        console.error("Error fetching order count by month:", error);
        toast.error("Failed to fetch order count by month.");

    }
};




    return (
        <div className="grid min-h-screen grid-cols-1 gap-6 p-6 bg-gray-900">
            {/* Orders by Admin */}
            <Card>
                <CardContent>
                    <h2 className="text-xl font-semibold">Orders by Admin</h2>
                    <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mb-2" />
                    <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="mb-2" />
                    <Button onClick={() => fetchOrderCount(admin_id, startDate, endDate)}>  {/* Use admin_id */}
                        Get Order Count
                    </Button>
                </CardContent>
            </Card>

            <Card>
    <CardContent>
        <h2 className="text-xl font-semibold">Orders by Admin Month</h2>
        
        {/* Start Year and Month */}
        <div className="flex-row mb-2 space-x-2">
            <Input 
                type="month" 
                value={startYear + '-' + startMonth} 
                onChange={(e) => {
                    const [year, month] = e.target.value.split('-');
                    setStartYear(year);
                    setStartMonth(month);  // Ensure month is single digit if necessary (January = 1, February = 2)
                    console.log("Start Year:", year);
                    console.log("Start Month:", month);
                }} 
                className="mb-2" 
            />
        </div>

        {/* End Year and Month */}
        <div className="flex mb-2 space-x-2">
            <Input 
                type="month" 
                value={endYear + '-' + endMonth} 
                onChange={(e) => {
                    const [year, month] = e.target.value.split('-');
                    setEndYear(year);
                    setEndMonth(month);  // Ensure month is single digit if necessary (January = 1, February = 2)
                    console.log("End Year:", year);
                    console.log("End Month:", month);
                }} 
                className="mb-2" 
            />
        </div>

        <Button 
            onClick={() => {
                console.log("Admin ID:", admin_id);
                console.log("Start Year:", startYear);
                console.log("Start Month:", startMonth);
                console.log("End Year:", endYear);
                console.log("End Month:", endMonth);

                // Make sure startMonth and endMonth are sent correctly
                fetchmonthOrderCount(admin_id, startYear, startMonth, endYear, endMonth);
            }} 
        >
            Get Order Count
        </Button>
    </CardContent>
</Card>





            {/* Orders by Food */}
            <Card>
                <CardContent>
                    <h2 className="text-xl font-semibold">Orders by Food</h2>
                    <Input placeholder="Food ID" value={foodName} onChange={(e) => setFoodId(e.target.value)} className="mb-2" />
                    <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mb-2" />
                    <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="mb-2" />
                    <Button onClick={() => fetchOrderCountByFood(admin_id, foodName, startDate, endDate)}>  {/* Use admin_id */}
                        Get Order Count
                    </Button>
                </CardContent>
            </Card>


            <Card>
    <CardContent>
        <h2 className="text-xl font-semibold">Orders by Admin Month Food Name</h2>
        
        {/* Start Year and Month */}
        <div className="flex mb-2 space-x-2">
            <Input 
                type="month" 
                value={startYear + '-' + startMonth} 
                onChange={(e) => {
                    const [year, month] = e.target.value.split('-');
                    setStartYear(year);
                    setStartMonth(month);  // Ensure month is single digit if necessary (January = 1, February = 2)
                    console.log("Start Year:", year);
                    console.log("Start Month:", month);
                }} 
                className="mb-2" 
            />
        </div>

        {/* End Year and Month */}
        <div className="flex mb-2 space-x-2">
            <Input 
                type="month" 
                value={endYear + '-' + endMonth} 
                onChange={(e) => {
                    const [year, month] = e.target.value.split('-');
                    setEndYear(year);
                    setEndMonth(month);  // Ensure month is single digit if necessary (January = 1, February = 2)
                    console.log("End Year:", year);
                    console.log("End Month:", month);
                }} 
                className="mb-2" 
            />
        </div>

        <div className="flex mb-2 space-x-2">
    <Input 
        type="text" 
        value={foodName} 
        onChange={(e) => {
            setFoodId(e.target.value);  // Update the foodName state with the entered value
            console.log("Food Name:", e.target.value);
        }} 
        className="mb-2" 
        placeholder="Enter food name"
    />
</div>


        <Button 
            onClick={() => {
                console.log("Admin ID:", admin_id);
                console.log("Start Year:", startYear);
                console.log("Start Month:", startMonth);
                console.log("End Year:", endYear);
                console.log("End Month:", endMonth);
                console.log("FoodName", foodName);

                // Make sure startMonth and endMonth are sent correctly
                fetchmonthOrderCountFoodName(admin_id, startYear, startMonth, endYear, endMonth, foodName);
            }} 
        >
            Get Order Count
        </Button>
    </CardContent>
</Card>


            {/* Orders by Food Category */}
            <Card>
                <CardContent>
                    <h2 className="text-xl font-semibold">Orders by Food Category</h2>
                    <Input placeholder="Food Category" value={foodCategory} onChange={(e) => setFoodCategory(e.target.value)} className="mb-2" />
                    <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mb-2" />
                    <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="mb-2" />
                    <Button onClick={() => fetchOrderCountByCategory(admin_id, foodCategory, startDate, endDate)}>  {/* Use admin_id */}
                        Get Order Count
                    </Button>
                </CardContent>
            </Card>


            <Card>
    <CardContent>
        <h2 className="text-xl font-semibold">Orders by Admin Month</h2>
        
        {/* Start Year and Month */}
        <div className="flex mb-2 space-x-2">
            <Input 
                type="month" 
                value={startYear + '-' + startMonth} 
                onChange={(e) => {
                    const [year, month] = e.target.value.split('-');
                    setStartYear(year);
                    setStartMonth(month);  // Ensure month is single digit if necessary (January = 1, February = 2)
                    console.log("Start Year:", year);
                    console.log("Start Month:", month);
                }} 
                className="mb-2" 
            />
        </div>

        {/* End Year and Month */}
        <div className="flex mb-2 space-x-2">
            <Input 
                type="month" 
                value={endYear + '-' + endMonth} 
                onChange={(e) => {
                    const [year, month] = e.target.value.split('-');
                    setEndYear(year);
                    setEndMonth(month);  // Ensure month is single digit if necessary (January = 1, February = 2)
                    console.log("End Year:", year);
                    console.log("End Month:", month);
                }} 
                className="mb-2" 
            />
        </div>
 
        <div className="flex mb-2 space-x-2">
    <Input 
        type="text" 
        value={foodCategory} 
        onChange={(e) => {
            setFoodCategory(e.target.value);  // Update the foodName state with the entered value
            console.log("Food Name:", e.target.value);
        }} 
        className="mb-2" 
        placeholder="Enter food name"
    />
</div>
        



        <Button 
            onClick={() => {
                console.log("Admin ID:", admin_id);
                console.log("Start Year:", startYear);
                console.log("Start Month:", startMonth);
                console.log("End Year:", endYear);
                console.log("End Month:", endMonth);

                // Make sure startMonth and endMonth are sent correctly
                fetchmonthOrderCountFoodCategory(admin_id, startYear, startMonth, endYear, endMonth, foodCategory);
            }} 
        >
            Get Order Count
        </Button>
    </CardContent>
</Card>



            <Card>
                <CardContent>
                    <h2 className="text-xl font-semibold">Orders by Order Type</h2>
                    <Input placeholder="Order Type" value={orderType} onChange={(e) => setOrderType(e.target.value)} className="mb-2" />
                    <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mb-2" />
                    <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="mb-2" />
                    <Button onClick={() => fetchOrderTypeCount(admin_id, orderType, startDate, endDate)}>  {/* Use admin_id */}
                        Get Order Count
                    </Button>
                </CardContent>
            </Card>



            
<Card>
    <CardContent>
        <h2 className="text-xl font-semibold">Orders by Admin Month</h2>
        
        {/* Start Year and Month */}
        <div className="flex mb-2 space-x-2">
            <Input 
                type="month" 
                value={startYear + '-' + startMonth} 
                onChange={(e) => {
                    const [year, month] = e.target.value.split('-');
                    setStartYear(year);
                    setStartMonth(month);  // Ensure month is single digit if necessary (January = 1, February = 2)
                    console.log("Start Year:", year);
                    console.log("Start Month:", month);
                }} 
                className="mb-2" 
            />
        </div>

        {/* End Year and Month */}
        <div className="flex mb-2 space-x-2">
            <Input 
                type="month" 
                value={endYear + '-' + endMonth} 
                onChange={(e) => {
                    const [year, month] = e.target.value.split('-');
                    setEndYear(year);
                    setEndMonth(month);  // Ensure month is single digit if necessary (January = 1, February = 2)
                    console.log("End Year:", year);
                    console.log("End Month:", month);
                }} 
                className="mb-2" 
            />
        </div>
 
        <div className="flex mb-2 space-x-2">
    <Input 
        type="text" 
        value={orderType} 
        onChange={(e) => {
            setOrderType(e.target.value);  // Update the foodName state with the entered value
            console.log("Food Name:", e.target.value);
        }} 
        className="mb-2" 
        placeholder="Enter food name"
    />
</div>
        



     //*   <Button 
            onClick={() => {
                console.log("Admin ID:", admin_id);
                console.log("Start Year:", startYear);
                console.log("Start Month:", startMonth);
                console.log("End Year:", endYear);
                console.log("End Month:", endMonth);

                // Make sure startMonth and endMonth are sent correctly
                fetchmonthOrderCountOrderType(admin_id, startYear, startMonth, endYear, endMonth, orderType);
            }} 
        >
            Get Order Count
        </Button>
    </CardContent>
</Card>






            {/* Bar Chart */}
            {orderData.length > 0 && (
                <Card>
                    <CardContent>
                        <h2 className="text-xl font-semibold">Order Count Chart</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={orderData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="count" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            )}


{ordermonthdata.length > 0 && (
    <Card>
        <CardContent>
            <h2 className="text-xl font-semibold">Order Count by Month</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ordermonthdata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" /> {/* Use "month" for X-axis */}
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
)}




        </div>
    );

    





}

