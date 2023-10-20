import React from 'react'

const messsegeComponent = () => {
  return (
    <>
    <div className="full-massege-Area w-full bg-[#f3efff] pt-[100px] pb-[100px]">
        <div className="conatinar w-[95%] m-auto ">
            <div className="messege-box w-[full] bg-white rounded-md px-[70px] py-[50px]">
                <div className="messege-wraper">
                    <h1 className='text-center font-josefin font-semibold text-[25px]'>Send Us a Message</h1>
                    <div className="4line-input flex flex-wrap mt-[40px]">
                        <div className="left-input flex flex-wrap flex-col w-[49%] mr-[1%] gap-4">
                            <input type="text" className='outline-none border w-[100%] px-[10px] py-[7px] rounded' placeholder='Name *' />
                            <input type="text" className='outline-none border w-[100%] px-[10px] py-[7px] rounded' placeholder='Subject *' />
                        </div>
                        <div className="right-input flex flex-wrap flex-col w-[49%] ml-[1%] gap-4">
                            <input type="email" className='outline-none border w-[100%] px-[10px] py-[7px] rounded' placeholder='Email *' />
                            <input type="number" className='outline-none border w-[100%] px-[10px] py-[7px] rounded' placeholder='Phone *' />
                        </div>
                    </div>
                    <textarea name="" id="" className='outline-none border w-[100%] px-[10px] py-[7px] rounded mt-[16px]' cols="30" rows="10" placeholder='Massege *'></textarea>
                    <div className='flex flex-wrap justify-center items-center mt-[30px]'><button className='rounded hover:opacity-80 transition-[0.3s] bg-black text-[18px] font-bold pt-[9px] pb-[9px] pl-[36px] pr-[36px] text-[white]'>Submit</button></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default messsegeComponent