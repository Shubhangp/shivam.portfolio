import React from 'react';
import { profolio } from "@/server/data";
import Link from "next/link";
import ScrollComponent from '@/components/WorkComponent/ScrollComponent';
import HeaderStatic from '@/components/HeaderStatic';
import HeaderStaticWork from '@/components/WorkComponent/HeaderStaticWork';

export async function generateMetadata({ params }) {
    const { slug } = params;

    const project = profolio.find((b) => b.link === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The requested project does not exist.',
            openGraph: {
                title: 'Project Not Found',
                description: 'The requested project does not exist.',
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Project Not Found',
                description: 'The requested project does not exist.',
            },
        };
    }

    const excerpt = project.subHeading.split(' ').slice(0, 10).join(' ') + '...';

    return {
        title: project.heading,
        description: `${excerpt}`,
        openGraph: {
            title: project.heading,
            description: `${excerpt}`,
            images: [
                {
                    url: project.imageLink,
                    alt: project.heading,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.heading,
            description: `${excerpt}`,
            images: [project.imageLink],
        },
    };
}

const page = ({ params }) => {
    const { slug } = params;

    const project = profolio.find((b) => b.link === slug);
    return (
        <div className='bg-[#e9e9e7]'>
            {/* Part One */}
            <div className='place-content-center items-center flex flex-none flex-row gap-0 h-min overflow-hidden p-0 relative w-full'>
                <div className='absolute inset-0'>
                    <img className='block w-full h-full rounded-inherit object-center object-cover' src={project.imageLink} alt='project-main' />
                </div>
                <div className='flex flex-col items-center place-content-center bg-[#0d0d0d80] flex-[1_0_0px] h-[90vh] w-[1px] overflow-hidden p-0 relative gap-0'>
                    <div className='w-full'>
                        <HeaderStaticWork />
                    </div>
                    <div className='flex items-center place-content-center flex-[1_0_0px] flex-row gap-[10px] h-[1px] w-full overflow-hidden lg:md:p-[100px_40px_50px] p-[60px_20px_30px] relative'>
                        <div className='flex items-start content-start justify-between flex-[1_0_0px] flex-col h-full max-w-[1200px] overflow-hidden p-0 relative lg:md:w-[1px] w-full'>
                            <div className='content-start flex items-start flex-col gap-[30px] justify-center flex-[1_0_0px] h-px overflow-hidden p-0 relative lg:md:w-[550px] w-full'>
                                <div className='flex items-center justify-center content-center flex-none flex-col gap-[10px] h-min overflow-hidden p-0 relative w-full'>
                                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                        <p className='text-[#EB5939] text-lg leading-[1.2em] tracking-[0.12em] uppercase font-medium font-Plus_Jakarta_Sans'>Creative</p>
                                    </div>
                                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                        <h1 className='text-[#E9E9E7] lg:md:text-[42px] text-[32px] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{project.heading}</h1>
                                    </div>
                                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                        <p className='text-base text-[#e9e9e7] leading-[1.4em] font-Plus_Jakarta_Sans font-normal'>{project.subHeading}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex lg:md:items-center items-start justify-between gap-5 flex-none lg:md:flex-row flex-col h-min overflow-hidden p-0 relative w-full content-center'>
                                <div className='flex gap-5'>
                                    <span className='cursor-pointer relative inline-block text-sm text-[#E9E9E7] leading-[1.1em] font-medium font-Plus_Jakarta_Sans hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>TWITTER</span>
                                    <span className='cursor-pointer relative inline-block text-sm text-[#E9E9E7] leading-[1.1em] font-medium font-Plus_Jakarta_Sans hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>BEHANCE</span>
                                    <span className='cursor-pointer relative inline-block text-sm text-[#E9E9E7] leading-[1.1em] font-medium font-Plus_Jakarta_Sans hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>DRIBBLE</span>
                                </div>
                                <div className="relative w-full flex lg:md:justify-end justify-start">
                                    <Link href="/work" className="w-max flex flex-col justify-start bg-transparent border border-[#E9E9E7] text-[#E9E9E7] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939]">
                                        <div className="w-auto flex gap-[10px] items-center">
                                            <p className="text-sm font-Plus_Jakarta_Sans ">LET’S TALK</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#E9E9E7'><g color='#E9E9E7' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Part Two */}
            <div className='flex items-center justify-center flex-none flex-row gap-2.5 h-min overflow-hidden lg:md:p-[100px_40px] p-[60px_20px] relative w-full'>
                <div className='justify-center content-center flex items-start flex-1 flex-col gap-2.5 h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]'>
                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-break-word'>
                        <h2 className='text-[#0d0d0d] lg:md:text-4xl text-[28px] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>About the Project</h2>
                    </div>
                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap lg:md:w-1/2 w-full break-words overflow-wrap-break-word'>
                        <p className='text-[#0d0d0d] text-base leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>{project.subHeading}</p>
                    </div>
                </div>
            </div>
            {/* Part Three */}
            <ScrollComponent project={project.imageLinkSec} />
            {/* Part Four */}
            <div className='flex items-center justify-center gap-2.5 h-min overflow-hidden lg:md:p-[50px_40px] p-[30px_20px] relative w-full'>
                <div className='content-start flex items-start justify-center flex-col gap-2.5 flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]'>
                    <div className='flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap lg:md:w-[50%] w-full break-words outline-none'>
                        <p className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>{project.textsec}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;