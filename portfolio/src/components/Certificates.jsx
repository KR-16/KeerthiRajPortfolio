import React from 'react'
import CERTIFICATES from '../assets/Certificates.png'
const Certificates = () => {
  return (
    <div name='certificates' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='sm:text-left text-2xl px-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fd726d] text-gray-300'>Certificates</p>
                <p className='text-justify py-4'>
                Welcome to my portfolio's Certificate Section, where I proudly display my dedication to lifelong study and professional advancement.
                You may discover a selection of my credentials and certificates here, which demonstrate my commitment to keeping at the top of my industry.
                These credentials are more than simply pieces of paper; they stand for my continual journey to learn new abilities.
                Explore this area to learn more about the many certifications that have formed my knowledge and skills and how they affect my capacity to address problems and come up with novel solutions.
                </p>
            </div>

            {/* Grid Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-6 gap-1'>
                {/* Grid Car Price Card Item */}
                <div style={{backgroundImage:`url(${CERTIFICATES})`, backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-center text-white'>
                            ADVANCED PYTHON
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/KR-16/Documents/blob/main/Certificates/Advanced%20Python%20VAC.pdf" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CERTIFICATE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Car Price Card Item */}
                <div style={{backgroundImage:`url(${CERTIFICATES})`,backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white text-center'>
                            DATA STRUCTURES
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/KR-16/Documents/blob/main/Certificates/Data%20Structures.pdf" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CERTIFICATE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Car Price Card Item */}
                <div style={{backgroundImage:`url(${CERTIFICATES})`, backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white text-center'>
                            MACHINE LEARNING
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/KR-16/Documents/blob/main/Certificates/Fundamentals%20of%20Machine%20Learning%20VAC%20certificate.pdf" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CERTIFICATE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${CERTIFICATES})`, backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white text-center'>
                            COMPUTER VISION
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/KR-16/Documents/blob/main/Certificates/Introduction%20to%20OpenCV%20VAC.pdf" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CERTIFICATE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${CERTIFICATES})`, backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white text-center'>
                            MATLAB BASICS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/KR-16/Documents/blob/main/Certificates/MATLAB%20BASICS.pdf" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CERTIFICATE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${CERTIFICATES})`, backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white text-center'>
                            R PROGRAMMING
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/KR-16/Documents/blob/main/Certificates/R%20Programming%20VAC%20Certificate.pdf" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CERTIFICATE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default Certificates;