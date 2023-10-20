import React from 'react'

const loginAndregister = () => {
  return (
    <>
    <div className="pahe w-full mt-[80px] mb-[100px]">
        <div className="contain w-[1140px] m-auto">
            <div className="contain-row flex flex-wrap">
                <div className="login w-[45%] mr-[5%]">
                    <h1 className='font-josefin font-semibold text-[28px] mb-[30px]'>Login</h1>
                    <div className="form">
                        <div className="content-wrap flex flex-wrap flex-col border p-[20px] h-[380px]">
                            <label htmlFor="" className='font-medium font-roboto text-[16px] text-[#1f1f1fcc] mb-[10px]'>Username or email address *</label>
                            <input type="email" className='outline-none bg-[#e7d5ff] p-[8px] rounded-md pl-[15px] mb-[20px]'/>
                            <label htmlFor="" className='font-medium font-roboto text-[16px] text-[#1f1f1fcc] mb-[10px]'>Password *</label>
                            <input type="password" className='outline-none bg-[#e7d5ff] p-[8px] rounded-md pl-[15px] mb-[20px]'/>
                            <div className='flex flex-wrap gap-3'><input type="checkbox" />
                            <p className='font-medium font-roboto text-[16px] text-[#1f1f1fcc] '>Remember me</p></div>
                            <button className='w-[30%] my-[20px] rounded hover:opacity-80 transition-[0.3s] bg-black text-[16px] font-bold pt-[9px] pb-[9px] pl-[36px] pr-[36px] text-[white]'>LOG IN</button>
                            <button className='w-[35%] ml-[-5px] text-[17px] text-[#272727] font-medium'>Lost your password?</button>
                        </div>
                    </div>

                </div>
                <div className="register w-[45%] mr-[5%]">
                    <h1 className='font-josefin font-semibold text-[28px] mb-[30px]'>Register</h1>
                    <div className="form">
                        <div className="content-wrap flex flex-wrap flex-col border p-[20px] h-[380px]">
                            <label htmlFor="" className='font-medium font-roboto text-[16px] text-[#1f1f1fcc] mb-[10px]'>Username *</label>
                            <input type="text" className='outline-none bg-[#e7d5ff] p-[8px] rounded-md pl-[15px] mb-[20px]'/>
                            <label htmlFor="" className='font-medium font-roboto text-[16px] text-[#1f1f1fcc] mb-[10px]'>Email address *</label>
                            <input type="email" className='outline-none bg-[#e7d5ff] p-[8px] rounded-md pl-[15px] mb-[20px]'/>
                            <label htmlFor="" className='font-medium font-roboto text-[16px] text-[#1f1f1fcc] mb-[10px]'>Password *</label>
                            <input type="password" className='outline-none bg-[#e7d5ff] p-[8px] rounded-md pl-[15px] mb-[20px]'/>
                            
                            <button className='w-[30%] rounded hover:opacity-80 transition-[0.3s] bg-black text-[16px] font-bold pt-[9px] pb-[9px] pl-[36px] pr-[36px] text-[white]'>REGISTER</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default loginAndregister