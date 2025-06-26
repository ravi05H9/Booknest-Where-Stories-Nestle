import axios from "axios";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import getBaseUrl from '../utils/baseURL';

const AdminLogin = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const auth = response.data;
            if (auth.token) {
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token');
                    alert('Token has expired! Please login again.');
                    navigate("/");
                }, 3600 * 1000);
            }
            alert("Admin Login successful!");
            navigate("/dashboard");
        } catch (error) {
            setMessage("Please provide a valid username and password");
            console.error(error);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center relative overflow-hidden bg-black'>
            {/* Dynamic animated background */}
            <div className='absolute inset-0 z-0'>
                <div className='absolute w-[300px] h-[300px] bg-blue-500 rounded-full blur-[150px] top-10 left-10 animate-pulse'></div>
                <div className='absolute w-[250px] h-[250px] bg-purple-500 rounded-full blur-[150px] bottom-20 right-20 animate-bounce'></div>
            </div>
            
            <div className='relative z-10 w-full max-w-md bg-white shadow-2xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105'>
                <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Admin Dashboard Login</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-semibold mb-2' htmlFor="username">Username</label>
                        <input
                            {...register("username", { required: true })}
                            type="text" id="username" placeholder='Enter username'
                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {errors.username && <p className='text-red-500 text-sm'>Username is required</p>}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-semibold mb-2' htmlFor="password">Password</label>
                        <input
                            {...register("password", { required: true })}
                            type="password" id="password" placeholder='Enter password'
                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {errors.password && <p className='text-red-500 text-sm'>Password is required</p>}
                    </div>
                    {message && <p className='text-red-500 text-sm text-center'>{message}</p>}
                    <button 
                        type='submit'
                        className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300'>
                        Login
                    </button>
                </form>
                
                <p className='mt-6 text-center text-gray-400 text-xs'>©2025 BookNest. All rights reserved.</p>
            </div>
        </div>
    );
};

export default AdminLogin;
