import React from 'react'
import Menu from '../component/menu'
import Wishlistbanner from '../component/wishlistbanner'
import Footer from '../component/footer'
import WishlistMiddle from '../component/wishlistMiddle'

const wishlist = () => {
  return (
    <>
        <Menu/>
        <Wishlistbanner/>
        <WishlistMiddle/>
        <Footer/>
    </>
  )
}

export default wishlist