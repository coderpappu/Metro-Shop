import ProductModel from "../model/productModel.js"

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



export async function dataget(req, res) {
	const productData = await ProductModel.find({});
	res.status(200).json({ products: productData });
}



