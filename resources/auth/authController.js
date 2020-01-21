const bcrypt = require("bcrypt");
const crypto = require("crypto");

const model = require("./model");
const generateToken = require("../../utils/generateToken");
const { welcomeText } = require("../../utils/constants");
const { EMAIL_SECRET } = require("../../config");
const emailTemplate = require("../../templates/confirmEmail");
const resetPasswordTemplate = require("../../templates/forgotPassword");
const sendEmail = require("../../utils/sendEmail");

exports.signup = async (req, res) => {
	try {
		const { email, name, password } = req.body;

		const hashedPassword = bcrypt.hashSync(password, 10);

		const userCreated = await model.createUser({
			email,
			password: hashedPassword,
			name: name
		});

		const token = generateToken(userCreated);

		res.status(201).json({
			message: `User created successfully`,
			token,
			user: userCreated
		});
	} catch (error) {
		res.status(500).json({ message: `Failed to sign user up` });
	}
};

exports.login = async (req, res) => {
	try {
		const {
			user,
			body: { password }
		} = req;

		const isPasswordValid = bcrypt.compareSync(password, user.password);
		if (isPasswordValid) {
			delete user.password;
			const token = generateToken(user);

			res.status(200).json({
				message: `Welcome. You're logged in!`,
				data: { token, user }
			});
		} else {
			res.status(401).json({ message: "Invalid credentials" });
		}
	} catch (error) {
		res.status(500).json({ message: `Failed to log user in` });
	}
};
