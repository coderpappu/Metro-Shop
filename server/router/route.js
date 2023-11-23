import bcrypt from "bcrypt";
import "dotenv/config";
import { Router } from "express";

import { dataget, signup, signin, userdataget } from "../controllers/appController.js";
import ProductModel from "../model/productModel.js";
import userModel from "../model/userModel.js";


const router = Router();


/* Product System  */

// Product View Request - Get Method
router.route("/").get(dataget);

// --- Product Add Request - POST Method

// http://localhost:8080/productApi/productAdd

// {
//   "productName" : "Logitech 502 ",
//   "prodType" : "Keyboard",
//   "prodWeight" : "300g",
//   "prodPrice" : 2000,
//   "prodDisc" : 10

// }

router.post("/productAdd", async (req, res) => {
  const {
    productName,
    prodType,
    prodColor,
    prodWeight,
    prodPrice,
    prodDisc,
    prodImg,
  } = req.body;

  // if (
  //   !productName ||
  //   !prodType ||
  //   !prodColor ||
  //   !prodWeigh ||
  //   !prodPrice ||
  //   !prodDisc
  // ) {
  //   return res.status(422).json({ error: "Please Fill All Required Filed." });
  // }

  const product = new ProductModel({
    productName,
    prodType,
    prodColor,
    prodWeight,
    prodPrice,
    prodDisc,
    prodImg,
  });

  await product.save();
  res.status(200).json({ message: "Product Added Successful!" });
});

// product delete
router.delete("/:id", async (req, res) => {
  let deleteData = await ProductModel.deleteOne({ _id: req.params.id });
  res.status(200).send("Product Deleted");
});

// update product
router.put("/updateProduct", async (req, res) => {
  let {
    userId,
    productName,
    prodType,
    prodWeight,
    prodPrice,
    prodDisc,
    prodImg,
  } = req.body;

  ProductModel.updateOne(
    { _id: userId },
    { productName, prodType, prodWeight, prodPrice, prodDisc, prodImg }
  )
    .then(() => {
      res.status(200).send({ message: "Updated Data" });
    })
    .catch((error) => {
      res.status(500).send({ error: "Error" });
    });
});

/* user account */
// {
//   "name" : "Pappu Dey",
//   "username" : "coderpappu",
//   "email" : "pappudey.coder@gmail.com",
//   "password" : "1234qwetr",
//   "profile" : "jsdhfkjshdfjksdhfskdjfh"
// }

// GET USER DATA
router.route('/user/:username').get(userdataget);

// user account registration
router.route("/signup").post(signup);

// user account login system
router.route("/signin").post(signin);


export default router;
