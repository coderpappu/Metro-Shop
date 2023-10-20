import React from 'react'
import SingleShopCategori from './singleShopCategori'
import ShopCategoriServer from '../server/shopCategoriServer'

const shopCategori = () => {
  return (
    <>
        <div className="all-categori-and-Setting">
            <h1 className='font-josefin font-semibold text-[21px] mb-5'>Categories</h1>
            <div className="categoris flex flex-wrap flex-col gap-5">
                {
                ShopCategoriServer.map((d) => <SingleShopCategori data= {d}/>)
                }
            </div>
        </div>    
    </>
  )
}

export default shopCategori