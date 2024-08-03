import React from 'react'
import './Contact.css'
const Contact = () => {

    let currentTime = new Date();
    let options = { timeStyle: 'short', hour12: true };
    let timeString = currentTime.toLocaleTimeString('en-US', options);
    window.scrollTo(0, 0);

    return (
        <>

            <div className="w-full h-screen contactRouter">

                <div className="contactForm w-full h-screen ">
                    <div className="flex justify-center items-center w-full h-screen">

                        <div className="wrapper grid grid-cols-2 w-3/4 h-[77%] justify-center ">
                            <div className="formLeft  text-black flex justify-around items-center">
                                <div className="wrapperFormLeft w-[3/4]">

                                    <p className='talk text-[59px]'>Let's talk </p>
                                    <p className='formDetails text-[23px]'>Whether it's to discuss your next project <br /> or just to say hi, feel free to reach out <br /> to me. I'm excited to hear from you &#58;&#41;  </p>
                                    <p className='bg-white text-black p-3 mt-4 available w-[65%]'>Available for freelance -Remote</p>
                                </div>

                            </div>
                            <div className="formRight  flex justify-center items-center">
                                <div className="wrapperRight w-3/4 h-[90%] bg-[#F8FCFB] rounded-xl flex justify-center ">

                                    <form action="" className='flex flex-col w-[90%] gap-3 mt-4'>
                                        <div className="flex justify-between">

                                            <label htmlFor="firstName" className='text-black'>Name</label>
                                            <small className='bg-gray-200 rounded-lg px-3 py-1 text-[11px] time'>{timeString}</small>
                                        </div>


                                        <input type="text" name="firstName" id="" className='rounded h-9' placeholder='Deep Sarkar' />
                                        <label htmlFor="email" className='text-black' >E-mail</label>
                                        <input type="text" name="email" id="" className='rounded h-9' placeholder='hello@deeeprr.fr' />
                                        <label htmlFor="subject" className='text-black'>Subject</label>
                                        <input type="text" name="subject" id="" className='rounded h-9' placeholder='Subject' />
                                        <label htmlFor="message" className='text-black'>Message</label>
                                        <textarea name="message" id="" className='h-28 rounded' placeholder='Tell me everything'></textarea>
                                        <input type="submit" value="submit" className='bg-black h-[10%] mt-4 mb-4 p-2 rounded text-white submitForm cursor-pointer' />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="contactQuery w-full h-[50vh] flex justify-center items-center">
                    <p className='contactQuote text-[25px] text-black'>I hope you enjoyed your journey here.Thank you for visiting!</p>

                </div>
                <div className="contactFooter w-full h-[10vh] text-black ">

                    <div className="wrapperFooter h-full px-20">
                        <div className="leftFooter">
                            <div className="rightFooter h-full flex gap-10 items-center justify-start ">
                                <p className='text-xl'>sk1ees</p>



                            </div>
                        </div>
                        <div className="rightFooter h-full flex gap-10 items-center justify-end ">
                            <p className='text-xl'>Terms and Conditions</p>
                            <p className='text-xl'>&copy;2024</p>


                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Contact