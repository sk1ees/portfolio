import React, { useEffect, useState } from 'react'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Play animation when isOpen changes
        gsap.to('.navItems p', {
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : 50,
            duration: 1,
            stagger: 0.1
        });
        gsap.to('.navItems', {
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : 50,
            duration: 0.4,
            stagger: 0.1,

        });




    }, [isOpen]);
    const toggleOpen = () => {
        setIsOpen((isOpen) => !isOpen);

    }


    return (
        <>
            <section className='z-50 fixed '>


                <nav className={`flex fixed w-full  justify-between p-4 backdrop-filter ${isOpen ? "backdrop-blur-0" : "backdrop-blur-lg"}`}>
                    <h1 className='title text-xl '>sk1ees</h1>
                    <div className="flex flex-col items-end w-[22%] gap-6 cursor-pointer transition-all">

                        <h1 className='text-3xl ' onClick={toggleOpen}>
                            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}



                        </h1>

                        <div className={`navItems more font-bold   rounded-xl border-[2px]   w-full p-5 text-[28px] leading-[3rem] pe-10 me-7 bg-white text-black text-start ${isOpen ? "block" : "hidden"}`}>
                            <div className="flex justify-between">
                                <p>Home</p>
                                <div className="flex gap-4 text-[16px] ">
                                    <button className='bg-black text-white px-3 rounded text-[16px] '>eng</button>
                                    <button>हिंदी</button>
                                </div>
                            </div>
                            <p>About</p>
                            <p>Contact</p>
                            <p>Services</p>

                            <button className=' bg-black rounded text-white text-[16px] w-full font-light px-2'>Available for freelance-Remote</button>
                        </div>
                    </div>

                    {/* <h1 className='text-3xl'><RxHamburgerMenu /></h1> */}
                </nav>

            </section>




        </>
    )
}

export default Navbar