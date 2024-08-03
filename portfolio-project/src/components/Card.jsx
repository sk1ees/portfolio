import React from 'react'

const Card = () => {

    const data = {


        title: "Oxymore",
        desc: "Dualité, conflit et différence",
        tags: ['React', 'GSAP', 'Node.js'],

    }
    return (
        <>
            <div className="card w-full h-[85vh] mb-5  flex flex-col justify-normal items-center">
                <div className="card1 w-10/12 h-screen mb-12 rounded-xl bg-[#C8C8C8]">
                    <div className="cardTitle     flex items-center justify-center ">
                        <div className="cardTitleElement w-[95%] h-[95%]  bg-white rounded-xl p-7 relative">
                            <p className='cardText text-[52px]'>{data.title}</p>
                            <p className='cardDesc'>{data.desc}</p>
                            <div className="tags absolute bottom-3 flex flex-col gap-2 mb-5">

                                {data.tags.map(item => <p className='cardDesc bg-[#ffe0c5] px-4 py-[1px] text-black  rounded-3xl'>{item}</p>)}



                            </div>
                        </div>
                    </div>
                    <div className="cardPhoto     "></div>
                </div>
            </div></>
    )
}

export default Card