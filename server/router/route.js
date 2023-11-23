// const Router = require("express");
import { Router } from "express";

const router = Router();

// const ProductModel = require("../model/productModel");
import ProductModel from "../model/productModel.js"
// const userModel = require("../model/userModel");
import userModel from "../model/userModel.js";

// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";

// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";
// require('dotenv').config();
import 'dotenv/config'

// const controller = require("../controllers/appController")
import { dataget, signup } from "../controllers/appController.js";

const SECRET_KEY = process.env.SECRET_KEY;


// Product View Request - Get Method
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

// user account

// {
//   "name" : "Pappu Dey",
//   "username" : "coderpappu",
//   "email" : "pappudey.coder@gmail.com",
//   "password" : "1234qwetr",
//   "profile" : "jsdhfkjshdfjksdhfskdjfh"
// }

// user account registration
router.route('/signup').post(signup)

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(422).send({ error: "Please Fill all required fields" });

  const userExit = await userModel.findOne({ username: username });
  if (!userExit) {
    return res.status(422).send({ error: "User not found" });
  } else {
    const passMatch = await bcrypt.compare(password, userExit.password);
    if (!passMatch) return res.status(400).send({ error: "Password not match" });

    const token = jwt.sign({ userId: userExit._id, username: userExit.username }, SECRET_KEY, { expiresIn: '1h' })

    res.status(200).send({ MSG: "Login Successful!", username: userExit.username, token });

  }


});

// GET USER 
router.get("/user/:username", async (req, res) => {
  const { username } = req.params;

  try {
    if (!username) return res.status(501).send({ error: "Invalid Username" });

    let user = await userModel.findOne({ username }).select('-password');

    if (!user) return res.status(402).send({ error: "Couldn't find user" });

    // console.log(user)
    res.status(200).send(user);

  } catch (error) {
    res.status(404).send({ error: "Cannot Find user Data " })
  }
})


// module.exports = router;
export default router;

