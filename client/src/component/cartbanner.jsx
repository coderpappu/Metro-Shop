import React from 'react'
import Banner from './banner'
import { cartbannerServer } from '../server/bannerServer'

const cartbanner = () => {
  return (
    <>
    {
        cartbannerServer.map((d) => <Banner data= {d}/>)
    }
    </>
  )
}

export default cartbanner