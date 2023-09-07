import React from 'react'
import CARPRICE from '../assets/carpriceprediction.png'
import IPHONE from '../assets/iphoneimage.jpg'
import REACT from "../assets/messageapplication.jpg"


const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='sm:text-left text-2xl px-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fd726d] text-gray-300'>Projects</p>
                <p className='text-justify py-4'>
                Welcome to my project section, where I showcase a diverse range of impactful endeavors. 
                From Car Price Prediction and iPhone Buyer Predictor, utilizing data science and machine learning for informed decision-making, to the Face Mask Detection system enhancing public safety during the pandemic, these projects reflect my passion for applying cutting-edge technologies to real-world challenges. 
                Additionally, I have crafted a dynamic Messaging System using ReactJS, facilitating seamless communication and fostering interactive conversations among users. 
                Through these projects, I aim to demonstrate my expertise in data science, machine learning, and web development, while showcasing my commitment to building practical solutions that enrich user experiences.
                </p>
            </div>

            {/* Grid Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Car Price Card Item */}
                <div style={{backgroundImage:`url(${CARPRICE})`, backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            CAR PRICE PREDICTION
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://carpricepredic.azurewebsites.net/" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    DEMO
                                </button>
                            </a>
                            <a href="https://github.com/KR-16/Car-Price-Prediction" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CODE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Car Price Card Item */}
                <div style={{backgroundImage:`url(${IPHONE})`, backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            IPHONE PRICE PREDICTION
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/KR-16/Iphone-Purchaser/blob/main/README.md#demo" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    DEMO
                                </button>
                            </a>
                            <a href="https://github.com/KR-16/Iphone-Purchaser" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CODE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Car Price Card Item */}
                <div style={{backgroundImage:`url(${REACT})`, backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            MESSAGING APPLICATION
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/KR-16/React-Message-Application/blob/main/README.md#demo" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    DEMO
                                </button>
                            </a>
                            <a href="https://github.com/KR-16/React-Message-Application" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CODE
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

export default Experience