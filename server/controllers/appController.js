import ProductModel from "../model/productModel.js"
import userModel from "../model/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


// SECRET_KEY
const SECRET_KEY = process.env.SECRET_KEY;

// USER DATA GET CONTROLLER  

export const userdataget = async (req, res) => {
	const { username } = req.params;

	try {
		if (!username) return res.status(501).send({ error: "Invalid Username" });

		let user = await userModel.findOne({ username }).select("-password");

		if (!user) return res.status(402).send({ error: "Couldn't find user" });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send({ error: "Cannot Find user Data " });
	}
}
// USER REGISTRATION CONTROLLER  
export async function signup(req, res) {
	const { name, username, email, password, profile } = req.body;

	try {
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
	} catch (error) {
		res.status(402).send({ error: "User Registration Server Error!" })
	}
}
// USER LOGIN CONTROLLER 
export const signin = async (req, res) => {
	const { username, password } = req.body;

	try {
		if (!username || !password)
			return res.status(422).send({ error: "Please Fill all required fields" });

		const userExit = await userModel.findOne({ username: username });

		if (!userExit) {
			return res.status(422).send({ error: "User not found" });
		} else {
			const passMatch = await bcrypt.compare(password, userExit.password);
			if (!passMatch)
				return res.status(400).send({ error: "Password not match" });

			const token = jwt.sign(
				{ userId: userExit._id, username: userExit.username },
				SECRET_KEY,
				{ expiresIn: "1h" }
			);

			res
				.status(200)
				.send({ MSG: "Login Successful!", username: userExit.username, token });
		}
	} catch (error) {
		res.status(402).send({ error: "User Login Server Error!" })
	}
}

// PROTECTED ROUTE TOKEN BASE CONTROLLER 
export const userAuth = async (req, res) => {

	res.status(200).send("Ok")
}



// ALL PROUDUCTS GET CONTROLLER 
export const allproductsget = async (req, res) => {
	try {
		const productData = await ProductModel.find({});
		res.status(200).json({ products: productData });
	} catch (error) {
		res.status(402).send({ error: "All Product Get server error!" })
	}
}

// PRODUCT ADD CONTROLLER  
export const productAdd = async (req, res) => {
	const {
		productName,
		prodType,
		prodWeight,
		prodPrice,
		prodDisc,
		prodImg,
	} = req.body;

	try {
		if (
			!productName ||
			!prodType ||
			!prodWeight ||
			!prodPrice ||
			!prodDisc ||
			!prodImg
		) {
			return res.status(422).send({ error: "Please Fill All Required Filed." });
		}

		const product = new ProductModel({
			productName,
			prodType,
			prodWeight,
			prodPrice,
			prodDisc,
			prodImg,
		});

		await product.save();
		res.status(200).send({ message: "Product Added Successful!" });
	} catch (error) {
		res.status(402).send({ error: "Server Error - Product not Add" })
	}
}

// PRODUCT UPDATE CONTROLLER 
export const updateProduct = async (req, res) => {
	let {
		userId,
		productName,
		prodType,
		prodWeight,
		prodPrice,
		prodDisc,
		prodImg,
	} = req.body;

	if (
		!userId ||
		!productName ||
		!prodType ||
		!prodWeight ||
		!prodPrice ||
		!prodDisc ||
		!prodImg
	) {
		return res.status(422).send({ error: "Please Fill All Required Filed." });
	}

	ProductModel.updateOne(
		{ _id: userId },
		{ productName, prodType, prodWeight, prodPrice, prodDisc, prodImg }
	)
		.then(() => {
			res.status(200).send({ message: "Successfully Updated Data" });
		})
		.catch((error) => {
			res.status(500).send({ error: "Server Error - Product Update" });
		});
}
// PRODUCT DELETE CONTROLLER 
export const productDelete = async (req, res) => {
	try {
		let deleteData = await ProductModel.deleteOne({ _id: req.params.id });
		res.status(200).send("Product Deleted");
	} catch (error) {
		res.status(402).send({ error: "Product delete - server Error !" })
	}
}

