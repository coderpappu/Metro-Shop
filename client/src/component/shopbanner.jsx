import React from 'react'
import Banner from './banner'
import shopbannerServer from '../server/bannerServer'


const shopbanner = () => {
  return (
    <>
    {
        shopbannerServer.map((d) => <Banner data= {d}/>)
    }
    </>
  )
}

export default shopbanner