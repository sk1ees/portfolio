import React from 'react'
import Footer from '../components/Footer'
import './AboutMe.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdArrowRoundForward } from "react-icons/io";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from '@gsap/react';

const AboutMe = () => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        gsap.from('.wrapperBTN', {
            x: 20,
            opacity: 0,
            duration: 0.5,
            delay: 0.2,
            repeat: -1,
            yoyo: true,

        })
        gsap.from('.aboutme1', {
            y: 100,
            opacity: 0,
            duration: 0.5,
            delay: 0.5,

            rotation: 5,


        })
        gsap.from('.quote-1', {
            y: 100,
            opacity: 0,
            duration: 1,

            stagger: 0.2,
            scrollTrigger: {
                trigger: '.quote-1',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },

        })
        gsap.from('.quote-2', {

            y: 100,
            opacity: 0,
            duration: 1,

            stagger: 0.2,
            scrollTrigger: {
                trigger: '.quote-2',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },
        })
        gsap.from('.quote-3', {

            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.quote-3',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },
        })
        gsap.from('.featuredTitle', {
            y: 100,
            opacity: 0,
            duration: 1,

            stagger: 0.2,
            scrollTrigger: {
                trigger: '.featuredTitle',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },


        })
        gsap.from('.featuredExperience', {
            y: 100,
            opacity: 0,
            duration: 1,

            stagger: 0.2,
            scrollTrigger: {
                trigger: '.featuredExperience',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },


        })
        gsap.from('.featuredWork', {
            y: 100,
            opacity: 0,
            duration: 1,

            stagger: 0.2,
            scrollTrigger: {
                trigger: '.featuredWork',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },


        })
        gsap.from('.leftService', {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.leftService',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },


        })
        gsap.from('.rightService', {
            x: 100,
            opacity: 0,
            duration: 1,
            delay: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.rightService',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },
        })
        gsap.from('.leftExperience', {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.leftExperience',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },
        })
        gsap.from('.rightExperience', {
            x: 100,
            opacity: 0,
            duration: 1,
            delay: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.rightExperience',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },

        })
        gsap.from('.leftWork', {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.leftWork',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },

        })
        gsap.from('.rightWork', {
            x: 100,
            opacity: 0,
            duration: 1,
            delay: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.rightWork',

                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },
        })
    })
    return (
        <>
            {/* starting  */}
            <section className='w-full h-screen radient-red'>
                {/* button-back  */}
                <div className="wrapperBTN absolute top-6 left-6">

                    <Link to={'/'}>
                        <button className='rounded-[100%] bg-black p-5  text-white btnArrow text-2xl'><FaArrowLeft /></button>

                    </Link>

                </div>
                {/* aboutme  */}
                <div className="w-full h-3/4 flex flex-col items-center justify-center ">
                    <p className='instrument text-[59px] leading-[59px] tracking-tight aboutme1'>About Deep*</p>
                    <p className='raleway text-[23px] text-center mt-4 aboutme1'>Hi, I'm Deep*, always write funny code and have the curiosity to find errors,<br /> looking to create cool things for brands and projects.</p>
                </div>
                {/* image */}
                <div className="w-full h-screen  flex items-center justify-center">
                    <div className="wrapperAbout w-[90%] h-[90%]  rounded-2xl ">

                    </div>
                </div>
                {/* quote-1  */}
                <section className='w-full h-[30%]   flex items-center justify-center'>

                    <p className='raleway text-[23px] quote-1'>To me, those are key to great and <b>meaningful</b> design.</p>
                </section>

                {/* service  */}
                <div className="w-full h-screen pt-12 radient-purp">

                    <div className="featuredTitle flex items-normal justify-center gap-3 mb-7 mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={50}>
                            <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.104478)"><path d="M232,64a8,8,0,0,1-8,8H88V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L72,188.69V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z"></path></g></svg>
                        <p className='intro_2 text-[60px] mb-5 text-black  italic  '>Services</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={50}>
                            <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.810968)"><path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L168,188.69V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path></g>

                        </svg>
                    </div>

                    <div className=" wrapperService w-[80%] h-[70%] mx-auto ">
                        <div className=" w-full h-full grid grid-rows-3 items-center service ">
                            <div className="instrument text-[34px] italic text-center leftService">
                                Graphics Design
                            </div>
                            <div className="rightService space text-[15px]">
                                Art direction is the key to giving life to great & powerful projects. <br /> Whether it's for a logo or a whole design system, I'll bring your idea to life.
                                <div className="btnSkills flex gap-4 items-center text-center mt-3">
                                    <p className='text-xl'><IoMdArrowRoundForward /></p>
                                    <button className=' px-[4px] rounded bg-gray-300 '>Photoshop</button>
                                    <button className=' px-[4px] rounded bg-gray-300 '>Illustrator</button>
                                    <button className=' px-[4px] rounded bg-gray-300 '>Figma</button>

                                </div>

                            </div>
                            <div className="instrument text-[34px] italic text-center leftService">Web Development</div>
                            <div className="rightService space text-[15px]">
                                The core of my work, from the UI/UX design to the final interface, I'll take care of your project <br /> from scratch to wow. Seamless transitions, micro-interactions, and fluidity are mandatory.
                                <div className="btnSkills flex  w-[75%] gap-4 items-center text-center mt-3">
                                    <p className='text-xl'><IoMdArrowRoundForward /></p>
                                    <div className="btnWrapper gap-4 flex flex-wrap">

                                        <button className=' px-[4px] rounded bg-gray-300 '>HTML</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>CSS</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>GSAP</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>Tailwind</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>Javascript</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>React.js</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>Node.js</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>Express.js</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>MySQL</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>PHP</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>MongoDB</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>Wordpress</button>

                                    </div>
                                </div>

                            </div>
                            <div className="instrument text-[34px] italic text-center leftService">Video Editing</div>
                            <div className="rightService space text-[15px]">
                                Creation is a path that leads to emotion. I create stunning <br /> and engaging edits to elevate the user experience.
                                <div className="btnSkills flex gap-4 items-center text-center mt-3">
                                    <p className='text-xl'><IoMdArrowRoundForward /></p>
                                    <div className="btnWrapper gap-4 flex flex-wrap">

                                        <button className=' px-[4px] rounded bg-gray-300 '>Premiere Pro</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>After Effects</button>
                                        <button className=' px-[4px] rounded bg-gray-300 '>Blender</button>



                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
                {/* quote-2  */}
                <section className='w-full h-[30%]   flex items-center justify-center'>
                    <p className='raleway text-[23px] text-center quote-2'>Basically, i'm just a creative dude. But since I get bored easily, I tend to try everything. <br /> That's how I became such a versatile designer, able to create in multiple fields.</p>
                </section>
                {/* experience  */}
                <div className="w-full h-3/4 pt-12 radient-purp">

                    <div className="featuredExperience flex items-normal justify-center gap-3 mb-7 mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={50}>
                            <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.104478)"><path d="M232,64a8,8,0,0,1-8,8H88V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L72,188.69V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z"></path></g></svg>
                        <p className='intro_2 text-[60px] mb-5 text-black  italic  '>Experiences</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={50}>
                            <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.810968)"><path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L168,188.69V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path></g>

                        </svg>
                    </div>

                    <div className=" wrapperService w-[80%] h-[50%] mx-auto ">
                        <div className=" w-full h-full grid grid-rows-3 items-center service ">
                            <div className="leftExperience instrument text-[34px] italic text-center">
                                Agency
                            </div>
                            <div className="rightExperience space text-[15px]">
                                I took my first steps as a video editor in a video editing agency during lockdown. <br /> In three years, I've learned and grown a lot in both soft and hard skills.


                            </div>
                            <div className="leftExperience instrument text-[34px] italic text-center">Freelance</div>
                            <div className="rightExperience space text-[15px]">
                                it has been two years since I left them to start a new journey as a freelancer <br /> with new projects and goals , helped more than 10+ satisfied clients.


                            </div>
                            <div className="leftExperience instrument text-[34px] italic text-center">Projects</div>
                            <div className="rightExperience space text-[15px]">
                                In parallel, I've been working on multiple projects related to my field , and <br /> there's a saying  that more you build more your learn things.


                            </div>

                        </div>
                    </div>


                </div>
                {/* quote-3  */}
                <section className='quote-3 w-full h-[30%]   flex flex-col items-center justify-center'>
                    <p className='raleway text-[23px] text-center '>Now, enough about myself, let's talk about your projects !</p>
                    <button className='bg-black px-3 py-2 text-white raleway mt-6'>Available for freelance - Remote</button>
                </section>
                {/* works  */}
                <div className="w-full h-[80vh] radient-red-2">
                    <div className="featuredWork flex items-normal justify-center gap-3 mb-1 mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={50}>
                            <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.104478)"><path d="M232,64a8,8,0,0,1-8,8H88V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L72,188.69V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z"></path></g></svg>
                        <p className='intro_2 text-[43px] mb-5 text-black  italic  '>Know me through my work</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={50}>
                            <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.810968)"><path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L168,188.69V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path></g>

                        </svg>
                    </div>
                    <div className="w-full h-[90%]  grid grid-cols-2 overflow-hidden">
                        <div className=" flex flex-col items-center justify-center leftWork">
                            <div className="bg-gray-200 w-[80%] rounded-xl h-[60%]"></div>
                            <div className=" w-[80%] h-[20%] grid grid-cols-2">
                                <div className="flex items-center instrument text-[34px] italic px-5">AI assistant</div>
                                <div className="flex flex-wrap gap-4 items-center justify-end">
                                    <button className='px-2  bg-gray-200 text-black rounded-[10px]'>Python</button>
                                    <button className='px-2  bg-gray-200 text-black rounded-[10px]'>HTML</button>
                                    <button className='px-2  bg-gray-200 text-black rounded-[10px]'>CSS</button>
                                    <button className='px-2  bg-gray-200 text-black rounded-[10px]'>Jquery</button>

                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col items-center justify-center rightWork">
                            <div className="bg-gray-200 w-[80%] rounded-xl h-[60%]"></div>
                            <div className=" w-[80%] h-[20%] grid grid-cols-2">
                                <div className="flex items-center instrument text-[34px] italic px-5">OCHI</div>
                                <div className="flex flex-wrap gap-4 items-center justify-end">
                                    <button className='px-2  bg-gray-200 text-black rounded-[10px]'>React.js</button>
                                    <button className='px-2  bg-gray-200 text-black rounded-[10px]'>GSAP</button>
                                    <button className='px-2  bg-gray-200 text-black rounded-[10px]'>Framer Motion</button>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* footer  */}
                <Footer></Footer>

            </section>

        </>
    )
}

export default AboutMe