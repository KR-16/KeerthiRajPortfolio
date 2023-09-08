import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-auto pb-6 bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          {/* container */}
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-10 pl-4'>
              <div>
                  <p className='text-4xl font-bold inline border-b-4 border-[#fd726d]'>About</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-left text-2xl px-4'>
              <p className='text-justify'>
              Currently pursuing my Master's degree in Computer Engineering at The University of Texas at Arlington, I am maintaining an impressive GPA of 4.0 and anticipate graduating in May 2024. 
              I thrive in collaborative environments and enjoy working in groups.
              Looking forward, I am excited to embark on a challenging career and leverage opportunities that allow me to expand my skill set.
              With my dedication and commitment, I am confident in my ability to make significant contributions to the growth and success of your company.
              Thank you for taking the time to visit my website. 
              Feel free to connect with me on LinkedIn or reach out via email using the contact form.
              </p>
            </div>
            <div className='sm:text-right text-2xl px-4'>
              <p className='text-justify'>
                Reliable Intern studying in Computer Engineering domain seeks an opportunity to expand skills and gain valuable real-world experience. 
                Driven student leveraging studies in Computer Engineering and Data Science domain seeks real-world experience. 
                Offers strong interpersonal and task prioritization skills.
                I have a strong passion for data science and a keen interest in software engineering. 
              </p>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default About;