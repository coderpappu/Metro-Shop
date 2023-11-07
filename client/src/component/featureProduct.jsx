import React, { useState } from "react";
import FeatureSingleProduct from "./featureSingleProduct";
import FeaturedProduct from "../server/featureProduct";
import { getStudent } from "../halper/halper";
import { useEffect } from "react";

// discount: "-4%",
//         taka: "$375.00",
//         discountTaka: "$390.00",
//         cartORamazon: "BUY FROM AMAZON",
//         productName: "Keyboard",
//         img: "https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_3-360x432.jpg",

const featureProduct = () => {
  let [product, setproduct] = useState([]);

  const dataShowHandler = async () => {
    let showDB = await getStudent();

    setproduct(showDB.products);

    return showDB;
  };

  useEffect(() => {
    dataShowHandler();
  }, []);

  return (
    <>
      <div className="feature mt-[90px] pb-[40px]">
        <div className="feature-product">
          <div className="container w-[95%] m-auto">
            <div className="container-wrap">
              <div className="header-of-fearture-product pb-[30px]">
                <h1 className="text-center font-josefin text-[28px] font-semibold">
                  Featured Products
                </h1>
              </div>
              <div className="conrainer-row flex flex-wrap">
                <div className="left-big-product w-[49%] mr-[1%]">
                  <div className="left-product-card relative">
                    <img
                      src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/01/vr.jpg"
                      alt=""
                    />
                    <span className="discount absolute text-[12px] text-center pl-[8px] pr-[8px] pt-[2px] pb-[2px] rounded-[4px] bg-black text-[#fff] top-[18px] left-[20px]">
                      -4%
                    </span>
                    <h3 className="absolute bottom-[80px] left-[20px] text-[#000] font-roboto font-semibold text-[17px]">
                      <del className="text-[#959595] font-semibold text-[17px] mr-[7px]">
                        $390.00
                      </del>
                      $375.00
                    </h3>
                    <button className="absolute bottom-[50px] left-[20px] mb-1 text-[#000] font-roboto font-semibold text-[16px]  after:absolute after:bg-black after:h-[2px] after:w-[20%] after:left-0 after:bottom-[-5px] after:transition-[0.3s] hover:after:w-full">
                      ADD TO CART
                    </button>
                    <p className="absolute bottom-[20px] left-[20px] text-[#666] font-josefin text-[16px] font-semibold">
                      Game Controller
                    </p>
                  </div>
                </div>
                <div className="right-products w-[49%] ml-[1%]">
                  <div className="products-card flex flex-wrap gap-6">
                    {product.map((pd) => (
                      <FeatureSingleProduct data={pd} key={pd._id} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="linefeatureProduct mt-[20px] ml-[5px]">
                <div className="flex flex-wrap gap-6">
                  {product.map((d) => (
                    <FeatureSingleProduct data={d} key={d._id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default featureProduct;
