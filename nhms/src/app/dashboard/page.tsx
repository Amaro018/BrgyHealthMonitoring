'use client'; // Make sure this is a client component

import React, { useEffect, useState } from 'react';
const Dashboard = () => { 
    const [name, setName] = useState<string | null>(null); 

    useEffect(() => {
        // Get the name from local storage when the component mounts
        const storedName = localStorage.getItem('name');
        setName(storedName);
    }, []);


    return (
        
            <main className='dark:text-white w-full h-screen'>
            <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl">Welcome to the Dashboard!{name}</h1>
            </div>
            </main>
        
    );
};

export default Dashboard;
