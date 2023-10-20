import'react'
import Menu from "../component/menu"
import Searchvar from '../component/searchvar'
import FullHomeslide from '../component/fullHomeslide'
import CollectionAndtrending from '../component/collectionAndtrending'
import FeatureProduct from '../component/featureProduct'
import Newsletter from '../component/newsletter'
import Inspirational from '../component/inspirational'
import Footer from '../component/footer'


const home = ()=> {

  return (
    <>
      <Menu/>
      <Searchvar/>
      <FullHomeslide/>
      <CollectionAndtrending/>
      <FeatureProduct/>
      <Newsletter/>
      <Inspirational/>
      <Footer/>
    </>
  )
}

export default home