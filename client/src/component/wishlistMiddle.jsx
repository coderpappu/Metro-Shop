import React from 'react'

const wishlistMiddle = () => {
  return (
    <>
    <div className="middle py-[100px]">
        <div className="continer w-[1140px] m-auto">
            <div className=" w-100% h-[55px] bg-[#f4f5ff] rounded-md flex flex-wrap justify-around items-center px-[20px]">
                <div className="font-roboto font-medium text-[17px]">Product name</div>
                <div className="font-roboto font-medium text-[17px]">Unit price</div>
                <div className="font-roboto font-medium text-[17px]">Stock status</div>
            </div>
            <div className="font-roboto font-medium text-[18px] mt-[25px] pb-[25px] mr-[20px] border-b-[1px]">No products added to the wishlist</div>
        </div>
    </div>
    </>
  )
}

export default wishlistMiddle