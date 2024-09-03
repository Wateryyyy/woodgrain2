/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Testimonials = () => {
    return (
        <div className='bg-white text-black mt-36'>
            <div className='container p-4 md:p-8 mx-auto'>
                <div className="flex items-center justify-center mb-6">
                    <span className="bg-[linear-gradient(to_right,#F87BFF,#26152f,#F87BFF)] text-transparent bg-clip-text text-lg md:text-1xl font-semibold">
                        Testimonials
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
                    Don't just take our word for it
                </h1>
                <div className='flex flex-wrap gap-6 justify-center'>
                    {/* Testimonial Card 1 */}
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md max-w-sm'>
                        <p className='text-gray-700 mb-4'>
                            "This company exceeded our expectations with their professionalism and attention to detail. Highly recommended!"
                        </p>
                        <p className='font-semibold'>Hunter Wood</p>
                        <p className='text-gray-500'>CEO, WoodGrain Inc</p>
                    </div>
                    {/* Testimonial Card 2 */}
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md max-w-sm'>
                        <p className='text-gray-700 mb-4'>
                            "The team delivered exceptional results on time and on budget. Their expertise was evident throughout the project."
                        </p>
                        <p className='font-semibold'>Cody Reed</p>
                        <p className='text-gray-500'>Founder & CEO, Native Marine Detail</p>
                    </div>
                    {/* Testimonial Card 3 */}
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md max-w-sm'>
                        <p className='text-gray-700 mb-4'>
                            "The team delivered exceptional results on time and on budget. Their expertise was evident throughout the project."
                        </p>
                        <p className='font-semibold'>Mark Samsun</p>
                        <p className='text-gray-500'>Marketing Director, Meta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
