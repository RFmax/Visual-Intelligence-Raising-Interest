import React from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt="logo" className='w-[64px] h-[64px] ml-2' />

        <ul className='list-none flex justify-end items-start flex-1'>
            {navLinks.map((nav, index) => (
                <li key={nav.id}
                className={`font-montserrat font-medium cursor-pointer text-[20px] text-red  
                ${index === navLinks.length - 1 ? "mr-[50px]" : "mr-10"}`}>
                    <a href={`/${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
    </nav>
)


export default Navbar