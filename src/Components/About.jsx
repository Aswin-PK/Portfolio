import React from 'react'

function About() {
  return (
      <div name="about" className='h-[35rem] w-full bg-slate-200 flex items-center justify-center text-center px-[2rem] md:px-[6rem] 2xl:px-[10rem]'>
          <div className="flex flex-col gap-3">
              <span className='text-gray-400 text-2xl md:text-4xl'>About</span>
              <p className='text-gray-700 max-w-full md:max-w-[70rem] text-sm md:text-md lg:text-lg 2xl:text-xl mt-2 md:mt-6 text-justify'>Passionate and dedicated front-end developer with a keen eye for detail and a love for creating visually appealing and user-friendly websites. With a strong foundation in web development technologies, I am committed to crafting seamless, responsive, and engaging user experiences.</p>
              <p className='text-gray-700 max-w-full md:max-w-[70rem] text-sm md:text-md lg:text-lg 2xl:text-xl mb-6 text-justify'>In an ever-evolving field, I am dedicated to staying up-to-date with the latest front-end technologies and best practices. I am excited about the endless possibilities that the web offers and look forward to taking on new challenges to create web solutions that make a difference.</p>
          </div>
      </div>
  )
}

export default About