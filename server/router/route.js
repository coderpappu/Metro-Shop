const Router = require("express");
const router = Router();
const ProductModel = require("../model/productModel");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;


// Product View Request - Get Method
router.get("/", async (req, res) => {
  const productData = await ProductModel.find({});
  res.status(200).json({ products: productData });
});

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
router.post("/signup", async (req, res) => {
  const { name, username, email, password, profile } = req.body;

  if (!name || !username || !email || !password || !profile) {
    return res.status(411).send({ error: "Please fill the require field" });
  }

  let exitUserName = await userModel.findOne({ username });

  if (exitUserName) {
    return res.status(422).send({ error: "User name already exit!" });
  }

  let exitEmail = await userModel.findOne({ email });

  if (exitEmail) {
    return res.status(422).send({ error: "User Email already exit!" });
  }

  const hashedpassword = await bcrypt.hash(password, 10);

  const user = new userModel({
    name,
    username,
    email,
    password: hashedpassword,
    profile: profile || "",
  });
  user.save();

  res.status(200).send({ message: "Registration Successful" });
});

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

module.exports = router;
