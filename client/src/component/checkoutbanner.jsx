import React from 'react'
import Banner from './banner'
import { checkoutbannerServer } from '../server/bannerServer'

const checkoutbanner = () => {
  return (
    <>
    {
        checkoutbannerServer.map((d) => <Banner data= {d}/>)
    }
    </>
  )
}

export default checkoutbanner