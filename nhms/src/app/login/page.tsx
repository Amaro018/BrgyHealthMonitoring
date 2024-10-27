"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// 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 jsontoken
export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userName, password, name}),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }


            // Store the token in local storage or cookies
            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.name); 
          

            console.log(data.name);
            // Redirect to the dashboard or another protected route
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className='login flex justify-center items-center py-12 px-8 sm:px-12'>
            <form onSubmit={handleSubmit} className='border border-green-500 p-8 rounded-md w-full sm:w-1/3 md:w-1/3 lg:w-1/4'>
                {error && <p className="text-red-500">{error}</p>}
                <div className='w-full flex flex-col mb-4'>
                    <label htmlFor="userName">User Name :</label>
                    <input
                        type="text"
                        id="userName"
                        className='border border-gray-300 p-2 rounded text-black'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className='w-full flex flex-col mb-4'>
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        id="password"
                        className='border border-gray-300 p-2 rounded text-black'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex justify-end'>
                    <button type='submit' className='bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-400'>Login</button>
                </div>
            </form>
        </div>
    );
}
