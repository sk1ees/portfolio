import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Card from './Card';
const Featured = () => {
    useGSAP(() => {
        //write here gsap code
    })
    return (
        <>
            <section className='w-full min-h-screen featured' id='service'>
                <div className="featuredTitle flex items-normal justify-center  mb-32">
                 
                    <p className='intro_2 text-[60px] mb-5 text-black  italic  '>Featured works</p>
                   
                </div>

                <Card />
                <Card />
                <Card />

                <div className="featuredTitle text-center  leading-8 h-[70vh] flex flex-col items-center justify-center">

                    <p className='intro_2 text-[40px] mb-5 text-black  italic  '>More</p>
                    <p className='more text-[23px]'>From my most pixel-perfect work to the weird stuff I've <br /> done, here you'll get to see everything I'm proud of.</p>
                    <button className='p-2 px-6  border-none  rounded-md bg-[#E95011] text-white mb-32 mt-10'> = see all projects</button>
                </div>
            </section>


        </>
    )
}

export default Featured