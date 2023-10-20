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
    require: true,
  },
});

module.exports =
  mongoose.model.ProductBDs || mongoose.model("ProductBD", ProductSchema);
