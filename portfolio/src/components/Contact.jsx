// import React from 'react'

// const Contact = () => {
//   return (
//     <div name='contact' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
//         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <form action="https://getform.io/f/79bb3bb0-52d3-4126-85c5-8596fe35e3bd" method='POST' className='flex flex-col max-w-[600px] h-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-[#fd726d] text-gray-300'>Contact</p>
//                 <p className='py-6'>Submit the form or email to keerthirajkv2@gmail.com</p>
//             </div>
//             <input className="my-4 p-2 bg-[#fd726d] placeholder-[#f9f6f6] text-black" type="text" placeholder='Name' name='name'/>
//             <input className="my-4 p-2 bg-[#fd726d] placeholder-[#f9f6f6] text-black" type="text" placeholder='Email' name='email'/>
//             <textarea className="my-4 p-2 bg-[#fd726d] placeholder-[#f9f6f6] text-black" name="message" rows="10" placeholder='Your Message'></textarea>
//             <button className='text-white border-2 hover:bg-[#fd726d] hover:border-[#fd726d] px-4 py-2 my-8 mx-auto flex items-center'>Let's Connect</button>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default Contact

import React from 'react';
import ProfilePic from '../assets/profilepic.jpeg'; // Replace with the actual URL of your profile picture
// import Resume from './your-resume.pdf'; // Replace with the actual URL of your resume

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col md:flex-row w-full h-full'>
        {/* Contact Form */}
        <div className='flex flex-col md:w-1/2 md:mr-8 h-full'>
          <div className='pb-2'>
            <p className='text-4xl font-bold inline border-b-4 border-[#fd726d] text-gray-300'>Contact</p>
            <p className='py-2'>Submit the form or email to keerthirajkv2@gmail.com</p>
          </div>
          <form
            action="https://getform.io/f/79bb3bb0-52d3-4126-85c5-8596fe35e3bd" // <-- Replace with your Google Form submission URL
            method='POST'
            className='flex flex-col flex-shrink-0'>
            <input className="my-4 p-2 bg-[#fd726d] placeholder-[#f9f6f6] text-black" type="text" placeholder='Name' name='name' />
            <input className="my-4 p-2 bg-[#fd726d] placeholder-[#f9f6f6] text-black" type="text" placeholder='Email' name='email' />
            <textarea className="my-4 p-2 bg-[#fd726d] placeholder-[#f9f6f6] text-black" name="message" rows="10" placeholder='Your Message'></textarea>
            <button className='text-white border-2 hover:bg-[#fd726d] hover:border-[#fd726d] px-4 py-2 my-4 flex items-center'>Let's Connect</button>
          </form>
        </div>

        {/* Profile Picture */}
        <div className='flex flex-col md:w-1/2 md:ml-8'>
          <div className='flex justify-center items-center my-10'>
            <img src={ProfilePic} alt='Profile Pic' className='w-40 h-25 rounded my-24' /> {/* Adjust the width and height accordingly */}
          </div>
          <div className='flex justify-center items-center'>
            <a href="https://github.com/KR-16/Resume/blob/main/Keerthi%20Raj%20Resume.pdf" target="_blank" rel='noopener noreferrer' download>
              <button className='text-white border-2 hover:bg-[#fd726d] hover:border-[#fd726d] px-6 py-2 flex items-center'>Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

