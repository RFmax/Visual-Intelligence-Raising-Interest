import React from 'react';
import { useState } from 'react';
import { dayVisual } from '../constants';

const Examples = () => (
  <div className='flex'>
    <div className='flex flex-col items-center py-6'>
      <h1 className='font-montserrat font-semibold text-[32px] text-gradient leading-10'> Visualizing your day </h1>
      <div className='m-auto py-16 px-4 relative'>
        <div className='rounded-xl bg-center bg-cover duration-500 object-fill h-full w-full'></div>
      </div>
    </div>

    <div className='flex flex-col items-center py-6'>
      <h2 className='font-montserrat font-semibold text-[32px] text-gradient leading-10'>Data physicalization?</h2>
      <div className='w-[1000px] h-[600px] bg-[red]'> PLACEHOLDER</div>
    </div>

    <div className='flex flex-col items-center py-6'>
      <h2 className='font-montserrat font-semibold text-[32px] text-gradient leading-10'>PowerBI</h2>
      <div className='w-[1000px] h-[600px] bg-[red]'>PLACEHOLDER</div>
    </div>
  </div>
)


export default Examples