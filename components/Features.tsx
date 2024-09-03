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

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

    const features = [
        {
            title: "Custom Web Development",
            description: "Tailored solutions that bring your vision to life with responsive and scalable web development.",
            detailedDescription: "Our custom web development services include everything from front-end and back-end development to full-stack solutions. We specialize in creating websites that are not only visually stunning but also highly functional, ensuring optimal performance and scalability. Whether you need a simple landing page or a complex web application, we have the expertise to deliver results that exceed your expectations."
        },
        {
            title: "UI/UX Design",
            description: "Crafting intuitive and visually appealing designs that engage and retain users.",
            detailedDescription: "Our UI/UX design process is centered around the user. We conduct thorough research and create personas to understand the needs of your target audience. Our designers then craft wireframes and prototypes to map out the user journey, ensuring that every interaction is seamless and engaging. We focus on both aesthetics and usability, creating interfaces that are not only beautiful but also easy to navigate."
        },
        {
            title: "SEO & Digital Marketing",
            description: "Strategies to boost your online presence and drive targeted traffic to your site.",
            detailedDescription: "Our SEO and digital marketing services are designed to increase your online visibility and drive more traffic to your website. We use a combination of on-page SEO techniques, content marketing, social media integration, and paid advertising to create a comprehensive digital marketing strategy that delivers results. Our goal is to help you reach your target audience and convert visitors into loyal customers."
        },
        {
            title: "Hosting & Maintenance",
            description: "Reliable hosting and ongoing maintenance to ensure your website is always at its best.",
            detailedDescription: "We offer reliable hosting services that keep your website up and running smoothly, with minimal downtime. Our maintenance packages include regular updates, security checks, and performance optimization to ensure that your website remains secure, fast, and up-to-date. We also offer 24/7 support to address any technical issues that may arise, giving you peace of mind knowing that your website is in good hands."
        },
        {
            title: "Web Security",
            description: "Robust security measures to protect your website and user data from cyber threats.",
            detailedDescription: "Our web security services are designed to protect your website from cyber threats such as hacking, malware, and data breaches. We implement SSL certificates, firewalls, and regular security audits to ensure that your website is secure. We also offer GDPR compliance services to help you meet data protection regulations and protect your users' privacy."
        },
        {
            title: "Innovative Technologies",
            description: "Leveraging cutting-edge technologies to create future-ready digital experiences.",
            detailedDescription: "We stay at the forefront of technology to bring you the latest and most innovative solutions. From AI and machine learning to blockchain and AR/VR, we integrate cutting-edge technologies into your projects to create digital experiences that are not only modern but also future-proof. Whether you want to explore new technologies or enhance your existing digital assets, we can help you stay ahead of the curve."
        }
    ];

    return (
        <div className='bg-white text-black mt-36'>
            <div className='container p-4 md:p-8 mx-auto'>
                <div className="flex items-center justify-center mb-6">
                    <span className="bg-[linear-gradient(to_right,#F87BFF,#26152f,#F87BFF)] text-transparent bg-clip-text text-lg md:text-1xl font-semibold">
                        We Help You Create Beauty
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
                    Our Commitment to Excellence
                </h1>
                <div className='grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index) => (
                        <div key={index} className='flex flex-col justify-center text-center gap-3 md:gap-5'>
                            <h2 className="text-lg md:text-xl font-semibold">{feature.title}</h2>
                            <p className="text-sm md:text-base text-gray-600">
                                {feature.description}
                            </p>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <button
                                        className="text-indigo-600 hover:underline"
                                        onClick={() => setSelectedFeature(feature.detailedDescription)}
                                    >
                                        Read More
                                    </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className='w-[24rem] md:w-full'>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className='text-lg md:text-2xl underline underline-offset-8 mb-4'>{feature.title}</AlertDialogTitle>
                                        <AlertDialogDescription className='text-black/70 text-sm md:text-md'>
                                            {selectedFeature}
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogAction onClick={() => setSelectedFeature(null)}>Close</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
