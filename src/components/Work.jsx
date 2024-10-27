import React from 'react'
import portfolioImg from '../assets/portfolio.png'
import libraryImg from '../assets/library.png'
import labsImg from '../assets/labs.png'
import carryLogistics from '../assets/carrylogistics.png'
import breatheMkPicture from '../assets/breathemk.png'
import krikPicture from '../assets/krik.png'
import vibeoneduPicture from '../assets/vibeonedu.png'
import mhraPicture from '../assets/mhra.png'

const Work = () => {
    return (

        <div name='work' className='w-full md:min-h-screen text-gray-300 pt-[70px] bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                    <p className='py-4'>// Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${labsImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Brainster Labs
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/andrejjovanovski/brainsterLabs" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${portfolioImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Web Portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                                </a>
                                <a href="https://github.com/andrejjovanovski/web-portfolio" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${libraryImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Brainster Library
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/andrejjovanovski/brainster-library" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${carryLogistics})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center px-2'>
                            <span className='text-2xl font-bold text-white tracking-wider text-center'>
                                Carry Logistics
                            </span>
                            <p className='text-center text-sm'>This website is still in the proccess of developing!</p>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/andrejjovanovski/carry-logistics" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${breatheMkPicture})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center px-2'>
                            <span className='text-2xl font-bold text-white tracking-wider text-center'>
                                BreatheMK
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://air.tetova.gov.mk/" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${mhraPicture})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center px-2'>
                            <span className='text-2xl font-bold text-white tracking-wider text-center'>
                                Admin Dashboard
                            </span>
                            <p className='text-center text-sm'>Admin dashboard for managing resources on MHRA website</p>
                            <div className='pt-8 text-center'>
                                <a href="https://git.brainster.co/Andrej.Jovanovski-FS15/brainsterprojects_andrejjovanovskifs15/-/tree/project03" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${krikPicture})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center px-2'>
                            <span className='text-2xl font-bold text-white tracking-wider text-center'>
                                KRIK
                            </span>
                            <p className='text-center text-sm'>Winning team on Brainster Hackaton!</p>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/andrejjovanovski/cya-krik" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${vibeoneduPicture})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center px-2'>
                            <span className='text-2xl font-bold text-white tracking-wider text-center'>
                                VibeOn Edu
                            </span>
                            <p className='text-center text-sm'>Brainster hackaton for Spakasse.mk</p>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/filip-nikolov-25/vibeonedu" target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work