"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <main className=' dark:text-white'>
            <div className="flex flex-row items-center justify-between p-4 sm:p-12 md:px-24 lg:px-32">
                <div className="logo">
                    <h1 className="text-4xl font-bold"><Link href="/">NHMS</Link></h1>
                </div>

                {/* Navbar for large screens */}
                <div className="navbar hidden sm:flex text-lg ">
                    <ul className="flex flex-row gap-4 ">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li className='hover:text-green-500'>
                            <Link href="/login">Login</Link>
                        </li>
                    </ul>
                </div>

                {/* Menu icon for small screens */}
                <div className="sm:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="text-white focus:outline-none"
                    >
                        {/* Menu Icon (Hamburger) */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dropdown menu for small screens */}
            {isMenuOpen && (
                <div className="sm:hidden absolute flex justify-end items-end px-4 w-full">
                    <ul className="flex flex-col items-end gap-2 text-white">
                        <li className='hover:font-bold'><Link href="/">Home</Link></li>
                        <li className='hover:font-bold'><Link href="/about">About</Link></li>
                        <li className='hover:font-bold'><Link href="/contact">Contact</Link></li>
                        <li className='hover:font-bold'><Link href="/login">Login</Link></li>
                    </ul>
                </div>
            )}
        </main>
    );
}
