import React from 'react';
import { useState } from 'react';
import { dayVisual } from '../constants';
import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

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
    <div className='flex flex-col items-center z-[0]'>
      <h1 className='font-montserrat font-semibold text-[32px] text-black pt-6'> Visualizing your day </h1>
      <div className='flex flex-col max-w-[1200px] h-[750px] w-full relative group rounded'>
        <div style={{backgroundImage: `url(${dayVisual[currentIndex].img})`}} className='w-full h-full bg-center bg-contain bg-no-repeat duration-500 rounded-2xl'></div>
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
      
{/* PowerBI Dashboard Component */}
    <div className='flex flex-col items-center py-6 w-[1200px] h-[750px]'>
      <h2 className='font-montserrat font-semibold text-[32px] text-black leading-[64px]'>PowerBI</h2>
      <PowerBIEmbed
        embedConfig = {{
          type: 'report',   // Supported types: report, dashboard, tile, visual and qna
          id: '',
          embedUrl: '',
          accessToken: '',
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}

        eventHandlers = { 
          new Map([
            ['loaded', function () {console.log('Report loaded');}],
            ['rendered', function () {console.log('Report rendered');}],
            ['error', function (event) {console.log(event.detail);}]
          ])
        }
          
        cssClassName = { "report-style-class" }

        getEmbeddedComponent = { (embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  </div>
  )
}
  

export default Examples