import React from 'react'

import ShopProductServer from '../server/shopProductServer';
import SingleShopProduct from './singleShopProduct';
import ShopCategori from './shopCategori';
import '../App.css'
import FilterAndVeiwComponent from './filterAndVeiwComponent';
import ColorComponent from './colorComponent';
import SizeComponent from './sizeComponent';
import PriceRangeSlider from './priceRange';


const shopProduct = () => {
  return (
    <>
        <div className="shopandCategori w-full">
            <div className="shopAndCate w-full mt-[80px] mb-[100px]">
                <div className="caontainer w-[1140px] m-auto">
                    <div className="conatiner-wrap">
                        <div className="container-row flex flex-wrap">
                            <div className="Left-shop w-[75%] ">
                                <FilterAndVeiwComponent/>
                                <div className="shop-Product mt-[55px]">
                                    <div className="shop-container">
                                        <div className="shop-row flex flex-wrap mt-30px gap-[35px]">
                                            {
                                                ShopProductServer.map((d) => <SingleShopProduct data= {d}/>)
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-center items-center mt-[100px]'><button className='rounded py-[8px] hover:opacity-80 transition-[0.3s] font-medium px-[20px] bg-black text-white'>Load More</button></div>
                            </div>
                            <div className="Right-categori w-[22%] ml-[3%]">
                                <ShopCategori/>
                                <ColorComponent/>
                                <SizeComponent/>
                                <h1 className='font-josefin font-semibold text-[21px] mb-5 mt-10'>Price</h1>
                                <PriceRangeSlider/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default shopProduct