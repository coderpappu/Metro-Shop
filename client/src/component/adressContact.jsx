import React from 'react'
import SimpleMap from '../component/googleMap'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';

const adressContact = () => {
  return (
    <>
    <div className="mapAndContact flex flex-wrap h-[550pxpx]">
        <div className="map w-[50%] h-[550pxpx]"><SimpleMap/></div>
        <div className="adress w-[50%]">
            <div className="contern w-[80%] mt-[80px] ml-[50px]">
                <h1 className='mb-[15px] font-josefin font-semibold text-[28px] '>Looking Forward to Hear From You</h1>
                <p className='text-[#646464] mb-[30px] text-[16px] font-roboto'>Contact sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex flex-wrap gap-10 mb-[30px]">
                    <span className='text-[40px] mt-[-20px]'><LocationOnOutlinedIcon fontSize='40px'/></span>
                    <div className="">
                        <h1 className='font-josefin font-semibold text-[20px] mb-[10px]'>Address</h1>
                        <p className='text-[#646464] text-[17px] font-roboto'>195 Broaddus Maple Court Avenue, United States of America</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-10 mb-[30px]">
                    <span className='text-[40px] mt-[-20px]'><PhoneInTalkOutlinedIcon fontSize='40px'/></span>
                    <div className="">
                        <h1 className='font-josefin font-semibold text-[20px] mb-[10px]'>Phone</h1>
                        <p className='text-[#646464] text-[17px] font-roboto'>+146-4567890</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-10 mb-[30px]">
                    <span className='text-[40px] mt-[-20px]'><LocalPostOfficeOutlinedIcon fontSize='40px'/></span>
                    <div className="">
                        <h1 className='font-josefin font-semibold text-[20px] mb-[10px]'>Email</h1>
                        <p className='text-[#646464] text-[17px] font-roboto'>email@example.com</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default adressContact