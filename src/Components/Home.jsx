import React from 'react'
import {Link} from 'react-scroll'
import resume from '../assets/docs/AswinPK_CV.pdf'

function Home() {
  return (
    <>
      <svg className="absolute bottom-[-0.05rem] md:bottom-[-2rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(226 232 240)" fill-opacity="1" d="M0,256L48,245.3C96,235,192,213,288,186.7C384,160,480,128,576,106.7C672,85,768,75,864,96C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div name="home" className='h-screen w-full bg-gray-800 flex items-center justify-center px-[2rem] md:px-[6rem] 2xl:px-[10rem] '>
          <div className="flex flex-col gap-4 z-10">
              <span className='text-gray-400 text-md lg:text-xl 2xl:text-xl'>Hi, I am</span>
              <span className='text-gray-300 text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center tracking-wider drop-shadow-lg'><span className='text-blue-400'>A</span>swin P K</span>
              <span className='text-gray-400 text-md md:text-xl lg:text-2xl 2xl:text-3xl text-center'>Front-end Developer</span>
              <span className='text-gray-400 text-[0.7rem] md:text-md lg:text-[0.95rem] 2xl:text-xl text-center'>currently pursuing MCA</span>
              <div  className='flex items-center justify-center gap-4 md:gap-6'>
              <a href={resume} target='_blank' rel='noopener noreferrer'><button className='border rounded-full p-2 md:p-3 2xl:p-4 px-4 md:px-10 2xl:px-14  bg-gray-300 text-gray-700 text-[0.8rem] lg:text-[1rem] hover:bg-gray-700 hover:text-gray-100 transition-all shadow-lg'>Resume</button></a>
                  <Link to="contact" smooth={true} duration={500}><button className='border rounded-full p-2 md:p-3 2xl:p-4 px-4 md:px-10 2xl:px-14 text-gray-300 text-[0.8rem] lg:text-[1rem] hover:bg-gray-900 shadow-lg'>Say Hello!</button></Link>
              </div>
              <div className='mt-[4rem] flex items-center justify-center gap-[1.5rem] md:gap-[2.5rem]'>
                <a href="https://www.linkedin.com/in/aswinpk47"><span><i className='fa-brands fa-linkedin text-[2rem] md:text-[2.2rem] text-slate-500 hover:text-[#435eb8] flex items-center justify-center rounded-lg'></i></span></a>
                <a href="https://github.com/Aswin-PK"><span><i className='fa-brands fa-github text-[2rem] md:text-[2.2rem] text-slate-500 hover:text-[#3a3a3a]  flex items-center justify-center rounded-lg'></i></span></a>
                <a href="https://www.instagram.com/aswin.p.k/"><span><i className='fa-brands fa-instagram text-[2rem] md:text-[2.2rem] text-slate-500 hover:text-[#fc5974] flex items-center justify-center rounded-lg'></i></span></a>
                <a href="https://twitter.com/Aswin_P_K"><span><i className='fa-brands fa-x-twitter text-[2rem] md:text-[2.2rem] text-slate-500 hover:text-[#5eb9ff] flex items-center justify-center rounded-lg'></i></span></a>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home