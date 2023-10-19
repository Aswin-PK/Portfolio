import React, {useState, useEffect} from 'react'
import {Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Navbar() {

  // navbar menu highlighting
  const [NavMenu, setNavMenu] = useState(false)
  
  const handleClick = () =>{
    setNavMenu(!NavMenu) 
  }
  
  const [activeLink, setActiveLink] = useState('home');
  
  useEffect(() => {
    scrollSpy.update();
  }, []);
  
  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  
  
  // custom cursor movement 
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    setCursorPosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorPosition]);
  

  return (
    <>
      <nav className='fixed h-[4rem] md:h-[5rem] w-full px-6 md:px-[3rem] 2xl:px-[10rem] flex justify-between items-center bg-gray-800 z-20'>

          {/* logo */}
          <Link to="home" smooth={true} duration={500}>
            <span className="cursor-pointer">
              {/* <img src="" alt="" /> */}
              <p className='text-xl md:text-3xl 2xl:text-4xl text-blue-300 drop-shadow-md'>APK</p>
            </span>
          </Link>


          {/* menu */}
          <ul className="hidden md:flex items-center justify-center md:gap-[2rem] 2xl:gap-[5rem] text-gray-400">
              <li>
                <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>Home</Link>
              </li>
              <li>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>About</Link>
              </li>
              <li>
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>Skills</Link>
              </li>
              <li>
                <Link activeClass="active" to="works" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>works</Link>
              </li>
              <li>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>Contact</Link>
              </li>
          </ul>


          <span onClick={handleClick} className='block md:hidden cursor-pointer transition delay-100'>
              <i className={`fa-solid ${!NavMenu ? 'fa-bars' : 'fa-times'} text-xl text-gray-50`}></i>
          </span>
          {/* Mobile view */}
          <div className={`${NavMenu ? 'absolute' : 'hidden'}  w-[15rem] h-[18rem] right-0 top-[4rem] p-3 flex flex-col items-center justify-center gap-3 bg-gray-900 rounded-md`}>
            <span className='active:bg-gray-800 text-gray-300 w-full h-full rounded grid place-content-center'>
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
            </span>
            <span className='active:bg-gray-800 text-gray-300 w-full h-full rounded grid place-content-center'>
              <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
            </span>
            <span className='active:bg-gray-800 text-gray-300 w-full h-full rounded grid place-content-center'>
              <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
            </span>
            <span className='active:bg-gray-800 text-gray-300 w-full h-full rounded grid place-content-center'>
              <Link onClick={handleClick} to="works" smooth={true} duration={500}>Works</Link>
            </span>
            <span className='active:bg-gray-800 text-gray-300 w-full h-full rounded grid place-content-center'>
              <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
            </span>
          </div>

      </nav>
      
      {/* custom cursor */}
    
      <div className={`outer-cursor hidden lg:block fixed h-7 w-7 translate-x-[-50%] translate-y-[-50%] top-[${cursorPosition.y}px] left-[${cursorPosition.x}px] bg-blue-300 rounded-full mix-blend-difference pointer-events-none z-[60]`} style={{
          top: cursorPosition.y + 'px', 
          left: cursorPosition.x + 'px'
        }}
      ></div>
    </>
  )
}

export default Navbar