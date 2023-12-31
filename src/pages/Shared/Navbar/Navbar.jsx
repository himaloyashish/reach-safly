import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <nav className='md:bg-[#F1EAFF] shadow-purple-600'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === false ? <Bars3Icon className="h-8 w-8 hover:bg-purple-700 p-1 rounded-md text-blue-500 cursor-pointer" />
                            :
                            <XMarkIcon className="h-8 w-8 hover:bg-purple-700 p-1 rounded-md text-blue-500 cursor-pointer" />
                    }
                </span>
            </div>
            <ul className={` justify-between items-center z-10 py-2 rounded-md bg-[#F1EAFF] absolute md:static duration-500 md:flex shadow-purple-200 ${open ? "top-8" : "-top-96"}`}>
                <div className='md:flex justify-center items-center'>
                    <Link><img className='h-12 w-12' src="https://i.ibb.co/XFKjMfT/New-Logo.png" alt="" /></Link>
                    <li className='hover:bg-purple-700 rounded-md text-2xl p-1'> <Link >Reach Safely</Link></li>
                </div>

                <ul className='gap-3 md:flex '>
                    <li className='hover:bg-purple-700 hover:text-[#F1EAFF] rounded-md button '> <Link >Home</Link></li>
                    <li className='hover:bg-purple-700 hover:text-[#F1EAFF] rounded-md button '> <Link >About</Link></li>
                    <li className='hover:bg-purple-700 hover:text-[#F1EAFF] rounded-md button '> <Link >Tours</Link></li>
                    <li className='hover:bg-purple-700 hover:text-[#F1EAFF] rounded-md button '> <Link >Destinations</Link></li>
                    <li className='hover:bg-purple-700 hover:text-[#F1EAFF] rounded-md button '> <Link >Blog</Link></li>
                    <li className='hover:bg-purple-700 hover:text-[#F1EAFF] rounded-md button '> <Link >Pages</Link></li>
                    <li className='hover:bg-purple-700 hover:text-[#F1EAFF] rounded-md button '> <Link >Contact</Link></li>

                </ul>
                <ul className='gap-4 md:flex sm:hidden'>
                    <li className='hover:bg-purple-700 hover:text-[#F1EAFF] rounded-md button '> <Link>Login</Link></li>
                    <li className='hover:bg-purple-700 hover:text-[#F1EAFF] rounded-md button '><Link>Log Out</Link></li>
                </ul>
            </ul>

        </nav>
    );
};

export default Navbar;