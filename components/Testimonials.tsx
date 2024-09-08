/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "This company exceeded our expectations with their professionalism and attention to detail. Highly recommended!",
        name: "Hunter Wood",
        position: "CEO, WoodGrain Inc",
    },
    {
        quote: "The team delivered exceptional results on time and on budget. Their expertise was evident throughout the project.",
        name: "Cody Reed",
        position: "Founder & CEO, Native Marine Detail",
    },
    {
        quote: "Their innovative approach and commitment to quality made a significant impact on our project's success.",
        name: "Mark Samsun",
        position: "Marketing Director, Meta",
    },
];

const Testimonials = () => {
    return (
        <div id='testimonials' className='bg-white text-black mt-36'>
            <div className='container p-4 md:p-8 mx-auto'>
                <div className="flex items-center justify-center mb-6">
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text text-lg md:text-xl font-semibold">
                        Testimonials
                    </span>
                </div>
                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-center mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Don't just take our word for it
                </motion.h1>
                <div className='flex flex-wrap gap-6 justify-center'>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className='bg-gray-100 p-6 rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <p className='text-gray-700 mb-4'>
                                "{testimonial.quote}"
                            </p>
                            <p className='font-semibold text-gray-900'>{testimonial.name}</p>
                            <p className='text-gray-500'>{testimonial.position}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
