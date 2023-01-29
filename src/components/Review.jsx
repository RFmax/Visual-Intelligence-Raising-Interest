import React from 'react';
import { ImQuotesLeft } from 'react-icons/im'

const Review = ( {content, name, title, img }) => (
    <div className='flex justify-between flex-col px-8 py-12 rounded-[20px] h-[370px] mr-[25px] max-w-[370px] my-10 border-[1px] feedback-card'>
        <ImQuotesLeft size={20} />
        <p className='font-montserrat font-normal text-[18px] my-10'>{content}</p>
        <div className='flex flex-row'>
            <img src={img} alt="imgs" className='w-[48px] h-[48px] rounded-sm mt-1' /> 
            <div className='flex flex-col ml-4'>
                <h4 className='font-montserrat font-semibold text-[18px] leading-[28px] mt-2'>{name}</h4>
                <p className='font-montserrat font-light text-[14px] leading-[20px]'>{title}</p>
            </div>
        </div>
    </div>
)


export default Review