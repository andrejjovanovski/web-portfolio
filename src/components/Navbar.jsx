import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            {/* logo */}
            <a href="">
                <div>
                    <img src={logo} alt="Loog image" style={{ width: '100px' }} />
                </div>
            </a>


            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>


            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile-menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            {/* social-icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-lg'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/andrej-jovanovski-20b7231ab/" target='_blank'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-lg'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/andrejjovanovski" target='_blank'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500 rounded-lg'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="mailto:andrejjovanovski17@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400 rounded-lg'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://drive.google.com/file/d/1IPxbSNQWFLTwhrBjJ46nilJS2jGCvDDJ/view?usp=sharing" target='_blank'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Navbar
