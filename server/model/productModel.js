const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: [true, "Please Add Your Product Name"],
  },
  prodType: {
    type: String,
    require: [true, "Please Add Your Product Type"],
  },
  // prodColor: {
  //   type: String,
  //   require: [true, "Please Add Your Product Color"],
  // },
  prodWeight: {
    type: String,
    require: [true, "Please Add Your Product Color"],
  },
  prodPrice: {
    type: Number,
    require: [true, "Please Add Your Product Price"],
  },
  prodDisc: {
    type: Number,
    require: false,
  },
});

module.exports =
  mongoose.model.ProductBDs || mongoose.model("ProductBD", ProductSchema);

//name , price , discount , category , img
