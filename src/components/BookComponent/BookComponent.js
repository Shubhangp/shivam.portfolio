'use client';
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';
import { books } from '@/server/data';

const BookComponent = () => {
    const [translateY, setTranslateY] = useState(-218.609);
    const [mobTranslateY, setMobTranslateY] = useState(-100);
    const [headerColor, setHeaderColor] = useState("#0d0d0d");

    useEffect(() => {
            const handleScroll = () => {
                const scrollY = window.scrollY;
                const isMobile = window.innerWidth <= 768;
                const baseTranslateY = isMobile ? -100 : -218.609;
                const newTranslateY = baseTranslateY + scrollY * 0.5;
                isMobile? setMobTranslateY(newTranslateY) : setTranslateY(newTranslateY);
            };
    
            window.addEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { id: "partOne", color: "#0d0d0d" },
        { id: "partTwo", color: "#e9e9e7" },
        { id: "partThree", color: "#0d0d0d" },
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const headerHeight = 50;
                const scrollPosition = window.scrollY;
    
                sections.forEach((section) => {
                    const element = document.getElementById(section.id);
                    if (element) {
                        const sectionTop = element.offsetTop;
                        const sectionHeight = element.offsetHeight;
    
                        if (
                            scrollPosition >= sectionTop - headerHeight &&
                            scrollPosition < sectionTop + sectionHeight - headerHeight
                        ) {
                            setHeaderColor(section.color);
                        }
                    }
                });
            };
    
            window.addEventListener("scroll", handleScroll);
    
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [sections]);

    return (
        <>
            <Header textColor={headerColor} />
            <div className='flex-none h-[100px] overflow-hidden relative w-full'></div>
            {/* Part One */}
            <div id="partOne" className='flex flex-row items-center justify-center gap-2.5 h-min overflow-hidden lg:md:p-[100px_40px] p-[60px_20px]  relative w-full'>
                <div className='place-content-center flex flex-col items-center justify-center gap-20 flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden relative lg:md:w-[1px] w-full'>
                    <div className='flex flex-col items-center justify-center gap-5 h-min overflow-hidden p-0 relative w-full'>
                        <div className='flex flex-col items-center justify-center gap-0 h-min overflow-hidden p-0 relative lg:md:w-[650px] w-full'>
                            <div className='flex flex-col items-start flex-shrink-0 h-auto relative whitespace-pre w-auto outline-none transform-none'>
                                <p className='text-lg text-[#EB5939] uppercase tracking-[0.12em] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>My Books</p>
                            </div>
                            <div className='flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap break-word outline-none'>
                                <h1 className='lg:md:text-[42px] text-[32px] text-[#0d0d0d] text-center leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>Unlocking the Power of Brand Evolution</h1>
                            </div>
                        </div>
                        <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap lg:md:w-[750px] w-full break-words overflow-wrap'>
                            <p className='text-base text-[#0d0d0d] text-center leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                Explore My Books: Discovering How I Evolve Brands for a Changing World, Ensuring Cultural Relevance and Future Readiness through Case Studies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Part Two */}
            <div id="partTwo" className='place-content-center items-center bg-[#0d0d0d] flex flex-none flex-row gap-2 h-min overflow-hidden p-0 relative w-full'>
                <div
                    className='aspect-w-17 aspect-h-10 flex-1 lg:md:h-[700px] h-[227px] overflow-visible relative w-[1px]'
                    style={{
                        transform: `translateY(${translateY}px)`,
                        willChange: 'transform',
                        visibility: 'initial',
                        opacity: 1,
                        transition: 'transform 0s ease-out',
                    }}
                >
                    <div className='absolute inset-0'>
                        <img className='block w-full h-full rounded-inherit object-center object-cover' src='https://framerusercontent.com/images/AY34Q2gsg9hQvMguzSwe4GNAyd8.jpg' alt='img' />
                    </div>
                </div>
            </div>
            <div id="partTwo" className='place-content-center items-center lg:md:hidden bg-[#0d0d0d] flex flex-none flex-row gap-2 h-min overflow-hidden p-0 relative w-full'>
                <div
                    className='aspect-w-17 aspect-h-10 flex-1 lg:md:h-[700px] h-[227px] overflow-visible relative w-[1px]'
                    style={{
                        transform: `translateY(${mobTranslateY}px)`,
                        willChange: 'transform',
                        visibility: 'initial',
                        opacity: 1,
                        transition: 'transform 0s ease-out',
                    }}
                >
                    <div className='absolute inset-0'>
                        <img className='block w-full h-full rounded-inherit object-center object-cover' src='https://framerusercontent.com/images/AY34Q2gsg9hQvMguzSwe4GNAyd8.jpg' alt='img' />
                    </div>
                </div>
            </div>
            {/* Part Three*/}
            <div id="partThree" className='flex items-center justify-center flex-row gap-2 h-min overflow-hidden lg:md:px-10 px-5 lg:md:py-24 py-[60px] relative w-full'>
                <div className='flex flex-col items-center justify-center gap-12 flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden p-0 relative lg:md:w-[1px] w-full'>
                    <div className='flex flex-row items-center justify-center gap-8 h-min overflow-hidden p-0 relative w-full'>
                        <div className='flex-[1_0_0px] grid lg:md:grid-cols-[repeat(3,minmax(100px,_1fr))] grid-cols-[repeat(1,minmax(100px,_1fr))] auto-rows-min gap-10 justify-items-center h-min p-0 relative w-[1px]'>
                            {books.map((data, index) => (<div key={index} className='self-start flex-none h-auto relative w-full group'>
                                <div className='place-content-center items-center cursor-pointer flex flex-col gap-8 h-min overflow-hidden p-0 relative w-full opacity-100'>
                                    <a href={data.slug} className='place-content-center items-center aspect-[1.32707/1] flex flex-row gap-2.5 lg:md:h-[450px] h-[366px] overflow-hidden p-0 relative no-underline w-full'>
                                        <div className='flex-none h-[115%] overflow-hidden relative w-[115%] transform-none origin-center group-hover:scale-[0.92] duration-500'>
                                            <div className='absolute rounded-none inset-0'>
                                                <img className='block w-full h-full rounded-none object-center object-fill' src={data.image} alt='blogImage' />
                                            </div>
                                        </div>
                                    </a>
                                    <div className='content-start items-start justify-center flex flex-col gap-3 h-min overflow-hidden p-0 relative w-full'>
                                        <div className='flex flex-col justify-start flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none transform-none opacity-100'>
                                            <h5 className='lg:md:text-2xl text-[20px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{data.bookHeading}</h5>
                                        </div>
                                        <div className='flex flex-col justify-start flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none transform-none opacity-100'>
                                            <h3 className="text-[16px] text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">{data.bookSubHeading}</h3>
                                        </div>
                                        <div className=''>
                                            <a href={data.slug} className="w-max flex flex-col justify-start bg-[#0d0d0d] text-[#e9e9e7] transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:bg-[#EB5939]">
                                                <div className="w-auto">
                                                    <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">READ MORE</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookComponent;