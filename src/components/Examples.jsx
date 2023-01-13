import React from 'react';
import { useState } from 'react';
import { dayVisual } from '../constants';

const Examples = () => (
  <div>
    <div className='flex flex-col items-center'>
      <h1 className='font-montserrat font-semibold text-[32px] leading-10'> Visualizing your day</h1>
      <div className='m-auto py-16 px-4 relative'>
        <div style={{backgroundImage: `url(${dayVisual[1].img})`}} className='block h-full w-full rounded-xl bg-center bg-cover duration-500'></div>
      </div>
    </div>
  </div>
)


export default Examples