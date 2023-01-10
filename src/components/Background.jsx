import React from 'react'
import { napoleonflowmap } from '../assets'

const Background = () => (
    <div className='flex flex-col w-full'>
        <div className='flex flex-row w-full items-start'>
            <div className='flex flex-col justify-start mt-[100px]'>
                <h1 className="flex-1 font-montserrat font-bold text-[64px] text-gradient leading-[75px]">Background</h1>
                <p className='font-montserrat font-normal text-[18px] leading-normal max-w-[650px] mt-8'>Although data visualization is a 
                trending sector and field of knowledge in our days, its origins come from centuries ago, when not even computers or Internet existed. 
                Primitive illustrations come from the first human beings, but it was on the 19th century when exceptional people created out of the ordinary visuals that look as the basis of today's 
                data visualizations and dashboards. <br className='sm:block hidden'/>By hand drawing and with simple stationery, impressive visualizations for their respective  historical moment were created. 
                Two well-known cases are: </p>
            </div>
            <div className='flex flex-1 justify-end mt-[100px]'>
                <img src={napoleonflowmap} alt="napoleonflowmap" className='w-[75%] h-[75%]' />
            </div>
        </div>
    </div>
)


export default Background