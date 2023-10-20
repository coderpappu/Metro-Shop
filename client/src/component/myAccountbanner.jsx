import React from 'react'
import Banner from './banner'
import { myAccountbannerServer } from '../server/bannerServer'

const myAccountbanner = () => {
  return (
     <>
    {
        myAccountbannerServer.map((d) => <Banner data= {d}/>)
    }
    </>
  )
}

export default myAccountbanner