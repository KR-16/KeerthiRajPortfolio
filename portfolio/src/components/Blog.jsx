import React from 'react'
import ART from '../assets/art-1.jpg'
import TITANIC from '../assets/titanic.jpg'
import FLOWERS from '../assets/Flowers.png'
import NAIVEBAYES from '../assets/naivebayesintro.png'

const Blog = () => {
  return (
    <div name='blog' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='sm:text-left text-2xl px-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fd726d] text-gray-300'>Blog</p>
                <p className='text-justify py-4'>
                Welcome to my blog section, where I showcase a diverse range of impactful endeavors.
                </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                {/* Grid Car Price Card Item */}
                <div style={{backgroundImage:`url(${ART})`,backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ART STROKES
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://rstrokes.art.blog/" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    BLOG
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${TITANIC})`,backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            TITANIC DATASET
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://medium.com/@keerthirajkv2/titanic-machine-learning-from-disaster-9474cda71c0d" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    BLOG
                                </button>
                            </a>
                            <a href="https://github.com/KR-16/Titanic_CSE5334/blob/main/titanic_model.ipynb" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CODE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${FLOWERS})`,backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            FLOWERS CLASSIFICATION - TPU
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://medium.com/@keerthirajkv2/petal-flowers-classification-with-using-tpu-c73f31943d09" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    BLOG
                                </button>
                            </a>
                            <a href="https://github.com/KR-16/FlowersClassification/blob/main/VGG%20-19%20Model%20331%20Resolution.ipynb" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    CODE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${NAIVEBAYES})`,backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'}} 
                className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            TEXT DETECTION - AI / HUMAN
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://medium.com/@keerthirajkv2/unmasking-the-writers-a-dive-into-detecting-language-models-vs-8f910963bbf5" target='_blank' rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-gray-500 font-bold text-lg'>
                                    BLOG
                                </button>
                            </a>
                            <a href="https://github.com/KR-16/NAIVE-BAYES-CLASSIFIER/blob/master/model1.ipynb" target='_blank' rel="noopener noreferrer">
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

export default Blog