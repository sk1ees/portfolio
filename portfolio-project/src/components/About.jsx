import React from 'react'
import './component.css'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <>
            <section className='aboutpage bg-white' id='about'>
                <div className="featuredTitle flex items-normal justify-center gap-3  pt-10 ">

                    <p className='intro_2 text-[60px] mb-5 text-black  italic  '>about myself</p>

                </div>
                <section className=' w-full h-[100vh] grid grid-cols-2 '>


                    <div className="aboutLeft flex items-center justify-center text-white ">

                        <div className=" text-black  w-[90%] h-[70%] rounded-xl flex justify-center p-20">

                            <div className="">
                                <p className='aboutText text-[3vw] mb-5 text-black font-normal italic'>~ who am I ?</p>
                                <p className='more text-[23px]'>Hi, I'm deep, and since I get bored easily, I tend to try everything. That's how a graphic designer ended up becoming a webmaster and a motion designer & web developer.</p>
                                <button className=' more p-2 px-6  border-none w-[9vw] rounded-md bg-[#E95011] text-white mb-7 mt-5'>
                                    <Link to={'/about'}>
                                        About me

                                    </Link>


                                </button> <br />
                                <button className='more p-2 px-6  border-solid border-black border-[2px] w-[auto] rounded-md  text-black '>Available for freelance - Remote</button>
                            </div>

                        </div>

                    </div>
                    <div className="aboutRight flex items-center justify-center">
                        <img src="profile_pic.png" className='rounded-xl' alt="" srcset="" width={500} />
                    </div>
                </section >

            </section>
        </>
    )
}

export default About