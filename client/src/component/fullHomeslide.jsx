import React from 'react'
import Dataslider from '../server/slideHome'
import HomeSlide from './homeSlide'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
};
const fullHomeslide = () => {
  return (
    <>
    <div className="silder-main w-[100%] bg-[#f7f7f7] h-[500px]" >
        <div className="silder-sec w-[100%]">
            <div className="container w-[1140px] m-auto">
                <div className="">
                    <Carousel 
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    showDots={true}
        
                    removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
                    >
                        {
                          Dataslider.map((d) => <HomeSlide data= {d}/>)
                        }
                    </Carousel>
                  </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default fullHomeslide