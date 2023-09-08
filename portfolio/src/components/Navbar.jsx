import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../assets/logo.gif"
import {Link} from "react-scroll"

const Navbar = () => {
    // We call this to set the FaBar for the Mobile Menu
    const [nav, setNav] = useState(false) // default value = false
    // define a function handleClick()
    const handleClick = () => setNav(!nav) // !nav = false will set to true, if true will set to false
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth", duration:300})}>
                <img src={Logo} alt="Logo Gif" style={{width: "70px"}}/>
            </a>
        </div>
        {/* Menu */}
        {/* Unordered List*/}
            <ul className='hidden md:flex'>
                {/* List Items <li></li> */}
                <li>
                    <Link to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="education" smooth={true} offset={50} duration={500}>
                        Education
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="experience" smooth={true} offset={50} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="blog" smooth={true} offset={50} duration={500}>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="certificates" smooth={true} offset={50} duration={500}>
                        Certificates
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars/> : <FaTimes/>}
                </div>

                {/* Mobile Menu */}
                {/* We used the ternary operator 
                to set the FaBar, 
                if the screen size is less the mid, 
                then FaBar is set to True and onClick it will display the Menu */}
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    {/* List Items <li></li> */}
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                    </li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                    </li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="education" smooth={true} offset={50} duration={500}>
                        Education
                    </Link>
                    </li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                    </li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="experience" smooth={true} offset={50} duration={500}>
                        Projects
                    </Link>
                    </li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="blog" smooth={true} offset={50} duration={500}>
                        Blog
                    </Link>
                    </li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="certificates" smooth={true} offset={50} duration={500}>
                        Certificates
                    </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                    </li>
                </ul>
                {/* Social Icons */}
                <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                    <ul>
                        {/* LinkedIn */}
                        <li className='rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#0A66C2]'>
                            <a className='flex justify-between items-center w-full text-gray-30' href="https://www.linkedin.com/in/keerthi-raj-vasireddy-yuvaraj-95b49a203/" target="_blank" rel="noopener noreferrer">
                                LinkedIn <FaLinkedin size={35}/>
                            </a>
                        </li>
                        {/* GitHub */}
                        <li className='rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#000000]'>
                            <a className='flex justify-between items-center w-full text-white-300' href="https://github.com/KR-16" target="_blank" rel="noopener noreferrer">
                                GitHub <FaGithub size={35}/>
                            </a>
                        </li>
                        {/* Email */}
                        <li className='rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#1e0bcf]'>
                            <a className='flex justify-between items-center w-full text-gray-30' href="mailto:keerthirajkv2@gmail.com" target="_blank" rel="noopener noreferrer">
                                Email <HiOutlineMail size={35}/>
                            </a>
                        </li>

                        <li className='rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#485058]'>
                            <a className='flex justify-between items-center w-full text-gray-30' href="https://github.com/KR-16/Documents/blob/main/Resume/Keerthi%20Raj%20Resume.pdf" target="_blank" rel="noopener noreferrer">
                                Resume <BsFillPersonLinesFill size={35}/>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
  )
}

export default Navbar;