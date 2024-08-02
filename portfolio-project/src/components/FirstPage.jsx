import React, { useEffect, useState } from 'react'
import './component.css'
import { RxHamburgerMenu } from "react-icons/rx";

const FirstPage = () => {

  
    return (
        <section className='firstpage w-full h-[90vh]'>
       
            <nav className='flex justify-between p-4'>
                <h1 className='title text-xl '>sk1ees</h1>
                <h1 className='text-3xl'><RxHamburgerMenu /></h1>
            </nav>

            <div className="intro w-full h-[23rem]  text-center leading-[1.5] flex justify-center items-center">
                <div className="wrapper">

                    <p className='intro_1 text-[23px] text-black '>deep is a</p>
                    <p className='intro_2 text-[82px] mb-5 text-black font-normal italic  '>web developer*</p>
                </div>
            </div>
            <div className="frontDetails  w-[80%] ">

                <div className="quote text-left">
                    <p>*foremost a creative guy</p>
                </div>

                <div className="quote text-center">

                </div>
                <div className="quote text-right flex flex-col gap-2">
                    <p>9:48 PM</p>
                    <p>Remote &</p>
                    <p>Available for Freelance</p>
                    <div className="btn">

                        <button className='p-2 bg-red-600 border-none w-32 float-right items-end rounded-md bg-[#E95011] text-white'>Get in Touch</button>
                    </div>
                </div>

            </div>




        </section>

    )


}

export default FirstPage