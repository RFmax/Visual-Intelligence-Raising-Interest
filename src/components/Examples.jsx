import React from 'react';
import { useState } from 'react';
import { dayVisual } from '../constants';
import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';

const Examples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? dayVisual.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLast = currentIndex === dayVisual.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToVisual = (visualIndex) => {
    setCurrentIndex(visualIndex);
  }
  
  return (
  <div className='flex flex-col items-center'>
    <h1 className='font-montserrat font-semibold text-[32px] text-gradient pt-6'> Visualizing your day </h1>
    <div className='flex flex-col max-w-[1200px] h-[750px] w-full relative group'>
      <div style={{backgroundImage: `url(${dayVisual[currentIndex].img})`}} className='w-full h-full rounded-xl bg-center bg-contain bg-no-repeat duration-500'></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-2xl p-2 bg-black/20 text-white cursor-pointer'>
        <MdArrowBackIos onClick={prevSlide} size={40} /> </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-2xl p-2 bg-black/20 text-white cursor-pointer'>
        <MdArrowForwardIos onClick={nextSlide} size={40} /> </div>
    </div>
    <div className='flex top-4 justify-center py-2'>
      {dayVisual.map((visual, visualIndex) => (
        <div key={visualIndex} onClick={() => goToVisual(visualIndex)} className='text-2xl cursor-pointer'><RxDotFilled /></div>
      ))}
    </div>

    <div className='flex flex-col items-center py-6'>
      <h2 className='font-montserrat font-semibold text-[32px] text-gradient leading-10'>PowerBI</h2>
      <div className='w-[1000px] h-[600px] bg-[red]'>PLACEHOLDER</div>
    </div>

  </div>
  )
}
  

export default Examples