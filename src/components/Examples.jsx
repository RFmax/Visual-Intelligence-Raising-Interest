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
      
{/* PowerBI Dashboard Component */}
    <div className='flex flex-col items-center py-6'>
      <h2 className='font-montserrat font-semibold text-[32px] text-gradient leading-10'>PowerBI</h2>
      <PowerBIEmbed
        embedConfig = {{
          type: 'report',   // Supported types: report, dashboard, tile, visual and qna
          id: 'cc50d03c-f852-47fe-a7dd-b8683949fa62',
          embedUrl: '',
          accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOGUxZGZlZTItOTc3YS00MzhjLWIzNWUtZjViNmRhODRhMTc0LyIsImlhdCI6MTY3NDIyNzg3MCwibmJmIjoxNjc0MjI3ODcwLCJleHAiOjE2NzQyMzMzNTMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFFODdkdmlZSlhCNEZTR0MxUVE1MUJrR3JBS2drWVFiSVZwN0kxdHlnUUk5UkU1Z2lvOGdKNDgyVS91cnhlZmhFSThKUzBYK0JJbUx5UERjeU9INHp1MENqVEIrTnlha1dZTGR2SUMvZkFMMD0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJIZWlqbm5lbWFuIiwiZ2l2ZW5fbmFtZSI6IlJvbWFuZG8iLCJpcGFkZHIiOiI5NC4yMTEuMTg5LjE4NCIsIm5hbWUiOiJIZWlqbm5lbWFuLCBSb21hbmRvICgyMDY1MTI1KSIsIm9pZCI6ImIzNTE2NTA2LTNhMjgtNDU0Ny1hNWRlLWQwODJkNjk2Yzc3ZCIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xMzI0ODc4NzQyLTE5NDkzMTg1MDQtMTIyMzA1ODA5Ni0yNjAwMDciLCJwdWlkIjoiMTAwMzIwMDBCNzlENThGQSIsInJoIjoiMC5BUzhBNHY0ZGpucVhqRU96WHZXMjJvU2hkQWtBQUFBQUFBQUF3QUFBQUFBQUFBQ3dBTFEuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiRjR3S2g4R29qUDRoNWphQU1VZVA2cTB3djFxSlRkcDkzNkhTY0JLRGp6byIsInRpZCI6IjhlMWRmZWUyLTk3N2EtNDM4Yy1iMzVlLWY1YjZkYTg0YTE3NCIsInVuaXF1ZV9uYW1lIjoiMjA2NTEyNWhlaWpubmVtYW5AenV5ZC5ubCIsInVwbiI6IjIwNjUxMjVoZWlqbm5lbWFuQHp1eWQubmwiLCJ1dGkiOiJDNk5Pam9WbXlrYVRDVlRQcVB4OUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.CZggetVVMLNYkCJbb7mfCJCse_rlv-ocu0W_sBFczGQOekehlkSQvxOx-0s3KCNrYbI6VoQd9vg9h9msH9CS_UamTh7AFsjt1cXAfbtiD7boFDl1mC_GethDh2miSxBHgTQFL4o2dSX8gBd5ZJc8kb2ETSlvfZaWT72VGX53O7ZKe79FMsUD_UR9jaSEVjVJXOYJbIQAXBN1gJCH3x4dIWiYQkHaa-Zd8uQwrpKJDNvfCK-ISZbwGGxQ-t89DKK1QGdvCtOwTeCIXF7nZlG3WCgo1UVltmG9TN8JS39ZEWBfu8HeraxYn-1dKtLr68LwtpAWXMCGc0yw8YLXFsqwAw',
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