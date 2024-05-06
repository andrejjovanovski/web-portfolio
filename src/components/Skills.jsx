import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import reactLogo from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import PHP from '../assets/new-php-logo.png'
import SQL from '../assets/Sql_data_base_with_logo.png'
import Bootstrap from '../assets/Bootstrap_logo.svg'
import sass from '../assets/1280px-Sass_Logo_Color.svg.png'
import github from '../assets/github.png'


const Skills = () => {
    return (
        <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies that I have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={HTML} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={CSS} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Bootstrap} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={sass} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>Sass</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Tailwind} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={github} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>GIT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Javascript} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={reactLogo} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={PHP} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={SQL} alt="HTML icon" className='mx-auto w-20' />
                        <p className='py-4'>SQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills