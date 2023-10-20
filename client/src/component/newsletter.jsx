import React from 'react'

const newsletter = () => {
  return (
   <>
     <div className="newsletter bg-[#f7f7f7] w-full h-[370px]">
        <div className="conatainer w-[1140px] m-auto">
            <div className="container-row flex flex-wrap flex-col items-center text-center mt-[40px]">
                <div className="header-of-newslater mt-[80px]">
                    <h1 className='font-josefin text-[30px] font-semibold'>Signup Newsletter!</h1>
                    <p className='text-[#444] text-[15px] font-medium mt-1'>It only takes a second to be the first to find out about our latest news</p>
                </div>
                <div className="submit-letter flex flex-wrap gap-2 mt-[50px]">
                    <input type="text" className='pl-[30px] pt-[15px] pb-[15px] pr-[300px]' placeholder='Your eamil address'/>
                    <button className='hover:opacity-[.8] rounded-[5px] pl-[40px] pt-[16px] pb-[16px] pr-[40px] bg-black text-white font-bold text-[14px]'>Submit</button>
                </div>
            </div>
        </div>
     </div>
   </>
  )
}

export default newsletter