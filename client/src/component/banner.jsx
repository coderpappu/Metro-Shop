import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const banner = ({data}) => {
  return (
    <>
    <div className="full-Banner  w-full">
        <div className="bg-banners w-[100%]  pt-[8rem] pb-[8rem] bg-banner">
            <div className="containe3 w-[1140px] m-auto">
                <div className="conatinet-wrap">
                    <div className="continer-row flex flex-wrap flex-col justify-center items-center">
                        <h1 className='text-[35px] font-josefin font-semibold'>{data.pageName}</h1>
                        <div className='flex flex-wrap'>
                            <p className='text-[#b3b3b3] text-[16px] '>Home</p>
                            <div className='text-[#b3b3b3] text-[20px] mt-[-4px]'><KeyboardArrowRightIcon fontSize='15px'/></div>
                            <p>{data.pageName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default banner