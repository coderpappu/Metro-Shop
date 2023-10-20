import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import InformationFooter from './informationFooter';
import FooterServer from '../server/footerServer';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-bg w-full bg-[#111] h-[34rem]">
            <div className="containe w-[1140px] m-auto">
                <div className="conatainer-wrap mb-[80px]">
                    <div className="conatiner-row flex flex-wrap gap-14 pt-[30px]">
                        <div className="logo-location w-[240px]">
                            <div className="card-logo flex flex-wrap flex-col gap-4">
                                <img className='w-[150px] mb-[30px]' src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/12/logo-light.png" alt="" />
                                <div className="locaton w-[300px] gap-3 font-semibold flex flex-wrap flex-row text-[#cccccc]"> <LocationOnOutlinedIcon/> <p className='text-[15px] w-[200px]'> 59 Street, Newyork City, Rose Town, 05 Rive House</p> </div>
                                <div className="phone gap-3 text-[#cccccc] font-semibold flex flex-wrap"><PhoneInTalkOutlinedIcon/><p className='text-[15px]'>+123 456 7890</p></div>
                                <div className="email gap-3 text-[#cccccc] font-semibold flex flex-wrap"><MailOutlineOutlinedIcon/><p className='text-[15px]'>metro@gmail.com</p></div>
                            </div>
                        </div>
                        <div className="infomation flex flex-wrap gap-[150px]">
                            {
                          FooterServer.map((d) => <InformationFooter data= {d}/>)
                            }
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-full h-[0.25px] bg-[#cccccc]'></div>
            <div className="last-footer">
                <div className="contain w-[1140px] m-auto ">

                    <div className="conatiner-wraap h-[150px] flex flex-wrap items-center gap-16 align-middle">
                        <p className='text-[#cccccc] text-[15px]'>© Copyright Metro 2020. Designed and Developed by <a href="#" className='text-white font-semibold'>Sourov Dey</a></p>
                        <div className='flex flex-wrap gap-4 cursor-pointer text-[#cccccc] '>
                            <div className='hover:text-white'><FacebookSharpIcon/></div>
                            <div className='hover:text-white'><TwitterIcon/></div>
                            <div className='hover:text-white'><LinkedInIcon/></div>
                            <div className='hover:text-white'><YouTubeIcon/></div>
                            <div className='hover:text-white'><PinterestIcon/></div>
                            <div className='hover:text-white'><RssFeedIcon/></div>
                        </div>
                        <div className='flex flex-wrap gap-4 cursor-pointer'>
                            <div><img className='grayscale hover:filter-none duration-300 ease-in' src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/themes/metro/assets/img/payment1.png" alt="" /></div>
                            <div><img className='grayscale hover:filter-none duration-300 ease-in' src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/themes/metro/assets/img/payment2.png" alt="" /></div>
                            <div><img className='grayscale hover:filter-none duration-300 ease-in' src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/themes/metro/assets/img/payment3.png" alt="" /></div>
                            <div><img className='grayscale hover:filter-none duration-300 ease-in' src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/themes/metro/assets/img/payment4.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default footer