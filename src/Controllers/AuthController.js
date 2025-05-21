import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const foundUser = await UserModel.findOne({ email }).select("+password");

      if (!foundUser) {
        return res.status(403).json({ message: "Email or password not found" });
      }

      const isMatch = await bcrypt.compare(password, foundUser.password);

      if (!isMatch) {
        return res.status(403).json({ message: "Invalid email or password" });
      }

      const { password: hashedPassword, ...payload } = foundUser.toObject();

      const expiresIn = process.env.JWT_EXPIRE_IN || "1d";

      const token = await jwt.sign(
        { payload },
        process.env.JWT_SECRET,
        { expiresIn }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: false, 
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Erro no login:", error);
      res
        .status(500)
        .json({ message: "Error while creating user", error: error.message });
    }
  }
}

export default new AuthController();
