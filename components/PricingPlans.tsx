"use client";
import { CiCircleCheck } from "react-icons/ci";
import { IoPricetagSharp } from "react-icons/io5";
import React from 'react';
import { motion } from 'framer-motion';
import Footer from "./Footer";

const pricingPlans = [
    {
        title: "One Page Site",
        description: "A single page application that will include 4-6 sections of your choice. We will request information at booking and then provide a direct contact line to the developer.",
        included: [
            "Sleek Animations and Features.",
            "Responsive design optimized for all devices.",
            "Optimized SEO and performance.",
            "Simple contact form with submissions.",
            "Google Analytics for tracking web flow.",
            "Contact the developer directly."
        ],
        pricing: [
            "Price: $1,000",
            "Maintenance: $50 / Month",
            "Hosting & Licensing: $100 / Month"
        ],
        buttonLabel: "Choose this Plan"
    },
    {
        title: "Multi Page Site",
        description: "A multi-page website with extensive features tailored to your needs. Ideal for businesses or individuals requiring a comprehensive online presence.",
        included: [
            "Custom layouts for each page.",
            "Enhanced SEO features for each page.",
            "Advanced forms and contact options.",
            "Google Analytics and performance tracking.",
            "Monthly updates and optimizations.",
            "Ongoing support and maintenance."
        ],
        pricing: [
            "Price: $2,500",
            "Maintenance: $100 / Month",
            "Hosting & Licensing: $200 / Month"
        ],
        buttonLabel: "Choose this Plan",
        popular: true // Indicates the most popular plan
    },
    {
        title: "Application",
        description: "A full-fledged application tailored to your business needs. This includes everything from backend development to frontend design.",
        included: [
            "Custom application design and development.",
            "Integration with existing systems.",
            "Scalable architecture and infrastructure.",
            "Performance optimizations.",
            "Comprehensive testing and QA.",
            "Direct chat with the development team."
        ],
        pricing: [
            "Price: $5,000+",
            "Maintenance: $200 / Month",
            "Hosting & Licensing: Custom Pricing"
        ],
        buttonLabel: "Choose this Plan"
    }
];

const Page = () => {
    return (
        <>
            <div className='bg-white text-black'>
                <div className="container mx-auto">
                    <motion.div
                        className='container min-h-screen py-8 px-4'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className='text-center py-4'>
                            <motion.h1
                                className='text-4xl md:text-5xl font-bold'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Pricing Plans
                            </motion.h1>
                            <motion.p
                                className='text-lg mt-5'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            >
                                Select a plan below to get started with WoodGrain today!
                            </motion.p>
                        </div>
                        <motion.div
                            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8 text-white'
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {pricingPlans.map((plan, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative border border-white/20 rounded-lg p-6 md:p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out`}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {plan.popular && (
                                        <div className="absolute top-0 right-0 bg-blue-700 text-white text-xs px-2 py-1 rounded-bl-lg">
                                            Most Popular
                                        </div>
                                    )}
                                    <h1 className='text-2xl md:text-4xl font-bold'>{plan.title}</h1>
                                    <p className='mt-4 md:mt-5 text-sm md:text-base max-w-sm mx-auto border-b border-white/20 p-2'>{plan.description}</p>
                                    <div className='font-bold'>
                                        <h1 className='text-start text-lg py-4'>Included</h1>
                                        <ul className='flex flex-col gap-2.5 text-start'>
                                            {plan.included.map((item, i) => (
                                                <li key={i} className='inline-flex items-center gap-2.5'>
                                                    <CiCircleCheck className='text-blue-400 size-6' /> <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='font-bold'>
                                        <h1 className='text-start text-lg py-4'>Pricing</h1>
                                        <ul className='flex flex-col gap-2.5 text-start'>
                                            {plan.pricing.map((price, i) => (
                                                <li key={i} className='inline-flex items-center gap-2.5'>
                                                    <IoPricetagSharp className='text-blue-300 size-6' /><span>{price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='py-4'>
                                        <motion.button
                                            whileHover={{ scale: 1.1, backgroundColor: '#2563eb', color: '#fff' }}
                                            whileTap={{ scale: 0.95 }}
                                            className='bg-white text-black rounded-lg px-6 py-2 w-full transition-colors duration-200 ease-in-out'
                                        >
                                            {plan.buttonLabel}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Page;
