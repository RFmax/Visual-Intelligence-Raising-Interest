import React from 'react'
import { diagram } from '../assets';
import Facts from './Facts';
import Relationship from './Relationship';
import Application from './Application';

const Hero = () => (
  <section>
    <div className='flex flex-row w-full items-start'>
      <div className='flex flex-col justify-start mt-[100px]'>
        <h1 className="flex-1 font-montserrat font-bold text-[64px] text-gradient leading-[75px]">Visual <br /> Intelligence</h1>
        <p className='font-montserrat font-normal text-[18px] leading-normal max-w-[650px] mt-8'>The value of corporations have long been dictated by the access of these businesses to natural resources.
        Looking at the most valuable organisations nowadays it becomes visible that companies having access to data and are able to transfer data into information are the winners. Data has become more valuable than gold, 
        oil and gas. So it is important to start seeing data as a natural resource to be explored and exploited by businesses.</p>
      </div>
      <div className='flex justify-end mt-[30px]'>
        <img src={diagram} alt="diagram" className="w-[80%] h-[80%]"  />
      </div>
    </div>
    <div>
    < Facts />          
    </div>
  </section> 
)

export default Hero