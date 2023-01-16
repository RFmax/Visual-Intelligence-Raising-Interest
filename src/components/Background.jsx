import React from 'react'
import { charlesjosephminard, florencenightingale, mortalitydiagram, napoleonflowmap } from '../assets'

const Background = () => (
    <div className='flex flex-col w-full'>
        <div className='flex flex-row items-start justify-between py-10 mt-10'>
            <div className='flex flex-col justify-start mt-12'>
                <h1 className="flex-1 font-montserrat font-bold text-[64px] text-gradient leading-[75px]">Background</h1>
                <p className='font-montserrat font-normal text-[18px] leading-normal max-w-[650px] mt-8'>Although data visualization is a 
                trending sector and field of knowledge in our days, its origins come from centuries ago, when not even computers or Internet existed. 
                Primitive illustrations come from the first human beings, but it was on the 19th century when exceptional people created out of the ordinary visuals that look as the basis of today's 
                data visualizations and dashboards. <br className='sm:block hidden'/>By hand drawing and with simple stationery, impressive visualizations for their respective  historical moment were created. 
                Two well-known cases are: </p>
            </div>
            <div className='flex justify-end w-[600px] h-[600px] bg-[red]'>
                <p>IMAGE PLACEHOLDER?</p>
            </div>
        </div>

        <div className='flex flex-row items-start py-6 mt-12' >
            <div className='flex flex-col max w-[650px]'>
                <div className='flex flex-col items-start '>
                    <img src={charlesjosephminard} alt="minard" className='w-[100px] h-[140px] ml-10'/>
                    <h2 className='font-montserrat font-normal text-[16px] text-center mt-4'>Charles Joseph Minard <br /> (1781-1870)</h2>
                </div>
                <div>
                    <h2 className='font-montserrat font-semibold text-[32px] text-gradient leading-[64px]'>Minard's Map</h2>
                    <p className='font-montserrat font-normal text-[18px] leading-normal mt-2'>
                        “Carte figurative des pertes successives en hommes de 
                        l'Armée Française dans la campagne de Russie 1812-1813”
                        a poignant flow-map depiction of the fate of Napoleon's 
                        Grand Army in the Russian campaign of 1812. By Charles 
                        Joseph Minard, a true pioneer in thematic cartography 
                        and in statistical graphics.</p>
                </div>
            </div>
            <div className='flex flex-1 justify-end'>
                <img src={napoleonflowmap} alt="napoleonflowmap" className='w-[850px] h-[400px] rounded-xl' />
            </div>
        </div>

        <div className='flex flex-row items-start mt-[100px] py-6' >
            <div className='flex flex-1 justify-start'>
                <img src={mortalitydiagram} alt="mortalitydiagram" className='w-[850px] h-[400px] rounded-xl' />
            </div>

            <div className='flex flex-col max w-[650px] items-end'>
                <div className='flex flex-col items-center '>
                    <img src={florencenightingale} alt="florence" className='w-[100px] h-[140px]'/>
                    <h2 className='font-montserrat font-normal text-[16px] mt-4 text-center'>Florence Nightingale <br /> (1820-1910)</h2>
                </div>
                <div className='flex flex-col items-end'>
                    <h2 className='font-montserrat font-semibold text-[32px] text-gradient leading-[64px]'>Nightingale's Diagram</h2>
                    <p className='font-montserrat font-normal text-[18px] leading-normal mt-5 text-right'>
                    "Diagram of the causes of mortality in the army in the East" (1858): 
                    a colored pie chart to illustrate causes of death in the British Army. 
                    By Florence Nightingale, known as the founder of modern nursing and also a 
                    passionate statistician and a pioneer in statistical graphics.</p>
                </div>
            </div>

        </div>
    </div>
)


export default Background