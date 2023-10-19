import React from 'react'
import contactImage from '../assets/images/chat.png'

function Contact() {
  return (
    <div name="contact" className='h-auto w-full bg-gray-800 flex items-center justify-center text-center px-[2rem] md:px-[6rem] 2xl:px-[10rem] py-[3rem] md:py-[5rem]'>
        <div className="w-full px-0 2xl:px-6 py-2 flex flex-col gap-3">
            <span className='text-gray-400 text-2xl md:text-4xl'>Contact Me</span>
            <p className='text-gray-500 text-md md:text-xl mt-2 md:mt-6 text-center'>// Let's connect.</p>

            <div className='px-0 2xl:px-[5rem] flex items-center justify-center gap-3'>
              <div className='hidden md:block w-full 2xl:w-[55rem]'>
                  <img src={contactImage} alt="" />
              </div>
              <div className='w-full px-[1rem] md:px-[0.5rem] 2xl:px-[3rem]'>
                <form action="https://getform.io/f/e52afa18-b903-445b-9c42-39b5539c2445" method='post' className='flex flex-col items-center justify-center gap-3'>
                  <span className='w-full'><input className='w-full text-[0.7rem] lg:text-[0.9rem] 2xl:text-[1rem] h-[2.4rem] md:h-[3rem] px-4 outline-blue-800 rounded' type="text"  name="fullname" placeholder='Your Full Name'/></span>
                  <span className='w-full'><input className='w-full text-[0.7rem] lg:text-[0.9rem] 2xl:text-[1rem] h-[2.4rem] md:h-[3rem] px-4 outline-blue-800 rounded' type="email"  name="email" placeholder='Your Email'/></span>
                  <span className='w-full'><textarea className='w-full text-[0.7rem] lg:text-[0.9rem] 2xl:text-[1rem] p-4 outline-blue-800 rounded' cols={20} rows={6} name="message" placeholder='Type message...'></textarea></span>
                  <span className='w-full'><button type='submit' className='w-full text-[0.7rem] lg:text-[0.9rem] 2xl:text-[1rem] h-[2.4rem] md:h-[3rem] bg-blue-600 text-slate-100 hover:bg-blue-700 rounded'>Send Message</button></span>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact