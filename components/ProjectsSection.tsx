'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AIImage from "../public/assets/images/aisite.png";
import NativeImage from "../public/assets/images/native.png";
import YoomImage from "../public/assets/images/yoom.png";
import ImageModal from "./ImageModal"; // Import the modal component
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectsSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { scrollYProgress } = useScroll();

    // Parallax effect for heading text
    const parallaxX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    const openModal = (image: string) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="bg-white text-black mt-36 relative">
            {/* Background Gradient for Visual Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30 z-[-1]" />

            <div className="container flex flex-col mx-auto justify-center items-center px-8">
                <motion.div
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text text-lg md:text-xl font-semibold">
                            We make beauty come alive
                        </span>
                    </motion.div>
                    <motion.h1
                        className="text-5xl font-bold mt-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        Who we work with
                    </motion.h1>
                </motion.div>

                {/* Projects Section with Staggered Scroll Animations */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl items-center mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.3 },
                        },
                        hidden: { opacity: 0 },
                    }}
                >
                    {[
                        { src: AIImage, title: "AI Landing Page", link: "/", buttonColor: "bg-purple-600" },
                        { src: NativeImage, title: "Native Marine Detailing", link: "https://nativemarinedetail.com/", buttonColor: "bg-teal-600" },
                        { src: YoomImage, title: "Yoom - ZOOM Clone", link: "https://conference-pearl.vercel.app", buttonColor: "bg-pink-600" }
                    ].map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
                        >
                            <Image
                                src={project.src}
                                alt={project.title}
                                width={600}
                                height={350}
                                className="rounded-lg shadow-lg cursor-pointer object-cover"
                                onClick={() => openModal(project.src.src)}
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-lg">
                                <h2 className="text-white text-2xl font-bold">{project.title}</h2>
                                <Link href={project.link}>
                                    <button className={`${project.buttonColor} text-white px-4 py-2 mt-4 rounded-lg`}>
                                        Live Website
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ImageModal
                src={selectedImage!}
                alt="Selected Project Image"
                isOpen={selectedImage !== null}
                onClose={closeModal}
            />
        </div>
    );
};

export default ProjectsSection;
