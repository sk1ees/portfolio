import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './component.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'framer-motion';
const FirstPage = () => {
    useGSAP(() => {
        // write here gsap code
        gsap.from('.intro_2', {
            opacity: 0,
            y: 50,
            duration: 2,
            delay: 0.5,
            stagger: 0.1,

        });

        gsap.from('.intro_1', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.1,
            stagger: 0.1,
        })
        gsap.from('.quote', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.1,

        })
        gsap.from('.quoteRight', {
            opacity: 0,
            y: 50,
            duration: 0.5,

            stagger: 0.1,
        })


    })

    return (
        <section className='firstpage w-full h-[90vh]'>

            <nav className='flex justify-between p-4'>
                <h1 className='title text-xl '>sk1ees</h1>
                <h1 className='text-3xl'><RxHamburgerMenu /></h1>
            </nav>

            <div className="intro w-full h-[23rem]  text-center leading-[1.5] flex justify-center items-center">
                <div className="wrapper">

                    <p className='intro_1 text-[23px] text-black '>deep is a</p>
                    <p className='intro_2 text-[82px] mb-5 text-black font-normal italic '>


                        {"web developer*".split('').map((item, index) =>
                        (
                            <motion.span

                                initial={{ y: "100%", opacity: "0%", duration: 5 }}
                                animate={{ y: "0%", opacity: "100%", duration: 5 }}
                                transition={{ delay: index * .10, repeat: Infinity, duration: 3 }}

                                className='intro_2'
                                key={index}>

                                {item}

                            </motion.span>
                        )

                        )}
                    </p>

                </div>

            </div>
            <div className="frontDetails  w-[80%] ">

                <div className="quote text-left">
                    <p>*foremost a creative guy</p>
                </div>

                <div className="quote text-center">

                </div>
                <div className="quote   text-right flex flex-col gap-2">
                    <p className='quoteRight'>9:48 PM</p>
                    <p className='quoteRight'>Remote &</p>
                    <p className='quoteRight'>Available for Freelance</p>
                    <div className="btn">

                        <button className='quoteRight p-2  border-none w-32 float-right items-end rounded-md bg-[#E95011] text-white'>Get in Touch</button>
                    </div>
                </div>

            </div>




        </section >

    )


}

export default FirstPage