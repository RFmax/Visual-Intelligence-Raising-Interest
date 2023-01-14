import React from 'react'

const Review = ( {content, name, title, img }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 my-5 feedback-card'>
        <p className='font-montserrat font-normal text-[18px] my-10'>{content}</p>
        <div className='flex flex-row'>
            <img src={img} alt="imgs" className='w-[48px] h-[48px] rounded-sm' /> 
            <div className='flex flex-col ml-4'>
                <h4 className='font-montserrat font-medium text-[20px] leading-[32px]'>{name}</h4>
                <p className='font-montserrat font-normal text-[16px] leading-[24px]'>{title}</p>
            </div>
        </div>
    </div>
)


export default Review