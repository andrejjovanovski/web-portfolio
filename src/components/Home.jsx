import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Andrej Jovanovski</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#81848d]'>I'm a Full Stack Web Developer.</h2>
                <p className='text-[#81848d] py-4 max-w-[700px]'>Welcome to my corner of the digital universe! I'm a passionate full-stack developer dedicated to crafting seamless, user-centric web experiences. With a blend of front-end finesse and back-end wizardry, I thrive on turning ideas into interactive realities.</p>
                <div>
                    <button className='group text-white border-2 px-7 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                        <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home