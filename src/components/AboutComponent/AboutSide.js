'use client';
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';
import { companiesData, playGround, tools } from '@/server/data';
import Link from 'next/link';

const AboutSide = () => {

    const [headerColor, setHeaderColor] = useState("#0d0d0d");

    const sections = [
        { id: "partOne", color: "#0d0d0d" },
        { id: "partTwo", color: "#e9e9e7" },
        { id: "partThree", color: "#0d0d0d" },
        { id: "partFour", color: "#0d0d0d" },
    ];

    useEffect(() => {
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
    }, [sections]);

    return (
        <>
            <Header textColor={headerColor} />
            <div className='flex-none h-[100px] overflow-hidden relative w-full'></div>
            {/* Part one */}
            <div id="partOne" className='place-content-center items-center flex flex-none flex-row gap-2.5 h-min overflow-hidden px-[40px] py-[100px] relative w-full bg-gray-200'>
                <div className='content-start justify-center items-start flex flex-1 flex-row gap-[50px] h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]'>
                    <div className='place-content-center items-center flex flex-1 flex-col gap-[30px] h-min overflow-hidden p-0 relative w-[1px]'>
                        <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere'>
                            <h1 className='text-[140px] text-[#0d0d0d] leading-[1.1em] font-medium font-Plus_Jakarta_Sans'>
                                Hey, <br />I’m Shivam
                            </h1>
                        </div>
                        <div className='place-content-center items-center flex flex-[0_0_auto] flex-col gap-2.5 h-min overflow-hidden p-0 relative w-full'>
                            <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative whitespace-pre-wrap w-full break-words'>
                                <p className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                    Navigating the ever-evolving world of AI and technology, I am passionate about developing innovative solutions that bridge the gap between complex systems and real-world impact. With over 4 years of experience, my focus is on leveraging AI, cloud infrastructure, and automation to drive meaningful change.
                                </p>
                            </div>
                            <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative whitespace-pre-wrap w-full break-words'>
                                <p className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                    For me, technology is more than just code—it's about solving problems, creating efficient workflows, and enhancing user experiences. From building AI-driven products to optimizing processes for startups and enterprises, my work reflects a commitment to making technology accessible, impactful, and future-ready.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='place-content-center items-center flex flex-[0_0_auto] flex-col gap-5 h-min overflow-hidden p-0 relative w-min'>
                        <div className='aspect-w-1 aspect-h-1 flex-none h-[350px] overflow-visible relative w-[350px]'>
                            <div className='absolute rounded-inherit inset-0'>
                                <img className='block w-full h-full rounded-inherit object-center object-cover' src='https://res.cloudinary.com/ddtfebvov/image/upload/v1735989459/IMG_8531_aerspw.webp' />
                            </div>
                        </div>
                        <div className='flex-none h-auto relative w-auto'>
                            <Link href="/work" className="w-max flex flex-col justify-start bg-transparent border border-[#0d0d0d] text-[#0d0d0d] transform transition-all duration-500 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939] group">
                                <div className="w-auto flex gap-[10px]">
                                    <p className="text-sm font-Plus_Jakarta_Sans ">LET'S TALK</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#0d0d0d' className="group-hover:fill-[#E9E9E7] group-hover:text-[#E9E9E7]"><g color='#0d0d0d' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Part Two */}
            <div id="partTwo" className='flex flex-none flex-row place-content-center items-center bg-[#0d0d0d] gap-[10px] h-min overflow-hidden p-[100px_40px] relative w-full'>
                <div className='flex flex-grow flex-row place-content-start items-start gap-[50px] h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]'>
                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-grow h-auto relative whitespace-pre-wrap w-[1px] break-words'>
                        <h2 className='text-4xl text-[#e9e9e7] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>Graduated with a Bachelor of Applications from the School of Management Sciences in my hometown, Varanasi, a tier-3 city.</h2>
                    </div>
                    <div className='flex flex-grow flex-col place-content-center items-center gap-[30px] h-min overflow-hidden p-0 relative w-[1px]'>
                        <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none">
                            <p className="text-base text-[#e9e9e7] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">With 4 years of experience, I’ve worked on personal projects, supported startups, and contributed to large MNCs. My journey has involved developing AI solutions, building innovative tech products, and helping businesses optimize their operations. Whether working on small-scale projects or large corporate initiatives, I've gained valuable insights that allow me to adapt and create meaningful impact across different sectors.</p>
                        </div>
                        <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words word-wrap outline-none flex flex-col justify-start flex-shrink-0 transform-none">
                            <h3 className="text-2xl text-[#e9e9e7] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Here are some of the companies I’ve had the privilege to work with:</h3>
                        </div>
                        <div className="flex-none h-auto relative w-full">
                            <div className="flex items-center flex-col flex-wrap-nowrap gap-0 h-min justify-center overflow-hidden p-0 relative w-full transform-none transform-origin-[50%_50%_0px] ">
                                {companiesData.map((data) => (<div key={data.id} className="flex-none h-auto relative w-full transform-none transform-origin-[50%_50%_0px]">
                                    <div className="flex cursor-pointer flex-col gap-0 h-min justify-center overflow-hidden p-0 relative bg-transparent w-full transform-none transform-origin-[50%_50%_0px] opacity-100">
                                        <div className="flex-none items-start flex flex-row gap-2.5 h-min justify-center overflow-hidden p-2.5 relative w-full transform-none transform-origin-[50%_50%_0px] opacity-100">
                                            <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none transform-origin-[50%_50%_0px] opacity-100 flex-[1_0_0px] h-auto relative whitespace-pre-wrap w-[1px] break-words">
                                                <h2 className="text-xl text-[#e9e9e7] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">{data.companyName}</h2>
                                            </div>
                                            <div className="items-center cursor-pointer flex flex-none flex-row flex-nowrap gap-2.5 h-[44px] justify-center overflow-hidden p-0 relative w-[44px] will-change-[none,_transform] bg-transparent rounded-full transform-none transform-origin-[50%_50%_0px]">
                                                <div className="flex-none h-[28px] relative w-[28px] transform-none transform-origin-[50%_50%_0px] will-change-transform">
                                                    <div className="contents">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" fill='#e9e9e7'><g color='#0d0d0d' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-none h-[1px] overflow-hidden relative w-full bg-[#e9e9e780] transform-none transform-origin-[50%_50%_0px] opacity-100" />
                                        <div>
                                            <div>
                                                <h5>{data.position}</h5>
                                            </div>
                                            <div>
                                                <h5>{data.activeYears}</h5>
                                            </div>
                                            <div>
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Part Three */}
            <div id="partThree" className='flex flex-none flex-row place-content-center items-center gap-[10px] h-min overflow-hidden p-[100px_40px] relative w-full'>
                <div className='flex flex-grow flex-row place-content-start items-start gap-[50px] h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]'>
                    <div className='flex flex-none flex-col justify-start flex-shrink-0 outline-none transform-none relative h-auto w-[300px] whitespace-pre-wrap break-words'>
                        <p className='text-lg text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>THE TOOLS</p>
                    </div>
                    <div className='flex flex-grow flex-col place-content-center items-center gap-[50px] h-min overflow-hidden p-0 relative w-[1px]'>
                        <div className='flex flex-none flex-col place-content-start items-start gap-[20px] h-min overflow-hidden p-0 relative w-full'>
                            <div className='flex flex-none flex-col justify-start flex-shrink-0 outline-none transform-none relative h-auto w-1/2 whitespace-pre-wrap break-words'>
                                <h2 className='text-4xl text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>Building with Powerful Technologies</h2>
                            </div>
                            <div className='flex flex-none flex-col justify-start flex-shrink-0 outline-none transform-none relative h-auto w-full whitespace-pre-wrap break-words'>
                                <p className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>I use a variety of tools to drive the development and deployment of my projects. For AI and automation, Python is my go-to language, while OpenAI provides powerful NLP capabilities. For cloud infrastructure, I work with Azure, AWS, and GCP, depending on the project’s requirements. Langchain is my choice for data processing, and GitHub ensures smooth version control and collaboration. To optimize development and deployment workflows, I rely on Docker for containerization, ensuring projects run seamlessly across environments. Below are the key technologies I specialize in.</p>
                            </div>
                        </div>
                        <div className='grid flex-none gap-7 auto-rows-min grid-cols-[repeat(4,_minmax(100px,_1fr))] grid-rows-[repeat(2,_min-content)] h-min justify-center overflow-hidden p-0 relative w-full'>
                            {tools.map((data) => (<div className='place-self-start flex-none h-auto relative w-full'>
                                <div className='place-content-center items-center cursor-pointer flex flex-col gap-[15px] h-min overflow-hidden p-[20px] relative will-change-[transform] transform transition-all duration-500 ease-out bg-[#0d0d0d] w-full rounded-[5px] opacity-100 hover:bg-[#EB5939]'>
                                    <div className='flex-none h-[50px] overflow-hidden relative w-full'>
                                        <div className='absolute inset-0 rounded-inherit'>
                                            <img className='block w-full h-full rounded-inherit object-left object-contain' src={data.image} alt={data.alt} />
                                        </div>
                                    </div>
                                    <div className='outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                        <h6 className='text-xl text-[#e9e9e6] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{data.name}</h6>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Part Four */}
            <div id="partFour" className='flex place-content-center items-center flex-none flex-row gap-2 h-min overflow-hidden p-[100px_40px] relative w-full border-t border-[#0d0d0d80]'>
                <div className='flex place-content-center items-center flex-grow flex-shrink-0 flex-col gap-12 h-min max-w-[1200px] overflow-visible p-0 relative w-[1px]'>
                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative w-full whitespace-pre-wrap break-words'>
                        <h2 className='text-4xl text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>The Playground</h2>
                    </div>
                    <div className='place-content-center items-center flex flex-none flex-col gap-0 h-min overflow-visible p-0 relative w-full'>
                        {playGround.map((data, index) => (<div className='flex-none h-auto relative w-full'>
                            <div className='place-content-center items-center cursor-pointer flex flex-col gap-2.5 h-min overflow-visible py-5 px-2.5 relative border-b border-solid border-[rgba(13,13,13,0.5)] opacity-100 w-full group'>
                                <div className='transform translate-y-[-50%] opacity-0 group-hover:opacity-100 aspect-[1.53846/1] flex-0 h-[260px] overflow-hidden absolute right-[100px] top-1/2 w-[400px]'>
                                    <div className='absolute inset-0'>
                                        <img className='block w-full h-full rounded-none object-center object-cover' src={data.image} alt={data.name} />
                                    </div>
                                </div>
                                <div className='place-content-center items-center flex flex-col gap-0 h-min overflow-hidden p-0 relative w-full'>
                                    <div className='place-content-center items-center flex flex-row gap-2.5 h-min overflow-hidden p-0 relative w-full'>
                                        <div className='flex-1 h-auto relative whitespace-pre-wrap w-px break-words overflow-wrap-break transform-none opacity-100 outline-none flex flex-col justify-start flex-shrink-0'>
                                            <p className='text-sm text-[#0d0d0d80] uppercase leading-[1.1em] font-medium font-Plus_Jakarta_Sans'>{data.category}</p>
                                        </div>
                                        <div className='flex-0 h-auto relative whitespace-pre w-auto transform-none opacity-100 outline-none flex flex-col justify-start flex-shrink-0'>
                                            <p className='text-sm text-[#0d0d0d80] leading-[1.1em] font-medium font-Plus_Jakarta_Sans'>{index > 8 ? index + 1 : `0${index + 1}`}</p>
                                        </div>
                                    </div>
                                    <div className='flex-0 h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap break-word outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100'>
                                        <h3 className='text-[32px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{data.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSide