/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AIImage from "../public/assets/images/aisite.png";
import NativeImage from "../public/assets/images/native.png";
import YoomImage from "../public/assets/images/yoom.png";

const ProjectsSection = () => {
    return (
        <div className="bg-white text-black mt-20">
            <div className="container p-8 mx-auto">
                <div className="flex items-center justify-center">
                    <span className="bg-[linear-gradient(to_right,#F87BFF,#26152f,#F87BFF)] text-transparent bg-clip-text ">
                        We make beauty come alive
                    </span>
                </div>
                <h1 className="text-5xl font-bold text-center mb-10">
                    Who we work with
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center text-center gap-14 mx-auto max-w-7xl">
                    <div className="bg-[linear-gradient(to_right,#F87BFF,#C2F0B1,#2FD8FE)] rounded-md p-[0.1rem]">
                        <div className="bg-white rounded-md flex flex-col justify-center items-center py-8">
                            <Image
                                src={AIImage}
                                className="mb-5 px-4"
                                alt="Project Image 1"
                                width={500}
                                height={250}
                            />
                            <h1 className="text-2xl font-bold">AI Landing Page</h1>
                            <p className="text-lg text-black/80 p-8">
                                WoodGrain developed a dark-themed AI SaaS landing page that
                                combines sleek design with user-focused functionality. The site
                                highlights the platform's capabilities while reflecting the
                                brand's modern aesthetic. This project showcases WoodGrain's
                                ability to deliver high-quality, visually appealing web
                                solutions.
                            </p>
                            <div className="flex flex-row gap-14">
                                <button className="bg-[#26152f] text-white px-4 py-2 rounded-full">
                                    <Link href="/">Live Website</Link>
                                </button>
                                <button className="bg-[#26152f] text-white px-4 py-2 rounded-full">
                                    <Link href="/">Source Code</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[linear-gradient(to_right,#F87BFF,#C2F0B1,#2FD8FE)] rounded-md p-[0.1rem]">
                        <div className="bg-white rounded-md flex flex-col justify-center items-center py-8">
                            <Image
                                src={NativeImage}
                                className="mb-5 px-4"
                                alt="Project Image 1"
                                width={500}
                                height={250}
                            />
                            <h1 className="text-2xl font-bold">Native Marine Detailing</h1>
                            <p className="text-lg text-black/80 p-8">
                                WoodGrain crafted a site for Native Marine Detailing, a boat
                                detailing and rental company. The site showcases their services
                                with a clean, nautical design, enhancing user experience and
                                reflecting the brand's coastal vibe. This project highlights
                                WoodGrain's skill in creating tailored, visually appealing web
                                solutions for niche markets.
                            </p>
                            <div className="flex flex-row gap-14">
                                <button className="bg-[#26152f] text-white px-4 py-2 rounded-full">
                                    <Link href="/">Live Website</Link>
                                </button>
                                <button className="bg-[#26152f] text-white px-4 py-2 rounded-full">
                                    <Link href="/">Source Code</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[linear-gradient(to_right,#F87BFF,#C2F0B1,#2FD8FE)] rounded-md p-[0.1rem]">
                        <div className="bg-white rounded-md flex flex-col justify-center items-center py-8">
                            <Image
                                src={YoomImage}
                                className="mb-5 px-4"
                                alt="Project Image 1"
                                width={500}
                                height={250}
                            />
                            <h1 className="text-2xl font-bold">Yoom - ZOOM Clone</h1>
                            <p className="text-lg text-black/80 p-8">
                                WoodGrain developed Yoom, a Zoom clone designed for seamless
                                video conferencing. The platform features a clean, intuitive
                                interface with robust functionality, offering users a reliable
                                alternative for virtual meetings. This project underscores
                                WoodGrain's expertise in building scalable, user-friendly
                                communication platforms, and tools.
                            </p>
                            <div className="flex flex-row gap-14">
                                <button className="bg-[#26152f] text-white px-4 py-2 rounded-full">
                                    <Link href="/">Live Website</Link>
                                </button>
                                <button className="bg-[#26152f] text-white px-4 py-2 rounded-full">
                                    <Link href="/">Source Code</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
