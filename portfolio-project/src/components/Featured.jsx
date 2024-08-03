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
            <section  className='w-full min-h-screen featured'>
                <div className="featuredTitle flex items-normal justify-center gap-3 mb-32">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={70}>
                        <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.104478)"><path d="M232,64a8,8,0,0,1-8,8H88V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L72,188.69V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z"></path></g></svg>
                    <p className='intro_2 text-[60px] mb-5 text-black  italic  '>Featured works</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={70}>
                        <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.810968)"><path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L168,188.69V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path></g>

                    </svg>
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