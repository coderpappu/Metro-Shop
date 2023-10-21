import React, { useEffect, useState } from "react";
import { getStudent, deleteProduct } from "../../halper/halper";

const ActionSys = () => {
  let [products, setproducts] = useState([]);
  useEffect(() => {
    dataShowHandler();
  }, []);
  const dataShowHandler = async () => {
    let showDB = await getStudent();

    setproducts(showDB.products);

    return showDB;
  };

  let deleteHandler = (id) => {
    deleteProduct(id);
    dataShowHandler();
    setproducts(products.filter((product) => product.id !== id));
  };
  return (
    <div>
      <h1 className="text-4xl text-center">All Products</h1> <br /> <br />
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prodsData) => (
            <tr key={prodsData._id}>
              <td>1</td>
              <td>{prodsData.productName}</td>
              <td>{prodsData.prodType}</td>
              <td>{prodsData.prodPrice}</td>
              <td>{prodsData.prodDisc}</td>
              <td>
                <button className="px-4 py-3 bg-green-400 ">Edit</button>{" "}
                <button
                  className="px-4 py-3 bg-red-400 "
                  onClick={() => deleteHandler(prodsData._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActionSys;
