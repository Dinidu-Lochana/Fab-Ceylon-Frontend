"use client"
import axios from 'axios';
import React from 'react'

 const page = () => {
    const sendMessage = async ()=>{
        try {
            const response = await axios.get(
              'https://app.text.lk/api/http/sms/send?recipient=764857592&sender_id=TextLKDemo&message=testing2&api_token=437|BS4iSYLhdKmXURkWErcuQL7YSnpyZrN0oJfzjE4i23abde16',
 
            );
        
            console.log('SMS Sent!', response.data);
          } catch (error) {
            console.error('Failed to send SMS:', error.response?.data || error.message);
          }
        };
        return (
            <button onClick={sendMessage} className='text-5xl bg-lime-600'>send message</button>
        )
}

export default page;