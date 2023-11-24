import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;

export const requireSignin = async (req, res, next) => {

	let token = req.headers.authorization.split(" ")[1];

	try {
		if (!token) return res.status(500).send({ error: "Token not found" });
		const decode = jwt.verify(req.headers.authorization.split(" ")[1], SECRET_KEY)

		req.user = decode;

		next();

	} catch (error) {
		res.status(500).send({ error })

	}
}