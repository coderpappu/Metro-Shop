import React, { useState } from "react";
import { addProduct } from "../halper/halper";
// {
//   "productName" : "Logitech 502 ",
//   "prodType" : "Keyboard",
//   "prodWeight" : "300g",
//   "prodPrice" : 2000,
//   "prodDisc" : 10

// }

const productAdd = () => {
  const initialData = {
    productName: "",
    prodType: "",
    prodWeight: "",
    prodPrice: "",
    prodDisc: "",
  };

  const [input, setInput] = useState(initialData);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addProduct(input);
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
            onChange={handleInput}
          />
          <br />
          <br />

          <label>Product Type </label>
          <input
            type="text"
            name="prodType"
            placeholder="Enter Your Product Type "
            onChange={handleInput}
          />
          <br />
          <br />

          <label>Product Weight </label>
          <input
            type="text"
            name="prodWeight"
            placeholder="Enter Your Product Weight "
            onChange={handleInput}
          />
          <br />
          <br />

          <label>Product Price </label>
          <input
            type="number"
            name="prodPrice"
            placeholder="Enter Your Product price "
            onChange={handleInput}
          />
          <br />
          <br />

          <label>Product Discount </label>
          <input
            type="text"
            name="prodDisc"
            placeholder="Enter Your Product discount "
            onChange={handleInput}
          />
          <br />
          <br />

          <button type="submit">Add </button>
        </form>
      </div>
    </div>
  );
};

export default productAdd;
