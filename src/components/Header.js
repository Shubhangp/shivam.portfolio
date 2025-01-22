'use client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

const Header = ({ textColor }) => {
  const contentRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='w-full fixed top-0 left-0 z-20'>
      <div className='contents'>
        <header className={`w-full relative lg:md:py-[30px] lg:md:px-10 px-5 flex flex-row items-center justify-center flex-nowrap gap-[10px] overflow-hidden backdrop-blur-[10px] ${!navOpen ? 'py-[25px]' : `${textColor === '#e9e9e7' ? 'bg-[#0d0d0d] pt-[30px] pb-[50px]' : 'bg-[#e9e9e7] pt-[30px] pb-[50px]'}`} transition-all duration-500 ease-in-out opacity-100`}>
          <div className={`flex lg:md:items-center items-start lg:md:flex-row flex-col lg:md:gap-[30px] ${!navOpen ? 'gap-0' : 'gap-[50px]'} h-min justify-center flex-[1_0_0px] max-w-[1200px] overflow-hidden p-0 relative w-px transform-none transition-all duration-500 ease-in-out origin-center`}>
            <div className='relative opacity-100 flex flex-row items-center lg:md:justify-center justify-between lg:md:gap-[30px] gap-0 flex-nowrap grow max-w-[1200px] lg:md:w-[1px] w-full overflow-hidden p-0'>
              <div className='relative flex justify-center items-center flex-row gap-5 p-0 w-min h-min overflow-hidden'>
                <Link href='/' className='relative overflow-visible lg:md:w-[142px] w-[107px] aspect-3.55/1 flex justify-center items-center gap-2'>
                  <div className='absolute inset-0'>
                    <img className='block w-full h-full rounded-inherit object-center object-cover' src={textColor === '#e9e9e7' ? 'https://framerusercontent.com/images/J4zFQPQvdzCcM8cbsgUWye4TiQE.png' : 'https://framerusercontent.com/images/5iIrc0JRCKsG14DhG4kBtQPzXTs.png'} />
                  </div>
                </Link>
              </div>
              <div className='hidden relative lg:md:flex grow flex-row items-center justify-end gap-[10px] flex-nowrap h-min overflow-hidden p-0 w-[1px]'>
                <div className='opacity-100 h-auto w-auto relative'>
                  <Link href='/' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                    <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                      <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                        <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>HOME</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                      <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>HOME</p>
                    </div>
                  </Link>
                </div>
                <div className='opacity-100 h-auto w-auto relative'>
                  <Link href='/about' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                    <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-in-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                      <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                        <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>ABOUT</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                      <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>ABOUT</p>
                    </div>
                  </Link>
                </div>
                <div className='opacity-100 h-auto w-auto relative'>
                  <Link href='/work' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                    <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-in-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                      <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                        <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>WORKS</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                      <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>WORKS</p>
                    </div>
                  </Link>
                </div>

                <div className='opacity-100 h-auto w-auto relative'>
                  <Link href='/blog' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                    <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-in-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                      <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                        <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                      <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:md:block flex-none h-auto relative w-auto">
                <Link href="/books" className={`${textColor === '#e9e9e7' ? 'text-[#0d0d0d]' : 'text-[#e9e9e7]'} rounded-[50px] w-max flex flex-col justify-start transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:text-[#E9E9E7] hover:bg-[#EB5939] bg-[${textColor}]`}>
                  <div className="w-auto">
                    <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">BOOKS</p>
                  </div>
                </Link>
              </div>
              <div className='lg:md:hidden flex-none h-auto relative w-auto'>
                <div className={`border ${textColor === '#e9e9e7' ? 'border-[#e9e9e7]' : 'border-[#0d0d0d]'} border-solid navOpen hover:bg-[#eb5939] hover:border-[#eb5939] bg-transparent duration-500 rounded-[50px] transform transition-colors origin-[50%_50%_0px] opacity-100 flex items-center justify-center cursor-pointer flex-row flex-nowrap gap-2 h-min w-min overflow-hidden p-2 relative will-change-auto`} onClick={() => setNavOpen((prev) => !prev)}>
                  <div className='w-5 h-5 relative flex-none transform-none origin-[50%_50%_0px]'>
                    <div className='flex justify-center items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color={textColor === '#e9e9e7' ? '#e9e9e7' : '#0d0d0d'} style={{ userSelect: "none", width: "100%", height: "100%", display: "inline-block", fill: textColor === '#e9e9e7' ? '#e9e9e7' : '#0d0d0d', color: textColor === '#e9e9e7' ? '#e9e9e7' : '#0d0d0d', flexShrink: 0 }}>
                        <g color={textColor === '#e9e9e7' ? '#e9e9e7' : '#0d0d0d'} weight="light"><path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,46H168a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm176,28H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-48,40H40a6,6,0,0,0,0,12H168a6,6,0,0,0,0-12Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={contentRef}
              style={{
                maxHeight: navOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                transition: 'max-height 0.5s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '50px'
              }}
              className={`overflow-hidden`}
            >
              <div className='lg:md:hidden flex items-start flex-none flex-col gap-5 justify-center w-full transform-none origin-center'>
                <div className='opacity-100 h-auto w-auto relative'>
                  <Link href='/' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                    <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                      <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                        <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>HOME</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                      <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>HOME</p>
                    </div>
                  </Link>
                </div>
                <div className='opacity-100 h-auto w-auto relative'>
                  <Link href='/about' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                    <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-in-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                      <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                        <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>ABOUT</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                      <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>ABOUT</p>
                    </div>
                  </Link>
                </div>
                <div className='opacity-100 h-auto w-auto relative'>
                  <Link href='/work' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                    <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-in-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                      <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                        <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>WORKS</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                      <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>WORKS</p>
                    </div>
                  </Link>
                </div>
                <div className='opacity-100 h-auto w-auto relative'>
                  <Link href='/blog' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                    <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-in-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                      <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                        <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                      <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="lg:md:hidden flex-none h-auto relative w-auto">
                <Link href="/books" className={`${textColor === '#e9e9e7' ? 'text-[#0d0d0d]' : 'text-[#e9e9e7]'} rounded-[50px] w-max flex flex-col justify-start transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:text-[#E9E9E7] hover:bg-[#EB5939] bg-[${textColor}]`}>
                  <div className="w-auto">
                    <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">BOOKS</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header;