import React from 'react'

const informationFooter = ({data}) => {
  return (
    <>
    <div className="footrt-informtion flex flex-wrap flex-col  gap-6 justify-center ">
                                <h1 className='text-white text-[23px] font-semibold  font-josefin cursor-pointer relative after:absolute after:bg-white after:h-[3px] after:w-[30%] after:left-0 after:bottom-[-5px] after:transition-[0.3s] hover:after:w-full'>{data.head}</h1>
                                <a href="#" className='text-[#cccccc] font-semibold'>{data.pointOne}</a>
                                <a href="#" className='text-[#cccccc] font-semibold'>{data.pointTwo }</a>
                                <a href="#" className='text-[#cccccc] font-semibold'>{data.pointThree}</a>
                                <a href="#" className='text-[#cccccc] font-semibold'>{data.pointFour }</a>
                                <a href="#" className='text-[#cccccc] font-semibold'>{data.pointFive}</a>
    </div>
    </>
  )
}

export default informationFooter