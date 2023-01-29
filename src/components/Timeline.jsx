import React from 'react'

const Timeline = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col justify-center sm:py-12 shadow-lg w-[1000px] rounded-2xl mt-10">
        <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
            <h1 className='font-montserrat font-bold text-lg text-center mb-2'>Week</h1>
            <div className="relative text-gray-700 antialiased">
            <div className="hidden sm:block w-1 bg-tertiary absolute h-full left-1/2 transform -translate-x-1/2"></div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white rounded shadow hover:bg-tertiary">
                                <h2 className='font-montserrat font-semibold text-md leading-[32px]'>Intro to Visual Intelligence</h2>
                                <p className='font-montserrat font-normal text-sm'>You'll get an introduction to the subject and an overview of the course. + Hands-on VR / AR experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-full bg-secondary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <h2 className='font-montserrat font-bold'>1</h2>
                    </div>
                </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow hover:bg-tertiary">
                            <h2 className='font-montserrat font-semibold text-md leading-[32px]'>Physicalization Workshop</h2>
                            <p className='font-montserrat font-normal text-sm'>You'll get a workshop on data physicalizations.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-full bg-secondary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h2 className='font-montserrat font-bold'>2</h2>
                </div>
            </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow hover:bg-tertiary">
                            <h2 className='font-montserrat font-semibold text-md leading-[32px]'>Power BI Workshop</h2>
                            <p className='font-montserrat font-normal text-sm'>You'll get a workshop on data visualization with MS Power BI.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-full bg-secondary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h2 className='font-montserrat font-bold'>3</h2>
                </div>
            </div>
            </div>

            <div className="mt-6 sm:mt-0">
            <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow hover:bg-tertiary">
                            <h2 className='font-montserrat font-semibold text-md leading-[32px]'>Open Discussion's</h2>
                            <p className='font-montserrat font-normal text-sm'>Starting this week you'll be discussing your progress on the case.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-full bg-secondary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h2 className='font-montserrat font-bold'>4</h2>
                </div>
            </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Timeline