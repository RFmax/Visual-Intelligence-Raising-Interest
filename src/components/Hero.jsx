import React from 'react'
import { diagram } from '../assets';
import Facts from './Facts';
import Relationship from './Relationship';
import Application from './Application';
import Review from './Review';
import { feedback } from '../constants';

const Hero = () => (

  <section>
    <div>
      <div className='flex flex-row max-sm:flex-col w-full items-start justify-between'>
        <div className='flex flex-col justify-start mt-[100px] bg-secondary p-6 rounded-l-2xl z-[1]'>
          <h1 className="font-montserrat font-bold text-[48px] max-sm:text-[40px] leading-[75px]"> <span className='text-black'> Visual </span><span className='text-[#FFD700]'> Intelligence </span> </h1>
          <p className='font-montserrat font-normal text-[18px] leading-normal max-w-[600px] mt-8 text-justify'>
          Data has become more valuable than gold, oil and gas. The value of corporations have long been dictated by the access to natural resources. Looking at the most valuable organisations today, you can see this is no longer the case. Companies that have access to data and are able to transfer that data into information are the new market leaders. 
          Having access to data is just part of the deal. The human mind is not capable of processing huge amounts of data, because our brain is mostly designed to interpreting visuals. As the volume of data increases via a logarithmic scale, knowing how to use it becomes more and more important. The best companies know how to create value out of data by smart algorithms and visualisations. 
          </p>
        </div>
        <div className='flex justify-end mt-[80px]'>
          <img src={diagram} alt="diagram" className="w-[955px] h-[580px] object-contain shadow-xl rounded-3xl z-[0]"  />
        </div>
    </div>
      < Facts />   
    </div>

    <div>
      <Application / >
      <Relationship / >
      <div className='flex flex-col items-center'>
        <h2 className='flex-1 font-montserrat font-semibold text-[36px] leading-[24px] py-5 text-tertiary'>
          Experiences</h2>
        <div className="flex flex-wrap items-center justify-center w-full feedback-container relative z-[1]">
          {feedback.map((card) => <Review key={card.id} {...card} />)}
        </div>
      </div>
    </div>
  </section> 

)

export default Hero