import React from 'react'
import "../App.css"

const homeSlide = ({data}) => {
    
  return (
    <>
    <div className="slid-container-wrap w-[100%]">
                    <div className="container-row flex flex-wrap items-center">
                        <div className="left-content w-[50%]">
                            <h4 className='text-[19px] mb-[10px]'>{data.subtitle}</h4>
                            <h1 className='text-[50px] font-bold mb-[10px]'>{data.title}</h1>
                            <p className='text-[15px] mb-[15px]'>{data.discription}</p>
                            <button className='relative after:absolute after:bg-black after:h-[2px] after:w-[30%] after:left-0 after:bottom-[-10px] after:transition-[0.3s] hover:after:w-full   font-extrabold text-[13px]'>EXPLORE NOW</button>
                        </div>
                        <div className="right-content-image w-[50%]">
                            <div className="image-Slide ">
                                <div className="image-cover w-[360px] flex flex-wrap items-center">
                                    <img className='w-[100%] mt-8' src={data.img} alt="slide" />
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </>
  )
}

export default homeSlide