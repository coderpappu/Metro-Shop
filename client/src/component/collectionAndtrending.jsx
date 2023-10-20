import React from 'react'
import '../App.css'

const collectionAndtrending = () => {
  return (
    <>
    <div className="collection-Section w-[100%] mt-[40px] h-[19rem]">
        <div className="container w-[95%] m-auto cursor-pointer">
            <div className="container-wrap">
                <div className="container-row flex flex-wrap h-[303px]">
                    <div className="trending-Section w-[49%] mr-[1%] bg-[#f7f7f7] pl-[50px] pr-[50px] pt-[30px]  h-[303px] ">
                        <div className="trending hover:cursor-pointer ">
                            <div className="trending-content w-[240px]">
                            <h3 className='text-[23px] font-josefin font-bold w-[240px]'>LED HANGER LIGHT</h3>
                            <h4 className='subtitle-hover text-[20px] font-josefin font-semibold    relative after:absolute after:bg-black after:h-[2px] after:w-[30%] after:left-0 after:bottom-[-10px] after:transition-[0.3s] hover:after:w-full'>Trending 2023</h4>
                            
                        </div>
                        <div className="trending-Image  overflow-hidden pl-[50px] pr-[50px] pt-[20px] w-[32rem] h-[20rem]">
                            <img className='w-full hover:scale-[1.1] transition-[0.5s]' src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/443.png" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="collection-Section w-[49%] ml-[1%] bg-[#f7f7f7] pl-[50px] pr-[50px]  h-[303px]">
                        <div className="colection flex flex-wrap items-end">
                            <div className="collection-Image overflow-hidden pl-[20px] pr-[20px] pt-[10px] h-auto">
                                <img className=' hover:scale-[1.1] transition-[0.5s]' src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/444.png" alt="" />
                            </div>
                            <div className="collection-Content mb-[50px]">
                                <h3 className='text-[23px] font-josefin font-bold '>HEADPHONE</h3>
                                <h4 className='subtitle-hover text-[20px] font-josefin font-semibold  relative after:absolute after:bg-black after:h-[2px] after:w-[30%] after:left-0 after:bottom-[-10px] after:transition-[0.3s] hover:after:w-full'>Collection 2023</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default collectionAndtrending