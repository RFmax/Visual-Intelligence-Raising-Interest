import React from 'react'
import { useState } from 'react';
import { relationship_visuals } from '../constants';
import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';

const Relationship = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? relationship_visuals.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLast = currentIndex === relationship_visuals.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

return (
  <section className='my-[100px]'>
    <div className='flex flex-row max-sm:flex-col justify-between'>
      <div className='flex flex-col justify-start bg-secondary p-6 my-[100px] rounded-l-2xl'>
        <h2 className='font-montserrat font-semibold text-[38px] mb-[50px]'>
        <span className='text-black'>Relationship With </span><span className='text-tertiary'>Other Fields</span> </h2>
        <p className='font-montserrat font-normal text-[18px] leading-normal max-w-[651px] text-justify'>
        Data visualizations can be applied everywhere: for any type of business results and 
        strategies, news, historical records, maps… Some are interactive and dynamic; others 
        are static and just informative. <br /> <br /> But all of them contribute to transmit a clearer 
        message to the audience. Here are displayed some real examples that can help you 
        notice how commonly and widely they are used.</p>
      </div>

      <div className='flex flex-col max-w-[900px] h-[650px] w-full relative group shadow-xl rounded-3xl z-[0]'>
        <div style={{backgroundImage: `url(${relationship_visuals[currentIndex].img})`}} className='w-full h-full rounded-xl bg-center bg-contain bg-no-repeat duration-500'></div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-2xl p-2 bg-black/20 text-white cursor-pointer'>
          <MdArrowBackIos onClick={prevSlide} size={40} /></div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-2xl p-2 bg-black/20 text-white cursor-pointer'>
          <MdArrowForwardIos onClick={nextSlide} size={40} /></div>
      </div>

    </div>
  </section>
  )
}

export default Relationship