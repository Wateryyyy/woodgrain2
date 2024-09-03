import React from 'react'
import NavBar from './NavBar'

const CareerSection = () => {
    return (
        <div>
            <div className='bg-white text-black'>
                <div className='h-[40rem] container flex items-center justify-center text-center mx-auto'>
                    <div className='flex flex-col gap-14 px-6'>
                        <h1 className='text-5xl font-bold'>No jobs available, Please try again later.</h1>
                        <a className='bg-[#26152f] shadow-[0_0_30px_rgba(255,255,255,0.5)] rounded-full text-white px-4 py-3 sm:px-6 sm:py-3 font-bold' href="/community-projects">
                            Join our community projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerSection