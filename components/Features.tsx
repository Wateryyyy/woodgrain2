'use client'

import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const features = [
        {
            title: "Custom Web Development",
            description: "Tailored solutions to bring your vision to life with responsive and scalable web development.",
            detailedDescription: "We specialize in full-stack solutions, building responsive websites that are visually stunning and highly functional, ensuring optimal performance and scalability."
        },
        {
            title: "UI/UX Design",
            description: "Crafting intuitive and visually appealing designs that engage and retain users.",
            detailedDescription: "Our UI/UX design is centered on user research, wireframing, and prototyping to create seamless, aesthetic user journeys."
        },
        {
            title: "SEO & Digital Marketing",
            description: "Strategies to boost your online presence and drive targeted traffic to your site.",
            detailedDescription: "We create a comprehensive SEO and digital marketing strategy to increase your visibility and traffic with on-page SEO, content marketing, and more."
        },
        {
            title: "Hosting & Maintenance",
            description: "Reliable hosting and ongoing maintenance to ensure your website is always at its best.",
            detailedDescription: "Our hosting services include regular updates, performance optimization, security checks, and 24/7 support to keep your website running smoothly."
        },
        {
            title: "Web Security",
            description: "Robust security measures to protect your website and user data from cyber threats.",
            detailedDescription: "We offer SSL certificates, firewalls, and security audits to safeguard your website, ensuring full protection from threats and compliance with regulations."
        },
        {
            title: "Innovative Technologies",
            description: "Leveraging cutting-edge technologies to create future-ready digital experiences.",
            detailedDescription: "We integrate technologies like AI, blockchain, and AR/VR into your projects to create modern, future-proof digital experiences."
        }
    ];

    return (
        <div id='features' className='bg-white text-black mt-36'>
            <div className='container mx-auto p-4 md:p-8'>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text text-lg md:text-xl font-semibold">
                        We Help You Create Beauty
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold mt-4">Our Commitment to Excellence</h1>
                </motion.div>

                <div className='grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            ref={ref}
                        >
                            <h2 className="text-xl font-semibold mb-3">{feature.title}</h2>
                            <p className="text-gray-700 text-sm md:text-base mb-4">
                                {feature.description}
                            </p>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <button
                                        className="text-indigo-600 hover:underline"
                                        onClick={() => setSelectedFeature(feature.detailedDescription)}
                                    >
                                        Learn More
                                    </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className='w-[24rem] md:w-full'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className='text-lg md:text-2xl underline underline-offset-8 mb-4'>
                                            {feature.title}
                                        </AlertDialogTitle>
                                        <AlertDialogDescription className='text-black/70 text-sm md:text-md'>
                                            {selectedFeature}
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogAction onClick={() => setSelectedFeature(null)}>Close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
