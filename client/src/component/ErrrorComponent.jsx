import React from 'react'
import { Link } from 'react-router-dom'

const ErrrorComponent = () => {
  return (
    <>
    <div className="mb-[100px]">
        <div className="conatirner w-[1140px] m-auto flex flex-wrap flex-col justify-center items-center">
            <div className="w-[60%] rounded-lg">
            <img className=' rounded-lg w-[100%] ' src="https://img.freepik.com/premium-photo/webmaster-day-connection-error-404-abstract-illustration-connection-error_715074-200.jpg?w=826" alt="" />
            </div>
            <button className=' rounded hover:opacity-80 transition-[0.3s] bg-black text-[18px] font-bold pt-[9px] pb-[9px] pl-[36px] pr-[36px] text-[white]'><Link to='/'>Go to Home</Link></button>
        </div>
    </div>
    </>
  )
}

export default ErrrorComponent