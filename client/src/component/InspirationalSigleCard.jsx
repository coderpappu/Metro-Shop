import React from 'react'

const InspirationalSigleCard = ({data}) => {
  return (
    <>
    <div className="card-of-inspiral-post w-[400px] cursor-pointer">
                        <div className="dateImag relative">
                            <div className="imgofCard w-[400px] rounded-[5px] overflow-hidden">
                                <img className=' w-full rounded-[5px] hover:rotate-6  hover:scale-[1.2] duration-300 ease-in' src={data.img} alt="" />
                            </div>
                            <div className="DAte absolute bottom-[25px] left-[30px] w-[70px] h-[70px] duration-300 ease-in hover:text-white hover:bg-black  text-[#000] bg-white rounded-full flex flex-wrap items-center text-center flex-col justify-center">
                                <span className='font-medium'>{data.date}</span>
                                <p className='font-bold'>{data.month}</p>
                            </div>
                        </div>
                        <div className="contentof-inspirial mt-[20px]">
                            <p className='text-[#444] text-[15px] font-medium'>{data.categori}</p>
                            <h3 className='text-[22px] text-black font-josefin font-semibold mt-[13px]'>{data.titile}</h3>
                        </div>
    </div>
    </>
  )
}

export default InspirationalSigleCard