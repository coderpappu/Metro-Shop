import React from 'react'
import Banner from './banner'
import { contactbannerServer } from '../server/bannerServer'

const contactbanner = () => {
  return (
    <>
    {
        contactbannerServer.map((d) => <Banner data= {d}/>)
    }
    </>
  )
}

export default contactbanner