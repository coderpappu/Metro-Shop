import React from 'react'

const sizeComponent = () => {
  return (
    <>
    <h1 className='font-josefin font-semibold text-[21px] mb-5 mt-10'>Size</h1>
    <div className='flex flex-wrap gap-2'>
        <div className='relative w-[36px] before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-3 after:w-3 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible'
            data-tip='L'>
            <a href="#" className='border rounded hover:border-[#000] hover:drop-shadow-xl'><span className='py-[10px] px-[10px]  '>L</span></a>
        </div>
        <div className='relative w-[36px] before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible'
            data-tip='M'>
            <a href="#" className='border rounded hover:border-[#000] hover:drop-shadow-xl'><span className='py-[10px] px-[10px]  '>M</span></a>
        </div>
        <div className='relative w-[36px] before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible'
            data-tip='S'>
            <a href="#" className='border rounded hover:border-[#000] hover:drop-shadow-xl'><span className='py-[10px] px-[10px]  '>S</span></a>
        </div>
    </div>
    </>
  )
}

export default sizeComponent