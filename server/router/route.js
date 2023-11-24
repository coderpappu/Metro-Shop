import bcrypt from "bcrypt";
import "dotenv/config";
import { Router } from "express";
import * as controller from "../controllers/appController.js";
import ProductModel from "../model/productModel.js";
import userModel from "../model/userModel.js";
// middleware 
import { requireSignin } from "../middleware/middleware.js";

// const token = localStorage.getItem("token");

const router = Router();

/* Product System  */

// ALL PRODUCTS GET
router.route("/").get(controller.allproductsget);

//PRODUCT ADD
router.route('/productAdd').post(controller.productAdd)

// PRODUCT DELETE
router.route("/:id").delete(controller.productDelete)

// UPDATE PRODUCT DETAILS
router.route("/updateProduct").put(controller.updateProduct)

/* user account */

// GET USER DATA
router.route('/user/:username').get(controller.userdataget);

// user account registration
router.route("/signup").post(controller.signup);

// user account login system
router.route("/signin").post(controller.signin);

// protected route token base 
router.route("/user-auth").get(requireSignin, controller.userAuth)

export default router;
