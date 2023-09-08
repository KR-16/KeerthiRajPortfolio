import React from 'react'
import OPENCV from '../assets/opencv.png'
import FIREBASE from '../assets/firebase.png'
import GITHUB from '../assets/github.png'
import REACT from '../assets/react.png'
import TAILWINDCSS from '../assets/tailwind.png'
import JAVASCRIPT from '../assets/javascript.png'
import PYTHON from '../assets/python.png'
import MACHINELEARNING from '../assets/MachineLearning.png'
import MATLAB from '../assets/Matlab.png'
import MYSQL from '../assets/MySQL.png'
import AZURE from '../assets/azure.jpg'
import ANACONDA from '../assets/Anaconda.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-auto pb-6 bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='sm:text-left text-2xl px-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fd726d]'>
                    Skills
                </p>
                <p className='text-justify py-4'>
                I am a passionate professional proficient in web development and data science. 
                My strong foundation in Python, C, Java, and Machine Learning enables me to build robust applications with intelligent algorithms. 
                With expertise in MySQL, OpenCV, Raspberry Pi, and Flask, I tackle diverse projects from embedded systems to web applications. 
                Through my portfolio, I showcase innovative work and dedication to delivering exceptional tech solutions.
                </p>
            </div>
            {/* container for all icons */}
            <div className='skills-list-container'>
                <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img className='mx-auto' src={OPENCV} alt="OPENCV icon" width={100} height={100}/>
                            <p className='py-4'>
                                OPENCV
                            </p>
                        </div>
                    </div>
                    {/* <div> */}
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={FIREBASE} alt="FIREBASE icon" width={100} height={100}/>
                            <p className='py-4'>
                                FIREBASE
                            </p>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={GITHUB} alt="GITHUB icon" width={100} height={100}/>
                            <p className='py-4'>
                                GITHUB
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={REACT} alt="REACT icon" width={100} height={100}/>
                            <p className='py-4'>
                                REACT
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={TAILWINDCSS} alt="TAILWINDCSS icon" width={100} height={100}/>
                            <p className='py-4'>
                                TAILWINDCSS
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon" width={100} height={100}/>
                            <p className='py-4'>
                                JAVASCRIPT
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={PYTHON} alt="PYTHON icon" width={100} height={100}/>
                            <p className='py-4'>
                                PYTHON
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={MACHINELEARNING} alt="MACHINE LEARNING icon" width={100} height={100}/>
                            <p className='py-4'>
                                MACHINE LEARNING
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={MATLAB} alt="FIREBASE icon" width={100} height={100}/>
                            <p className='py-4'>
                                MATLAB
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={MYSQL} alt="FIREBASE icon" width={100} height={100}/>
                            <p className='py-4'>
                                MYSQL
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={AZURE} alt="FIREBASE icon" width={100} height={100}/>
                            <p className='py-4'>
                                AZURE
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md shadow-[#0f0507] hover:scale-110 duration-300'>
                        <div className='flex flex-col items-center'>
                            <img classname='mx-auto' src={ANACONDA} alt="FIREBASE icon" width={100} height={100}/>
                            <p className='py-4'>
                                ANACONDA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills