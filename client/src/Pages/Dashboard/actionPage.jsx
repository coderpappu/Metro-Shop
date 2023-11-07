import React, { useEffect, useState } from "react";
import { getStudent, productDelete } from "../../halper/halper";

import { Link, useNavigate } from "react-router-dom";
import { useProductsStore } from "../../store/store";

const actionPage = () => {
  let [product, setproduct] = useState([]);
  let [productId, setProductId] = useState("");
  let [updateProduct, setUpdateProduct] = useState("");
  const navigate = useNavigate();
  const addCourse = useProductsStore((state) => state.addCourse);

  useEffect(() => {
    dataShowHandler();
  }, []);

  const dataShowHandler = async () => {
    let showDB = await getStudent();

    setproduct(showDB.products);

    return showDB;
  };

  //   delete Handler
  const deleteHandler = async (id) => {
    let { status } = await productDelete(id);

    if (status === 200) {
      dataShowHandler();
      setproduct(product.filter((product) => product.id !== id));
    }
  };

  // update handler
  const updateHandler = async (id) => {
    setProductId(id);

    // let datastore = ;
    // console.log(datastore);
    // setUpdateProduct("ho");

    addCourse(product.filter((product) => product._id === id));
    // navigate("/updateproudct");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((pData) => (
            <tr key={pData._id}>
              <td>01</td>
              <td>{pData.productName}</td>
              <td>{pData.prodPrice}</td>
              <td>{pData.prodType}</td>
              <td>
                <button
                  className="bg-orange-600 p-3"
                  onClick={() => updateHandler(pData._id)}
                >
                  <Link to="/updateproudct">Edit</Link>
                </button>
                <button
                  className="bg-red-500 p-3"
                  onClick={() => deleteHandler(pData._id)}
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

export default actionPage;
