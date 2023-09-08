import React from 'react'

const Education = () => {
  return (
    <div name='education' className='w-full h-auto pb-6 bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          {/* container */}
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-10 pl-4'>
              <div>
                  <p className='text-4xl font-bold inline border-b-4 border-[#fd726d]'>Education</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-2'>
            <div className='sm:text-left text-2xl px-4'>
              <p className='text-justify font-bold pb-2'>
              Masters In Computer Engineering - The University of Texas At Arlington, Texas, USA
              </p>
              <p className='text-justify font-bold'>
              GPA – 4.0/4.0
              </p>
              <p className='text-justify font-bold'>
              08/2022 - 05/2024
              </p>
            </div>
            <div className='sm:text-right text-2xl px-4'>
              <p className='text-justify font-bold pb-2'>
              Bachelors In Computer Engineering And Data Science - Presidency University, India
              </p>
              <p className='text-justify font-bold'>
              GPA – 3.96/4.0
              </p>
              <p className='text-justify font-bold'>
              08/2019 – 06/2023
              </p>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Education;