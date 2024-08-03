import React from 'react'
import './component.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <section className='footerGrid items-center  w-full h-[100vh]   footer ' id='contact'>
            <div className="">
                <div className="featuredTitle flex items-normal justify-center gap-3  pt-10 ">

                    <p className='intro_2 text-[60px] mb-20 text-black  italic  '>say hi</p>

                </div>
            </div>
            <div className="contact m-auto w-[90%] h-[100%] bg-white rounded-xl ">
                <div className="flex flex-col px-10 justify-center">
                    <div className="wrapper w-[90%] text-left leading-[60px]">


                        <p className='aboutText text-5xl font-normal'>Whats Next?</p>
                        <p className='footerQoute text-[23px] font-normal'>Lets give a look at your projects ! Feel free to reach out.</p>
                        <small className='contactText text-sm '>12:59 PM</small>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="wrapper w-[60%] text-center">


                        <button className='contactText py-3 text-black  text-[25px] font-normal btn' id='email'>hello@deeeprr.fr</button>
                        <hr />
                        <button className='contactText py-3 text-black  text-[25px] font-normal btn' id='message'>
                            <Link to={'/contact'}>

                                or leave me a word
                            </Link>
                        </button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-3 w-full text-center text-2xl">

                <div className="contactText text-[25px] font-normal">sk1ees</div>
                <div className="contactText text-[25px] font-normal">Terms and Conditions</div>
                <div className="contactText text-[25px] font-normal">&copy;2024</div>

            </div>
        </section>
    )
}

export default Footer