import React from 'react'
import { charlesjosephminard, florencenightingale, history_banner, mortalitydiagram, napoleonflowmap } from '../assets'

const Background = () => (
    <div className='flex flex-col w-full'>
        <div className='flex flex-row max-sm:flex-col items-start justify-between py-10 mt-10 z-1 max-sm:mt-0 max-sm:py-1'>
            <div className='flex flex-col justify-start items-center mt-[150px] bg-secondary p-6 rounded-l-2xl'>
                <h1 className="flex-1 font-montserrat font-bold text-[64px] text-black leading-[75px]">History</h1>
                <p className='font-montserrat font-normal text-[18px] leading-normal max-w-[800px] mt-8 text-center'>
                Although data visualization is a trending sector and field of knowledge in our days, its origins 
                date back to centuries ago, when computers or internet did not exist yet. Primitive illustrations 
                come from the first human beings, but it was in the 19th century when exceptional people started 
                creating visuals that are the basis of modern data visualizations and dashboards. By hand drawing 
                and with simple stationery, impressive visualizations for their respective historical moment were 
                created. Two well-known cases are: 
                 </p>
            </div>
            <div>
                <img src={history_banner} alt="banner" className='rounded-xl object-contain z-0 shadow-xl w-[850px] h-[650px]' />
            </div>
        </div>

        <div className='flex flex-row max-sm:flex-col justify-evenly py-6 mt-12' >
            <div className='flex flex-col'>
                <div className='flex flex-col items-center p-6 '>
                    <img src={charlesjosephminard} alt="minard" className='w-[100px] h-[140px] object-contain'/>
                    <h2 className='font-montserrat font-normal text-[16px] text-center mt-4'>Charles Joseph Minard <br /> (1781-1870)</h2>
                </div>
                <div className='bg-secondary p-6 rounded-l-2xl'>
                    <h2 className='font-montserrat font-semibold text-[32px] text-gradient leading-[64px]'>Minard's Map</h2>
                    <p className='font-montserrat font-normal text-[18px] leading-normal mt-2 text-justify max-w-[650px]'>
                        “Carte figurative des pertes successives en hommes de 
                        l'Armée Française dans la campagne de Russie 1812-1813”
                        a poignant flow-map depiction of the fate of Napoleon's 
                        Grand Army in the Russian campaign of 1812. By Charles 
                        Joseph Minard, a true pioneer in thematic cartography 
                        and in statistical graphics.</p>
                </div>
            </div>
            <div>
                <img src={napoleonflowmap} alt="napoleonflowmap" className='w-[900px] h-[430px] rounded-xl object-contain shadow-xl mt-[100px]' />
            </div>
        </div>

        <div className='flex flex-row max-sm:flex-col items-start mt-[100px] py-6' >
            <div className='flex justify-start'>
                <img src={mortalitydiagram} alt="mortalitydiagram" className='w-[900px] h-[570px] rounded-xl object-contain shadow-xl' />
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center p-6 '>
                    <img src={florencenightingale} alt="florence" className='w-[100px] h-[140px]'/>
                    <h2 className='font-montserrat font-normal text-[16px] mt-4 text-center'>Florence Nightingale <br /> (1820-1910)</h2>
                </div>
                <div className='flex flex-col items-end p-6 bg-secondary rounded-r-2xl'>
                    <h2 className='font-montserrat font-semibold text-[32px] text-black leading-[64px]'>Nightingale's Diagram</h2>
                    <p className='font-montserrat font-normal text-[18px] leading-normal mt-5 text-justify max-w-[600px]'>
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