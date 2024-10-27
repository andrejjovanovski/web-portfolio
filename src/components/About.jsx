import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const About = () => {
    return (
        <div name='about' className='w-full h-screen snap-start bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='md:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
                    <div className='md:text-right font-bold text-4xl'>
                        <p>Hi, I'm Andrej, nice to meet you. Please take a moment to review what I have to offer.</p>
                    </div>
                    <div>
                        <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?   </p>
                    </div>
                </div>
                <div className='mt-4 md:hidden w-full px-4'>
                    <p className='inline text-center border-b-2 border-gray-600 font-semibold'>Check me out on:</p>
                    <ul className='flex mt-3'>
                        <li>
                            <a className='flex justify-between items-center w-full text-gray-300'
                                href="https://www.linkedin.com/in/andrej-jovanovski-20b7231ab/" target='_blank'>
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li>
                            <a className='flex justify-between items-center w-full text-gray-300'
                                href="https://github.com/andrejjovanovski" target='_blank'>
                                <FaGithub size={30} />
                            </a>
                        </li>
                        <li>
                            <a className='flex justify-between items-center w-full text-gray-300'
                                href="mailto:andrejjovanovski17@gmail.com">
                                <HiOutlineMail size={30} />
                            </a>
                        </li>
                        <li>
                            <a className='flex justify-between items-center w-full text-gray-300'
                                href="https://drive.google.com/file/d/1_nZnA1L1pS6ITqEUOlh2GtAtHvAX4pOG/view" target='_blank'>
                                <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About