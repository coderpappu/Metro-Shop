const Router = require("express");
const router = Router();
const ProductModel = require("../model/productModel");

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
  console.log(req.body);
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

router.delete("/:id", async (req, res) => {
  let deleteData = await ProductModel.deleteOne({ _id: req.params.id });
  res.status(200).send("Product Deleted");
});

module.exports = router;
