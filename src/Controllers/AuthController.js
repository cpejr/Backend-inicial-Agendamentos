const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!process.env.JWT_SECRET) {
                console.error("JWT_SECRET não está definido no ambiente");
                throw new Error("JWT_SECRET is not defined");
            }
            const foundUser = await UserModel.findOne({ email }).select("+password");
            if (!foundUser) {
                return res.status(403).json({ message: "Email or password not found" });
            }

            const isMatch = await bcrypt.compare(password, foundUser.password);
            if (!isMatch) {
                return res.status(403).json({ message: "Invalid email or password" });
            }

            const { password: hashedPassword, ...payload } = foundUser.toObject();

            const token = jwt.sign(
                { payload },
                process.env.JWT_SECRET
            );

            res.status(200).json({ token });
        } catch (error) {
            console.error("Erro durante o login:", error);
            res.status(500).json({ message: "Error during login", error: error.message });
        }
    }
}

module.exports = new AuthController();