import Image from "next/image";
import React from "react";
import { IoSparklesSharp } from "react-icons/io5";
import PlanetImage from '../public/assets/images/planet.png'
import GalaxyImage from '../public/assets/images/Galaxy.png'
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <div className="bg-white relative text-black min-h-[40rem] flex items-center z-50">
            <div className="absolute -z-30 right-[40px]">
                <Image
                    className=" object-cover rounded-full"
                    src={PlanetImage}
                    alt="Hero Image"
                    width={500}
                    height={500}
                />
            </div>
            <div className="absolute -z-30 top-48">
                <Image
                    className=" object-cover rounded-full"
                    src={GalaxyImage}
                    alt="Hero Image"
                    width={500}
                    height={500}
                />
            </div>
            <div className=" container mx-auto px-6 lg:px-8 text-center z-50">
                <div className="flex justify-center">
                    <span className="text-sm bg-[linear-gradient(to_right,#F87BFF,#C2F0B1,#2FD8FE)] `rounded-[calc(1.5rem-1px)]` rounded-full p-0.5 text-gray-600 mb-5">
                        <div className="flex flex-row items-center gap-2 h-full bg-white py-2 px-8 rounded-full">
                            <IoSparklesSharp />
                            <p>
                                Introducing WoodGrain AI - <a className="font-bold text-black underline underline-offset-4" href="/">Try Demo</a>
                            </p>
                        </div>
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white md:text-black">
                        Your business <br /> Beautifully Online
                    </h1>
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="bg-[#26152f] shadow-[0_0_30px_rgba(255,255,255,0.5)] rounded-full text-white px-4 py-3 sm:px-6 sm:py-3 font-bold">
                        Explore our work
                    </button>
                    <button className="bg-[#26152f] shadow-[0_0_30px_rgba(255,255,255,0.5)] rounded-full text-white px-4 py-3 sm:px-6 sm:py-3 font-bold">
                        See Pricing
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
