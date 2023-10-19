import React from 'react'
import project from '../assets/images/project1.jpg'

function Works() {
  return (
    <div name='works' className='h-auto w-full bg-slate-200 flex items-center justify-center text-center px-[2rem] md:px-[6rem] lg:px-[8rem] 2xl:px-[10rem] py-[7rem]'>
        <div className="flex flex-col gap-3">
            <span className='text-gray-400 text-2xl md:text-4xl'>Works</span>
            <p className='text-gray-500 text-md md:text-xl mt-2 md:mt-6 text-center'>// These are the recent works that I have done.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                
                <div className='group relative w-full h-auto 2xl:w-[30rem] overflow-hidden cursor-pointer'>
                  <img src={project} alt="" className='group-hover:scale-105 transition delay-100' />
                  <div className='absolute top-0 w-full h-full flex flex-col gap-2 items-center justify-center text-justify p-3 2xl:p-6 bg-[#292929d0] text-slate-300'>
                    <h3 className='text-[0.9rem] lg:text-xl 2xl:text-2xl underline'>Airbnb clone</h3>
                    <p className='text-[0.7rem] lg:text-[1rem] 2xl:text-[1rem]'>Build a clone of famous room booking application - AirBnb. Liked the user interface of this web application which inspired to build a clone of it.</p>
                    <p className='text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1rem] text-blue-200'>Languages: React.js, Html, Tailwind CSS, Javascript</p>
                  </div>
                </div>
                <div className='group relative w-full h-auto 2xl:w-[30rem] overflow-hidden cursor-pointer'>
                  <img src={project} alt="" className='group-hover:scale-105 transition delay-100' />
                  <div className='absolute top-0 w-full h-full flex flex-col gap-2 items-center justify-center text-justify p-3 2xl:p-6 bg-[#292929d0] text-slate-300'>
                    <h3 className='text-[0.9rem] lg:text-xl 2xl:text-2xl underline'>Smart Interview Manager</h3>
                    <p className='text-[0.7rem] lg:text-[1rem] 2xl:text-[1rem]'>A web application for college admission automation. Has been part of the development team where I worked as a Front-end Developer</p>
                    <p className='text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1rem] text-blue-200'>Languages: Python-Django, Html, CSS, Javascript, Jquery</p>
                  </div>
                </div>
                <div className='group relative w-full h-auto 2xl:w-[30rem] overflow-hidden cursor-pointer'>
                  <img src={project} alt="" className='group-hover:scale-105 transition delay-100' />
                  <div className='absolute top-0 w-full h-full flex flex-col gap-2 items-center justify-center text-justify p-3 2xl:p-6 bg-[#292929d0] text-slate-300'>
                    <h3 className='text-[0.9rem] lg:text-xl 2xl:text-2xl underline'>Blood Bond</h3>
                    <p className='text-[0.7rem] lg:text-[1rem] 2xl:text-[1rem]'>A web application for the management of blood bank inventory and the details of users about the collection of blood through donation camps.</p>
                    <p className='text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1rem] text-blue-200'>Languages: Python-Django, Html, CSS, Javascript, Jquery</p>
                  </div>
                </div>
                <div className='group relative w-full h-auto 2xl:w-[30rem] overflow-hidden cursor-pointer'>
                  <img src={project} alt="" className='group-hover:scale-105 transition delay-100' />
                  <div className='absolute top-0 w-full h-full flex flex-col gap-2 items-center justify-center text-justify p-3 2xl:p-6 bg-[#292929d0] text-slate-300'>
                    <h3 className='text-[0.9rem] lg:text-xl 2xl:text-2xl underline'>Netflix clone</h3>
                    <p className='text-[0.7rem] lg:text-[1rem] 2xl:text-[1rem]'>Build a clone of the famous streaming application - Netflix. The landing page is cloned here.</p>
                    <p className='text-[0.6rem] lg:text-[0.9rem] 2xl:text-[1rem] text-blue-200'>Languages: React.js, Html, CSS, Javascipt</p>
                  </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Works