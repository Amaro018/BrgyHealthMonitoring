"use client";

import React from 'react'; // Ensure you import React for JSX

export default function Login() {
    return (
        <div className='login flex justify-center items-center py-12'>
            <form action="" className='border border-green-500 p-8 rounded-md w-1/4'>
                <div className='w-full flex flex-col mb-4'>
                <label htmlFor="userName">User Name :</label>
                <input type="userName" className='border border-gray-300 p-2 rounded'/>
                </div>
                <div className='w-full flex flex-col mb-4'>
                <label htmlFor="password">Password :</label>
                <input type="password" className='border border-gray-300 p-2 rounded' />
                </div>
                <div className='flex justify-end'>
                <button type='submit' className='bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-400 '>Login</button>
                </div>
            </form>
        </div>
    );
}
