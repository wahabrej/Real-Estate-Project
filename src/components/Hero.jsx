import React from 'react'
import photo from '../assets/photo.jpg'

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center py-6">
            <div className="flex flex-wrep justify-between items-center">
                <div className="flex flex-col justify-center max-w-2xl ">
                    <span className='text-4xl mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text '>Mohammad Wahab</span>
                    <span className='mb-4 text-2xl bg-gradient-to-r from-indigo-500 text-transparent bg-clip-text'>Full Stack Engineer</span>
                    <p className='text-neutral-500 text-justify'>Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Quis animi perspiciatis 
                        mollitia itaque iusto repellendus repudiandae! 
                        Itaque quis magnam, debitis rerum veritatis molestias 
                        exercitationem, corporis aut temporibus nesciunt sit e
                        rror!
                        </p>
                </div>
                <div className="flex justify-center items-center max-w-3xl">
                    <img src={photo} alt="" className='border rounded-lg' />
                </div>
            </div>
        </div>
    )
}
