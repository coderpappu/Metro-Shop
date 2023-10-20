import React from 'react'
import Banner from './banner'
import { wishlistbannerServer } from '../server/bannerServer'

const wishlistbanner = () => {
  return (
    <>
    {
        wishlistbannerServer.map((d) => <Banner data= {d}/>)
    }
    </>
  )
}

export default wishlistbanner