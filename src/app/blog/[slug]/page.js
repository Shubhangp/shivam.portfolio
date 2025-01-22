import HeaderStatic from "@/components/HeaderStatic";
import { blogs } from "@/server/data";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const { slug } = params;

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
            description: 'The requested blog does not exist.',
            openGraph: {
                title: 'Blog Not Found',
                description: 'The requested blog does not exist.',
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Blog Not Found',
                description: 'The requested blog does not exist.',
            },
        };
    }

    const excerpt = blog.content.split(' ').slice(0, 10).join(' ') + '...';

    return {
        title: blog.blogHeading,
        description: `${excerpt}`,
        openGraph: {
            title: blog.blogHeading,
            description: `${excerpt}`,
            images: [
                {
                    url: blog.imageUrl,
                    alt: blog.blogHeading,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.blogHeading,
            description: `${excerpt}`,
            images: [blog.imageUrl],
        },
    };
}

const BlogReadPage = ({ params }) => {
    const { slug } = params;
    

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    const randomBlogs = blogs.filter(b => b.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div className="bg-[#e9e9e7] w-full flex flex-col items-center">
            <div className='w-full border-b border-[#0d0d0d]'>
                <HeaderStatic />
            </div>

            <div className="flex flex-none flex-row items-center place-content-center gap-2.5 h-min overflow-hidden lg:md:py-[30px] py-5 lg:md:px-10 px-5 relative w-full">
                <div className="content-center flex items-center justify-start flex-[1_0_0px] gap-[5px] h-min max-w-[1200px] overflow-hidden p-0 relative w-px">
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">
                            <Link href='/'>Home</Link>
                        </p>
                    </div>
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">/</p>
                    </div>
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">
                            <Link href='/blog'>Blog</Link>
                        </p>
                    </div>
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">/</p>
                    </div>
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">{blog.blogHeading}</p>
                    </div>
                </div>
            </div>

            <div className="content-center flex flex-col items-center justify-start flex-none gap-10 h-min max-w-[1000px] lg:md:pt-10 pt-5 lg:md:px-10 px-5 lg:md:pb-20 pb-10 relative w-full">
                <div className="flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                    <h1 className="lg:md:text-[42px] text-[32px] text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">{blog.blogHeading}</h1>
                </div>
                <div className="flex flex-row items-center place-content-center flex-none lg:md:gap-5 gap-[10px] h-min overflow-hidden p-0 relative w-full">
                    <div className="flex flex-col items-center place-content-center flex-grow gap-[5px] h-min overflow-hidden p-0 relative w-px">
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-sm text-[#0d0d0d] tracking-[0.08em] leading-[1.1em] font-Plus_Jakarta_Sans font-medium">
                                POSTED BY
                            </p>
                        </div>
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-base text-[#0d0d0d80] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">
                                {blog.postedBy}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center place-content-center flex-grow gap-[5px] h-min overflow-hidden p-0 relative w-px">
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-sm text-[#0d0d0d] tracking-[0.08em] leading-[1.1em] font-Plus_Jakarta_Sans font-medium">
                                POSTED AT
                            </p>
                        </div>
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-base text-[#0d0d0d80] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">
                                {blog.postedAt}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center place-content-center flex-grow gap-[5px] h-min overflow-hidden p-0 relative w-px">
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-sm text-[#0d0d0d] tracking-[0.08em] leading-[1.1em] font-Plus_Jakarta_Sans font-medium">
                                POSTED ON
                            </p>
                        </div>
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-base text-[#0d0d0d80] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">
                                {blog.postedOn}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full flex-none lg:md:h-[600px] h-[auto_350px] aspect-[1.53333/1]">
                    <div className="absolute inset-0">
                        <img className="block w-full h-full rounded-inherit object-center object-cover" src={blog.image} />
                    </div>
                </div>
                <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                    <p className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">{blog.content}</p>
                </div>
            </div>

            <div className="flex flex-row items-center place-content-center flex-none gap-2.5 h-min overflow-hidden lg:md:p-[100px_40px] p-[60px_20px] relative w-full">
                <div className="flex flex-col items-center place-content-center flex-1 lg:md:gap-[50px] gap-[30px] h-min max-w-[1200px] overflow-hidden p-0 relative w-px">
                    <div className="content-end flex flex-row items-end justify-center flex-none gap-[30px] h-min overflow-hidden p-0 relative w-full">
                        <div className="flex flex-col justify-start flex-1 flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-px break-words overflow-wrap-anywhere outline-none">
                            <h2 className="lg:md:text-4xl text-[28px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Related Post</h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center place-content-center flex-none gap-7.5 h-min overflow-hidden p-0 relative w-full">
                        <div className='flex-[1_0_0px] grid lg:md:grid-cols-[repeat(3,minmax(100px,_1fr))] grid-cols-[repeat(1,minmax(100px,_1fr))] auto-rows-min gap-10 justify-items-center h-min p-0 relative w-[1px]'>
                            {randomBlogs.map((data, index) => (<div key={index} className='self-start flex-none h-auto relative w-full group'>
                                <div className='place-content-center items-center cursor-pointer flex flex-col gap-8 h-min overflow-hidden p-0 relative w-full opacity-100'>
                                    <Link href={`/blog/${data.slug}`} className='place-content-center items-center aspect-[1.32707/1] flex flex-row gap-2.5 h-[266px] overflow-hidden p-0 relative no-underline w-full'>
                                        <div className='flex-none h-[115%] overflow-hidden relative w-[115%] transform-none origin-center group-hover:scale-[0.92] duration-500'>
                                            <div className='absolute rounded-none inset-0'>
                                                <img className='block w-full h-full rounded-none object-center object-cover' src={data.image} alt='blogImage' />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='content-start items-start justify-center flex flex-col gap-5 h-min overflow-hidden p-0 relative w-full'>
                                        <div className='flex flex-col flex-shrink-0 justify-start flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none transform-none opacity-100'>
                                            <p className='text-base text-[#0d0d0d80] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>{data.postedOn}</p>
                                        </div>
                                        <div className='flex flex-col justify-start flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none transform-none opacity-100'>
                                            <h5 className='lg:md:text-2xl text-[20px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{data.blogHeading}</h5>
                                        </div>
                                        <div className=''>
                                            <Link href={`/blog/${data.slug}`} className="w-max flex flex-col justify-start bg-[#0d0d0d] text-[#e9e9e7] transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:bg-[#EB5939]">
                                                <div className="w-auto">
                                                    <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">READ MORE</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogReadPage;