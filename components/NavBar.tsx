import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../public/assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href='/'>
                            <Image src={Logo} alt="Logo NavBar" width={220} height={100} priority />
                        </Link>
                    </div>
                    <div className='flex flex-row items-center'>
                        <ul className="hidden md:flex flex-row gap-8 text-lg items-center">
                            <li>
                                <Link href="/" aria-label="Home">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" aria-label="Home">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" aria-label="Pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" aria-label="Pricing">
                                    Careers
                                </Link>
                            </li>
                            <li className='bg-[#26152f] px-3 py-2 rounded-lg text-white'>
                                <Link href="/contact" aria-label="Contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <GiHamburgerMenu className='inline-flex md:hidden size-8' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar