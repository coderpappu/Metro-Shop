import ProductModel from "../model/productModel.js"
import userModel from "../model/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

// SECRET_KEY
const SECRET_KEY = process.env.SECRET_KEY;

// USER DATA GET 


export const userdataget = async (req, res) => {
	const { username } = req.params;

	try {
		if (!username) return res.status(501).send({ error: "Invalid Username" });

		let user = await userModel.findOne({ username }).select("-password");

		if (!user) return res.status(402).send({ error: "Couldn't find user" });

		// console.log(user)
		res.status(200).send(user);
	} catch (error) {
		res.status(404).send({ error: "Cannot Find user Data " });
	}
}

// USER REGISTRATION 
export async function signup(req, res) {
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
}

// USER LOGIN
export const signin = async (req, res) => {
	const { username, password } = req.body;

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
}
export async function dataget(req, res) {
	const productData = await ProductModel.find({});
	res.status(200).json({ products: productData });
}





