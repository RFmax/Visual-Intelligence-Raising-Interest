import React from 'react'
import { diagram } from '../assets'

const Application = () => (
  <section>
    <div className='flex flex-row max-sm:flex-col w-full items-start justify-between'>
      <div className='flex justify-start mt-[80px]'>
        <img src={diagram} alt="diagram" className="w-[955px] h-[580px] object-contain shadow-xl rounded-3xl z-[0]"  />
      </div>
      
      <div className='flex flex-col justify-end mt-[100px] bg-secondary p-6 rounded-r-2xl z-[1]'>
        <h1 className="font-montserrat font-bold text-[38px] max-sm:text-[40px] leading-[75px]"> <span className='text-black'> What is </span><span className='text-[#FFD700]'>  Visual Intelligence?</span> </h1>
        <p className='font-montserrat font-normal text-[18px] leading-normal max-w-[600px] mt-8 text-justify'>
        Visual Intelligence refers to a person's ability to perceive, analyse, and understand visual information in the world around them. 
        The essence covers that they can picture concepts with their mind's eyes.
        <br /> <br />
        It only takes humans 13 milliseconds to see an image, therefore by understanding 
        the neuroscience of the human brain one may understand why visual intelligence 
        may help businesses to speed up the decision-making process in the near future.
        Quickly accessing what you see, analysing your biases, articulating the pertinent 
        negative, and swiftly adapting to a new situation eases-up a lot of processes in daily-life 
        to eventually act on it in a quick way. 
        </p>
      </div>

    </div>
  </section>

  

)

  
export default Application