import React from 'react';
import { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex py-6 px-6 justify-between items-center bg-gradient rounded-b-[5px]'>
        <img src={logo} alt="logo" className='w-[64px] h-[64px] ml-2' />

        <ul className='list-none sm:flex hidden justify-end items-start flex-1'>
            {navLinks.map((nav, index) => (
                <li key={nav.id}
                className={`font-montserrat font-medium cursor-pointer text-[20px] text-red
                ${index === navLinks.length - 1 ? "mr-[50px]" : "mr-10"}`}>
                    <a href={`/${nav.id}`} className='text-white font-medium'>{nav.title}</a>
                </li>
            ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center z-[1]'>
            <img src={toggle ? close : menu } alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[red] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>         
            <ul className='list-none flex-col justify-end items-start flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                    className={`font-montserrat font-medium cursor-pointer text-[20px] text-red
                    ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
                        <a href={`/${nav.id}`} className='text-white font-medium'>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </div>

        </div>
        </nav>
    )
}

export default Navbar