import React from 'react';
import { ImQuotesLeft } from 'react-icons/im'

const Review = ( {content, name, title, img }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-[100px] my-10 feedback-card'>
        <ImQuotesLeft size={20} />
        <p className='font-montserrat font-normal text-[18px] my-10'>{content}</p>
        <div className='flex flex-row'>
            <img src={img} alt="imgs" className='w-[48px] h-[48px] rounded-sm mt-1' /> 
            <div className='flex flex-col ml-4'>
                <h4 className='font-montserrat font-semibold text-[18px] leading-[32px]'>{name}</h4>
                <p className='font-montserrat font-normal text-[14px] leading-[20px]'>{title}</p>
            </div>
        </div>
    </div>
)


export default Review