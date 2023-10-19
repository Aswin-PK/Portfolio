import React from 'react'
import html from '../assets/images/html5.jpeg'
import css from '../assets/images/css.jpeg'
import bootstrap from '../assets/images/Bootstrap.jpeg'
import tailwind from '../assets/images/tailwind.jpeg'
import javascript from '../assets/images/javascript.jpg'
import react from '../assets/images/react.jpeg'

function Skills() {
  return (
    <div name='skills' className='h-[25rem] w-full bg-gray-800 flex items-center justify-center text-center px-[2rem] md:px-[6rem] 2xl:px-[10rem]'>
        <div className="flex flex-col gap-3">
            <span className='text-gray-400 text-2xl md:text-4xl mb-6'>Tech Stack</span>
            <div className="w-full grid grid-cols-3 md:flex gap-7 place-items-center md:gap-6 2xl:gap-10 px-[2rem] md:px-[3rem] 2xl:px-[20rem]">
                <div className='w-[4rem] md:w-[5rem] 2xl:w-[6rem] h-[4rem] md:h-[5rem] 2xl:h-[6rem] bg-white rounded p-2 hover:scale-105 transition-all ease-in'><img src={html} className='w-full h-full object-contain' alt="" /></div>
                <div className='w-[4rem] md:w-[5rem] 2xl:w-[6rem] h-[4rem] md:h-[5rem] 2xl:h-[6rem] bg-white rounded p-2 hover:scale-105 transition-all ease-in'><img src={css} className='w-full h-full object-contain' alt="" /></div>
                <div className='w-[4rem] md:w-[5rem] 2xl:w-[6rem] h-[4rem] md:h-[5rem] 2xl:h-[6rem] bg-white rounded p-2 hover:scale-105 transition-all ease-in'><img src={bootstrap} className='w-full h-full object-contain' alt="" /></div>
                <div className='w-[4rem] md:w-[5rem] 2xl:w-[6rem] h-[4rem] md:h-[5rem] 2xl:h-[6rem] bg-white rounded p-2 hover:scale-105 transition-all ease-in'><img src={tailwind} className='w-full h-full object-contain' alt="" /></div>
                <div className='w-[4rem] md:w-[5rem] 2xl:w-[6rem] h-[4rem] md:h-[5rem] 2xl:h-[6rem] bg-white rounded p-2 hover:scale-105 transition-all ease-in'><img src={javascript} className='w-full h-full object-contain' alt="" /></div>
                <div className='w-[4rem] md:w-[5rem] 2xl:w-[6rem] h-[4rem] md:h-[5rem] 2xl:h-[6rem] bg-white rounded p-2 hover:scale-105 transition-all ease-in'><img src={react} className='w-full h-full object-contain' alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Skills