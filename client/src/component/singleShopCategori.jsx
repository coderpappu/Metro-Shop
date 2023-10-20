import React from 'react'

const singleShopCategori = ({data}) => {
  return (
    <>
        <div className='hover:pl-[10px]  ease-out duration-300 text-[15px] font-[400]'><a className=' text-[#111]' href="#">{data.categoriName}<span className='text-[#cccccc] font-medium'>{data.categoriQuantity}</span></a></div>
    </>
  )
}

export default singleShopCategori