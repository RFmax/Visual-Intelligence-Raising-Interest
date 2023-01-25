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
      
{/* PowerBI Dashboard Component */}
    <div className='flex flex-col items-center py-6'>
      <h2 className='font-montserrat font-semibold text-[32px] text-gradient leading-10'>PowerBI</h2>
      <PowerBIEmbed
        embedConfig = {{
          type: 'report',   // Supported types: report, dashboard, tile, visual and qna
          id: 'cc50d03c-f852-47fe-a7dd-b8683949fa62',
          embedUrl: '',
          accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOGUxZGZlZTItOTc3YS00MzhjLWIzNWUtZjViNmRhODRhMTc0LyIsImlhdCI6MTY3NDYzNjkwNiwibmJmIjoxNjc0NjM2OTA2LCJleHAiOjE2NzQ2NDIzMjgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFzOVZUcDlBbTJZK1RhSEZYTlJ1OVNCN2pOUEVJYk12c05MREVFa3FxZTcxWUE1MHBKVVEvQ1RmdGp3RjQ0Q25XZUpFYTRGZktCTHJIejFDNVFmbkdkSEpyeEJwZjhIUncweEF5VSs0TGhuWT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJIZWlqbm5lbWFuIiwiZ2l2ZW5fbmFtZSI6IlJvbWFuZG8iLCJpcGFkZHIiOiIxNDUuMjAuMTYuMTQ2IiwibmFtZSI6IkhlaWpubmVtYW4sIFJvbWFuZG8gKDIwNjUxMjUpIiwib2lkIjoiYjM1MTY1MDYtM2EyOC00NTQ3LWE1ZGUtZDA4MmQ2OTZjNzdkIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEzMjQ4Nzg3NDItMTk0OTMxODUwNC0xMjIzMDU4MDk2LTI2MDAwNyIsInB1aWQiOiIxMDAzMjAwMEI3OUQ1OEZBIiwicmgiOiIwLkFTOEE0djRkam5xWGpFT3pYdlcyMm9TaGRBa0FBQUFBQUFBQXdBQUFBQUFBQUFDd0FMUS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJGNHdLaDhHb2pQNGg1amFBTVVlUDZxMHd2MXFKVGRwOTM2SFNjQktEanpvIiwidGlkIjoiOGUxZGZlZTItOTc3YS00MzhjLWIzNWUtZjViNmRhODRhMTc0IiwidW5pcXVlX25hbWUiOiIyMDY1MTI1aGVpam5uZW1hbkB6dXlkLm5sIiwidXBuIjoiMjA2NTEyNWhlaWpubmVtYW5AenV5ZC5ubCIsInV0aSI6IlktUkZaUnJIYmsyM1VIS0pwcHNGQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.FrvmozwirEiA6TV06b6Y8BBtE9O-ZTdntgcqVN_zbUGofu7m39DT2XdeRf9M7tAKR8pIR-45IEFrtd4JAA8W-XKH70yvoXYWCTFui0ca52QjoKzgiTQyVbt83bGe0_-A6eML1e18CpvElcLlGncyLFFjEOU8ai9L0nlAjErMm8S-P0OeLlsl87-GTH0NOwj2wE528Tc1ZI8dXEDIHDKsbhWXBpkKbzxtFHRinOgdcowQsufoEoLKaKjxDvFGRic-pW7i-owC4QNY02GBGJtvgNOz2wXxlr8AIKimTyF2VRHOftdc1O236stDBkz6IZI8T-iaKMfIZYqOa0T9v1x5JA',
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