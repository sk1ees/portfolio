import React from 'react'
import './component.css'
const About = () => {
    return (
        <>
            <section className='firstpage bg-white'>
                <div className="featuredTitle flex items-normal justify-center gap-3 mb-10 pt-10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={70}>
                        <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.104478)"><path d="M232,64a8,8,0,0,1-8,8H88V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L72,188.69V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z"></path></g></svg>
                    <p className='intro_2 text-[60px] mb-5 text-black  italic  '>about myself</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="(red, rgb(22, 22, 22))" width={70}>
                        <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 0.810968)"><path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L168,188.69V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path></g>

                    </svg>
                </div>
                <section className=' w-full h-[100vh] grid grid-cols-2 '>


                    <div className="aboutLeft flex items-center justify-center text-white ">

                        <div className=" text-black  w-[90%] h-[70%] rounded-xl flex justify-center p-20">

                            <div className="">
                                <p className='aboutText text-[3vw] mb-5 text-black font-normal italic'>Deep*</p>
                                <p className='more text-[23px]'>Hi, I'm deep, and since I get bored easily, I tend to try everything. That's how a graphic designer ended up becoming a webmaster and a motion designer & web developer.</p>
                                <button className=' more p-2 px-6  border-none w-[9vw] rounded-md bg-[#E95011] text-white mb-12 mt-5'>About me</button> <br />
                                <button className='more p-2 px-6  border-solid border-black border-[2px] w-[auto] rounded-md  text-black '>Available for freelance - Remote</button>
                            </div>

                        </div>

                    </div>
                    <div className="aboutRight flex items-center justify-center">
                        <img src="profile.png" className='rounded-xl' alt="" srcset="" width={500} />
                    </div>
                </section >

            </section>
        </>
    )
}

export default About