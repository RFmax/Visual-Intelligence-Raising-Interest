import React from 'react';
import { logo } from '../assets';
import { footerLinks } from '../constants';

const Footer = () => (
    <section className='flex flex-col py-6'>
        <div className='flex flex-row w-full justify-between border-t-[1.5px] border-t-[#FF7D98] py-4'>
            <div className='flex flex-col justify-start'>
                <img src={logo} alt="logo" className='w-[64px] h-[64px] object-contain' />
                <p className='font-montserrat font-normal text-[14px] leading-[20px] max-w-[250px] mt-4'> Created For Zuyd University of Applied Sciences.</p>
            </div>

            <div className='flex flex-col justify-start'>
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key} className='flex flex-col min-w-[150px]'>
                        <h4 className='font-montserrat font-semibold text-[18px] leading-[25px]'>{footerLink.title}</h4>
                        <ul className='list-none mt-2'>{footerLink.links.map((link, index) => (
                            <li key={link.name} className='font-montserrat font-normal text-[16px] leading-[24px]'> 
                                {link.name}
                            </li>
                        ))}</ul>
                    </div>
                ))} 
            </div>
        </div>

        <div className='mt-5 '>
            <p className='font-montserrat font-light text-center text-[16px] leading-[26px]'>2023 Minor Visual Intelligence. All Rights Reserved.</p>
        </div>
    </section>
)

export default Footer