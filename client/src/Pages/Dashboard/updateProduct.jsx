import React, { useState } from "react";
import { useProductStore } from "../../store/store";
import { productUpdate } from "../../halper/halper";
const UpdateProduct = () => {
  const productData = useProductStore((state) => state.product);

  let storeData;

  productData.map((data) => {
    storeData = data;
  });

  console.log(storeData);
  const initialData = {
    userId: storeData._id,
    productName: storeData.productName,
    prodType: storeData.prodType,
    prodWeight: storeData.prodWeight,
    prodPrice: storeData.prodPrice,
    prodDisc: storeData.prodDisc,
    prodImg: storeData.prodImg,
  };

  const [input, setInput] = useState(initialData);

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlerImgInput = async (e) => {
    let base64 = await convertTobase64(e.target.files[0]);
    setInput({
      ...input,
      [e.target.name]: base64,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    productUpdate(input);
  };

  return (
    <div>
      <h1>Data Add Form </h1>
      <div>
        <form onSubmit={submitHandler}>
          <label>Product Name </label>
          <input
            type="text"
            placeholder="Enter Your Product Name "
            name="productName"
            value={input.productName}
            onChange={handleInput}
          />
          <br />
          <br />

          <label>Product Type </label>
          <input
            type="text"
            name="prodType"
            placeholder="Enter Your Product Type "
            value={input.prodType}
            onChange={handleInput}
          />
          <br />
          <br />

          <label>Product Weight </label>
          <input
            type="text"
            name="prodWeight"
            placeholder="Enter Your Product Weight "
            value={input.prodWeight}
            onChange={handleInput}
          />
          <br />
          <br />

          <label>Product Price </label>
          <input
            type="number"
            name="prodPrice"
            placeholder="Enter Your Product price "
            value={input.prodPrice}
            onChange={handleInput}
          />
          <br />
          <br />

          <label>Product Discount </label>
          <input
            type="text"
            name="prodDisc"
            placeholder="Enter Your Product discount "
            value={input.prodDisc}
            onChange={handleInput}
          />
          <br />
          <br />
          <label htmlFor="">Image</label>
          <input
            type="file"
            name="prodImg"
            accept=".png , .jpg, .jpeg"
            onChange={handlerImgInput}
          />

          <button type="submit">Add </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;

function convertTobase64(file) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
