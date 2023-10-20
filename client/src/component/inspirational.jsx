import React from 'react'
import InspirationalServer from '../server/InspirationalPost'
import InspirationalSigleCard from './InspirationalSigleCard'

const inspirational = () => {
  return (
    <>
    <div className="inspiral mt-[100px] mb-[100px]">
        <div className="conatainer w-[95%] m-auto">
            <div className="conatiner-wrap">
                <div className="header-of-inspirial text-center mb-[30px]">
                    <h1 className='text-[30px] font-semibold font-josefin'>Inspirational Posts</h1>
                </div>
                <div className="conatainer-row flex flex-wrap gap-8">
                    {
                          InspirationalServer.map((d) => <InspirationalSigleCard data= {d}/>)
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default inspirational