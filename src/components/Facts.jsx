import React from 'react'
import { facts } from '../constants'

const Facts = () => (
    <section className=' flex flex-row max-sm:flex-col justify-center items-center flex-wrap mb-6'>
        {facts.map((fact) => (
            <div key={fact.id} className='flex-1 flex justify-start flex-col items-center mt-10'>
                <h3 className='font-montserrat font-semibold text-[24px] text-gradient uppercase text-center'>{fact.title}</h3>
                <p className='font-montserrat font-normal text-[18px] text-center'>{fact.value}</p>
            </div>
        ))}
    </section>
)


export default Facts