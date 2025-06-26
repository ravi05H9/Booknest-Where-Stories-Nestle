import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [message, setMessage] = useState("")
    const { loginUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            alert("Login successful!");
            navigate("/")
        } catch (error) {
            setMessage("Please provide a valid email and password"); 
            console.error(error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/")
        } catch (error) {
            alert("Google sign in failed!"); 
            console.error(error);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600'>
            <div className='w-full max-w-md bg-white shadow-2xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105'>
                <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Welcome Back</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-semibold mb-2' htmlFor="email">Email</label>
                        <input 
                            {...register("email", { required: true })} 
                            type="email" id="email" placeholder='Enter your email'
                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {errors.email && <p className='text-red-500 text-sm'>Email is required</p>}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-semibold mb-2' htmlFor="password">Password</label>
                        <input 
                            {...register("password", { required: true })} 
                            type="password" id="password" placeholder='Enter your password'
                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {errors.password && <p className='text-red-500 text-sm'>Password is required</p>}
                    </div>
                    {message && <p className='text-red-500 text-sm text-center'>{message}</p>}
                    <button 
                        type='submit' 
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300'>
                        Login
                    </button>
                </form>

                <p className='text-center text-sm text-gray-600 mt-4'>Don't have an account? 
                    <Link to="/register" className='text-blue-500 hover:underline ml-1'>Sign up</Link>
                </p>

                <div className='mt-4'>
                    <button 
                        onClick={handleGoogleSignIn}
                        className='w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300'>
                        <FaGoogle /> Sign in with Google
                    </button>
                </div>
                
                <p className='text-center text-sm text-gray-600 mt-4'>Admin Login?
                    <Link to="/admin" className='text-blue-500 hover:underline ml-1'>Click here</Link>
                </p>

                <p className='mt-6 text-center text-gray-400 text-xs'>©2025 BookNest. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Login;