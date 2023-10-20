import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';

const singleShopProduct = ({data}) => {
  return (
    <>
    <div className="product W-[260x] relative">
        <div className="product-image w-[260px] mb-[15px]">
            <img className='w-full' src={data.img} alt="product img" />
        </div>
        <span className="discount absolute text-[12px] text-center pl-[8px] pr-[8px] pt-[2px] pb-[2px] rounded-[4px] bg-black text-[#fff] top-[18px] left-[20px]">{data.discountPercent}</span>
        <h3 className='text-[16px] mb-1 cursor-pointer font-josefin text-[#858585] relative after:absolute after:bg-[#858585] after:h-[2px] after:w-[20%] after:left-0 after:bottom-[1px] after:transition-[0.3s] hover:after:w-full'>{data.productName}</h3>
        <h2 className='text-[20px] font-semibold'><del className='text-[#858585] font-normal'>{data.discountPrice}</del> {data.price}</h2>
        <div className="wishandCart flex flex-wrap gap-1 mt-4">
            <button className='rounded hover:opacity-80 transition-[0.3s] bg-black p-[12px] text-[white]'><FavoriteBorderIcon/></button>
            <button className='rounded hover:opacity-80 transition-[0.3s] bg-black text-[13px] font-bold pt-[9px] pb-[9px] pl-[36px] pr-[36px] text-[white]'>ADD TO CART</button>
            <button className='rounded hover:opacity-80 transition-[0.3s] bg-black p-[12px] text-[white] font-bold'><SearchIcon/></button>
        </div>
    </div>
    </>
  )
}

export default singleShopProduct