import React from 'react'
import Menu from '../component/menu'
import Cartbanner from '../component/cartbanner'
import EmpityCartcomponent from '../component/empityCartcomponent'
import Footer from '../component/footer'

const cart = () => {
  return (
    <>
    <Menu/>
    <Cartbanner/>
    <EmpityCartcomponent/>
    <Footer/>
    </>
  )
}

export default cart