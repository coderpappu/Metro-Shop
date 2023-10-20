import React from 'react'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

const empityCartcomponent = () => {
  return (
    <>
    <div className="empity w-full mt-[80px]  mb-[80px]">
        <div className="containaree w-[1140px] m-auto">
            <div className="container-wrap">
                <div className="container-row mb-[30px] flex flex-wrap items-center gap-7 py-[15px] px-[15px] rounded bg-[#dedfff]">
                    <div className="iconn drop-shadow-xl p-[5px] rounded-[100%] bg-white text-Black"><InboxOutlinedIcon/></div>
                    <h4 className='font-roboto  text-[17px]'>Your cart is currently empty.</h4>
                </div>
                <button className='py-[10px] rounded hover:opacity-80 transition-[0.3s] font-medium px-[20px] bg-black text-white'>Return to shop</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default empityCartcomponent