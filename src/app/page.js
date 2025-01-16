'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profolio, companiesData } from "@/server/data";

export default function Home() {
  const [headerColor, setHeaderColor] = useState("#FFF");

  const sections = [
    { id: "partOne", color: "#FFF" },
    { id: "partTwo", color: "#000" },
    { id: "partThree", color: "#FFF" },
    { id: "partFour", color: "#000" },
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
    <div className="">
      <Header textColor={headerColor} />
      {/* Part ONE */}
      <div id="partOne" className="relative">
        <div>
          <img className="h-[95vh] w-full relative object-cover" src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735629588/uoGweUB1Hmu5gOVlOQ7RI0QXup8_rf6xoh.avif" />
        </div>
        <div className="flex flex-none flex-row flex-nowrap items-center justify-center gap-2 bg-transparent h-full w-full overflow-hidden px-10pt-[100px] pb-[50px] absolute z-10 top-0">
          <div className="flex flex-nowrap items-end justify-between gap-[100px] flex-[1_0_0px] h-full max-w-[1200px] overflow-hidden p-0 relative w-[1px]">
            <div className='flex gap-5'>
              <span className='cursor-pointer relative inline-block text-base text-[#E9E9E7] font-medium hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>TWITTER</span>
              <span className='cursor-pointer relative inline-block text-base text-[#E9E9E7] font-medium hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>BEHANCE</span>
              <span className='cursor-pointer relative inline-block text-base text-[#E9E9E7] font-medium hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>DRIBBLE</span>
            </div>
            <div className="flex flex-col gap-[30px] w-[550px]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[42px] leading-[1.2em] font-medium font-Plus_Jakarta_Sans text-[#E9E9E7]">AI Innovator and Mentor, Crafting Impactful Ideas and Careers from India</h1>
                <h2 className="text-base font-Plus_Jakarta_Sans text-[#E9E9E7]">Hi, I’m Shivam Maurya—a tech enthusiast, AI engineer, and mentor passionate about transforming ideas into impactful solutions. From creating cutting-edge AI projects to guiding aspiring minds in Python and data science, my journey is all about blending innovation with expertise. Let’s connect to build, innovate, and inspire!</h2>
              </div>
              <div className="relative w-full">
                <Link href="/work" className="w-max flex flex-col justify-start bg-[#E9E9E7] text-[#000] transform transition-all duration-700 ease-out px-5 py-[10px] hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939]">
                  <div className="w-auto">
                    <p className="text-sm font-Plus_Jakarta_Sans ">Explore Works</p>
                  </div>
                </Link>
              </div>
              <div className="relative w-full flex justify-end">
                <Link href="/work" className="w-max flex flex-col justify-start bg-transparent border border-[#E9E9E7] text-[#E9E9E7] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939]">
                  <div className="w-auto flex gap-[10px]">
                    <p className="text-sm font-Plus_Jakarta_Sans ">LET’S TALK</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#E9E9E7'><g color='#E9E9E7' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Part TWO */}
      <div id="partTwo" className="flex flex-none flex-row flex-nowrap items-center justify-center gap-2 bg-[#e9e9e7] h-min w-full overflow-hidden p-[100px_40px] relative">
        <div className="flex flex-col flex-nowrap items-center justify-center gap-[100px] flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]">
          <div className="flex flex-row flex-nowrap items-start justify-center gap-[50px] h-min overflow-hidden p-0 relative w-full">
            <div className="flex-none h-auto relative whitespace-pre-wrap w-[27%] break-words">
              <p className="text-lg text-[#0d0d0d] leading-[1.2em] tracking-wider font-medium font-Plus_Jakarta_Sans">ABOUT ME</p>
            </div>
            <div className="flex flex-row flex-nowrap items-start justify-center gap-[30px] h-min overflow-hidden p-0 relative w-[1px] flex-1">
              <div className="flex flex-col flex-nowrap items-start justify-center gap-[30px] h-min overflow-hidden p-0 relative w-[1px] flex-1">
                <div className="flex flex-col justify-start flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex-shrink-0 transform-none">
                  <h2 className="text-[36px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Ready to Turn Your Ideas into Impact? Let’s Make It Happen with AI.</h2>
                </div>
                <div className="flex flex-col justify-start flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex-shrink-0 transform-none">
                  <p className="text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">I'm Shivam Maurya—an AI engineer, mentor, and entrepreneur passionate about driving innovation and creating impactful solutions. With years of experience in AI, data science, and technology, I specialize in transforming ideas into real-world applications that solve complex problems. Whether it’s building cutting-edge AI systems, mentoring aspiring tech leaders, or helping startups streamline their processes, my goal is to inspire growth, foster creativity, and make technology accessible. I’m all about pushing boundaries and helping you leverage the power of AI to bring your ideas to life.</p>
                </div>
                <div className="flex-none h-auto relative w-auto">
                  <Link href="/work" className="w-max flex flex-col justify-start bg-transparent border border-[#0d0d0d] text-[#0d0d0d] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939] group">
                    <div className="w-auto flex gap-[10px]">
                      <p className="text-sm font-Plus_Jakarta_Sans ">MORE ABOUT ME</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#0d0d0d' className="group-hover:fill-[#E9E9E7] group-hover:text-[#E9E9E7]"><g color='#0d0d0d' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="contents">
                <div className="aspect-[1/1] flex-none h-[200px] overflow-visible relative w-[200px]">
                  <div className="absolute rounded-inherit inset-0">
                    <img loading="lazy" className="block w-full h-full rounded-inherit object-center object-cover" src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735989459/IMG_8531_aerspw.webp" alt="imgself" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0d0d0d] flex-none h-px overflow-hidden relative w-full"></div>
          <div className="flex flex-row flex-nowrap items-start justify-center gap-[50px] h-min overflow-hidden p-0 relative w-full">
            <div className="flex items-center flex-1 flex-col gap-2.5 h-min justify-center overflow-hidden p-0 relative w-[1px]">
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h2 className="text-2xl text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">AI Engineer</h2>
              </div>
              <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h3 className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">Crafting practical AI solutions that address real-world challenges and unlock new opportunities.</h3>
              </div>
            </div>
            <div className="flex items-center flex-1 flex-col gap-2.5 h-min justify-center overflow-hidden p-0 relative w-[1px]">
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h2 className="text-2xl text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">Enterpreneur</h2>
              </div>
              <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h3 className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">Building ventures that bridge technology and business, with a focus on creating meaningful, scalable products.</h3>
              </div>
            </div>
            <div className="flex items-center flex-1 flex-col gap-2.5 h-min justify-center overflow-hidden p-0 relative w-[1px]">
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h2 className="text-2xl text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">AI Consultant</h2>
              </div>
              <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h3 className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">Helping businesses unlock the potential of AI, offering tailored strategies to enhance operations and foster growth.</h3>
              </div>
            </div>
            <div className="flex items-center flex-1 flex-col gap-2.5 h-min justify-center overflow-hidden p-0 relative w-[1px]">
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h2 className="text-2xl text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">Tech Mentor</h2>
              </div>
              <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h3 className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">Empowering the next generation of innovators by sharing knowledge in Python, data science, and AI.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Part THREE */}
      <div id="partThree" className="flex-none bg-[#0d0d0d] flex flex-row gap-2.5 h-min justify-center overflow-hidden px-10 py-[100px] relative w-full">
        <div className="flex items-center flex-[1_0_0px] flex-col gap-[50px] h-min justify-center max-w-[1200px] overflow-hidden p-0 relative w-[1px]">
          <div className="flex flex-row justify-between h-min overflow-hidden px-0 relative w-full">
            <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative w-[500px] whitespace-pre-wrap break-words">
              <h2 className="text-[36px] text-[#e9e9e7] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">Take a Look at My AI Portfolio</h2>
            </div>
            <div className="flex-none h-auto relative w-auto">
              <Link href="/work" className="w-max flex flex-col justify-start bg-[#E9E9E7] text-[#000] transform transition-all duration-700 ease-out px-5 py-[10px] hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939]">
                <div className="w-auto">
                  <p className="text-sm font-Plus_Jakarta_Sans ">BROWSE ALL</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-[rgba(233,233,231,0.5)] flex-none h-[1px] overflow-hidden relative w-full"></div>
          <div className="flex items-center flex-none flex-col gap-[40px] h-min justify-center overflow-hidden p-0 relative w-full">
            {profolio.map((data, index) => (<>             
              <div key={data.id} className="flex-none h-auto relative w-full group">
                <div className="contents">
                  <div className="flex items-start cursor-pointer flex-row flex-nowrap gap-[50px] h-min justify-center overflow-hidden p-0 relative w-full opacity-100">
                    <div className="flex items-start self-stretch flex-col flex-nowrap h-auto justify-between overflow-hidden p-0 relative w-1/3">
                      <div className="flex items-center flex-col flex-nowrap gap-5 h-min justify-center overflow-hidden p-0 relative w-full">
                        <div className="flex items-center flex-col flex-nowrap gap-2 h-min justify-center overflow-hidden p-0 relative w-full">
                          <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                            <h2 className="text-[32px] text-[#e9e9e7] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">{data.heading}</h2>
                          </div>
                          <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                            <h3 className="text-[20px] text-[#e9e9e7] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">{data.subHeading}</h3>
                          </div>
                        </div>
                        <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                          <p className="text-[20px] text-[#e9e9e780] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">{data.date}</p>
                        </div>
                      </div>
                      <div className="flex-none h-auto relative w-auto">
                        <Link href={data.link} className="w-max flex flex-col justify-start bg-transparent border border-[#E9E9E7] text-[#E9E9E7] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939]">
                          <div className="w-auto flex gap-[10px]">
                            <p className="text-sm font-Plus_Jakarta_Sans ">ABOUT PROJECT</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#E9E9E7'><g color='#E9E9E7' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center aspect-[1.6/1] flex-1 flex-row gap-2.5 justify-center overflow-hidden p-0 relative w-[1px] opacity-100">
                      <div className="flex-none h-[110%] overflow-hidden relative w-[110%] transform-none origin-[50%_50%_0px] group-hover:scale-[0.92] duration-700">
                        <div className="absolute rounded-inherit top-0 right-0 bottom-0 left-0">
                          <img sizes="calc(max(min(1100px, 100vw) * 0.6818 - 50px, 0px) * 1.1)" className="block w-full h-full rounded-inherit object-center object-cover" src={data.imageLink} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {profolio.length !== index + 1 && <div className="bg-[rgba(233,233,231,0.5)] flex-none h-[1px] overflow-hidden relative w-full"></div>}
            </>))}
          </div>
        </div>
      </div>
      {/* Part Four */}
      <div id="partFour" className="flex flex-none flex-row flex-nowrap items-center justify-center gap-2 bg-[#e9e9e7] h-min w-full overflow-hidden p-[100px_40px] relative">
        <div className="flex flex-nowrap items-start justify-center gap-[50px] flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]">
          <div className="flex-1 h-auto relative whitespace-pre-wrap w-[1px] break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none">
            <h2 className="text-[36px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Graduated with a Bachelor of Applications from the School of Management Sciences in my hometown, Varanasi, a tier-3 city.</h2>
          </div>
          <div className="flex items-center flex-1 flex-col gap-8 h-min justify-center overflow-hidden p-0 relative w-[1px]">
            <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none">
              <p className="text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">With 4 years of experience, I’ve worked on personal projects, supported startups, and contributed to large MNCs. My journey has involved developing AI solutions, building innovative tech products, and helping businesses optimize their operations. Whether working on small-scale projects or large corporate initiatives, I've gained valuable insights that allow me to adapt and create meaningful impact across different sectors.</p>
            </div>
            <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words word-wrap outline-none flex flex-col justify-start flex-shrink-0 transform-none">
              <h3 className="text-2xl text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Here are some of the companies I’ve had the privilege to work with:</h3>
            </div>
            <div className="flex-none h-auto relative w-full">
              <div className="flex items-center flex-col flex-wrap-nowrap gap-0 h-min justify-center overflow-hidden p-0 relative w-full transform-none transform-origin-[50%_50%_0px]">
                {companiesData.map((data) => (<div key={data.id} className="flex-none h-auto relative w-full transform-none transform-origin-[50%_50%_0px]">
                  <div className="flex cursor-pointer flex-col gap-0 h-min justify-center overflow-hidden p-0 relative bg-transparent w-full transform-none transform-origin-[50%_50%_0px] opacity-100">
                    <div className="flex-none items-start flex flex-row gap-2.5 h-min justify-center overflow-hidden p-2.5 relative w-full transform-none transform-origin-[50%_50%_0px] opacity-100">
                      <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none transform-origin-[50%_50%_0px] opacity-100 flex-[1_0_0px] h-auto relative whitespace-pre-wrap w-[1px] break-words">
                        <h2 className="text-xl text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">{data.companyName}</h2>
                      </div>
                      <div className="items-center cursor-pointer flex flex-none flex-row flex-nowrap gap-2.5 h-[44px] justify-center overflow-hidden p-0 relative w-[44px] will-change-[none,_transform] bg-transparent rounded-full transform-none transform-origin-[50%_50%_0px]">
                        <div className="flex-none h-[28px] relative w-[28px] transform-none transform-origin-[50%_50%_0px] will-change-transform">
                          <div className="contents">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" fill='#0d0d0d'><g color='#0d0d0d' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-[1px] overflow-hidden relative w-full bg-[rgba(13,13,13,0.5)] transform-none transform-origin-[50%_50%_0px] opacity-100" />
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
      <Footer />
    </div>
  );
}