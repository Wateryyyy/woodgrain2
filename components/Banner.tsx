import React from 'react'

const Banner = () => {
    return (
        <div className='bg-[linear-gradient(to_right,#F87BFF,#C2F0B1,#2FD8FE)] py-2'>
            <div className='flex items-center justify-center text-center gap-2'>
                <h1 className='text-sm font-bold'>Redefine your business online - <span><a href="/pricing" className="underline font-semibold">Get Started Today</a></span></h1>
            </div>
        </div>

    )
}

export default Banner