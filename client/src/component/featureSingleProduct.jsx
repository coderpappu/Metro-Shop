import React from "react";

const featureSingleProduct = ({ data }) => {
  return (
    <>
      <div className="single-product relative w-[300px] z-100">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNu3n3yXwM8Y7kbTuTCPS6g8mf4eAlniV6g&usqp=CAU"
          alt=""
          className="z-100"
        />
        <span className="discount absolute text-[12px] text-center pl-[8px] pr-[8px] pt-[2px] pb-[2px] rounded-[4px] bg-black text-[#fff] top-[18px] left-[20px]">
          10
        </span>
        <h3 className="absolute bottom-[80px] left-[20px] text-[#000] font-roboto font-semibold text-[17px]">
          <del className="text-[#959595] font-semibold text-[17px] mr-[7px]">
            1000
          </del>
          {data.prodPrice}
        </h3>
        <button className="absolute bottom-[50px] left-[20px] mb-1 text-[#000] font-roboto font-semibold text-[16px]  after:absolute after:bg-black after:h-[2px] after:w-[20%] after:left-0 after:bottom-[-5px] after:transition-[0.3s] hover:after:w-full">
          {data.prodType}
        </button>
        <p className="absolute bottom-[20px] left-[20px] text-[#666] font-josefin text-[16px] font-semibold">
          {data.prodName}
        </p>
      </div>
    </>
  );
};

export default featureSingleProduct;
