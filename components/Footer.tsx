import Image from "next/image";
import React from "react";
import FooterLogo from "../public/assets/images/download.webp";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-[#F87BFF] text-black mt-36">
            <div className="container p-8 mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 max-w-md">
                        <Image src={FooterLogo} alt="Footer Logo" width={128} />
                        <h1 className="text-sm">
                            At WoodGrain, we don’t just build websites—we create engaging
                            digital experiences tailored to your vision. Our expertise in custom
                            web development and user-focused design ensures every project is
                            both beautiful and functional. Whether you need a dynamic website or
                            a cutting-edge web application, we deliver solutions that resonate
                            with your audience and drive results. Trust WoodGrain to carve out
                            your digital future with precision and creativity.
                        </h1>
                    </div>
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <h1 className="text-lg font-semibold underline underline-offset-4">Quick Links</h1>
                        <ul className="flex flex-col gap-2 text-center md:text-left">
                            <li>
                                <Link href='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <h1 className="text-lg font-semibold underline underline-offset-4">Information</h1>
                        <p className="flex items-center gap-2">
                            <FaLocationDot />
                            New York, NY
                        </p>
                        <p className="flex items-center gap-2">
                            <FaPhone />
                            (607) 857 - 7341
                        </p>
                        <p className="flex items-center gap-2">
                            <MdEmail />
                            contact@woodgraindev.com
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-md text-center">
                        &copy; 2024 WoodGrain. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
