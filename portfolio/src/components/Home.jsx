import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import {Link} from "react-scroll"

export const Home = () => {
  return (
    // We will use the name='home' property for react smooth scroll
    <div name='home' className='w-full h-auto pb-6 bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-[#fd726d] inline-flex justify-center text-5xl font-bold pb-4 pt-20'>
                Welcome to My Portfolio 😀
            </h1>
            <p className= 'text-[#fd726d] inline-flex justify-center text-6xl font-bold pb-6'>
                KEERTHI RAJ VASIREDDY YUVARAJ
            </p>
            <p className = 'text-2xl sm:text-3xl justify-center font-bold text-[#fbfcf8] pb-4'>
                Computer Science Graduate specializing in Software Engineering and Data Science
            </p>
            <p className='text-xl sm:text-2xl justify-center font-bold text-[#fbfcf8] pb-4'>
                Feel free to explore my work and get in touch with me for any inquiries or collaboration opportunities using the contact form
            </p>
            <div className='flex justify-center'>
            <Link to="experience" smooth={true} offset={50} duration={1000}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#fd726d] hover:border-[#fd726d] rounded-sm'>
                View Work
                    <span className='group-hover:rotate-90 duration-500'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Home