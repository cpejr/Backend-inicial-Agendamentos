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

      const { password: _, ...payload } = foundUser.toObject();

      const token = jwt.sign(
        { payload },
        process.env.JWT_SECRET || "default_secret",       
        { expiresIn: process.env.JWT_EXPIRE_IN || "1h" }  
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: true, 
        sameSite: 'Strict',
        maxAge: 3600000, // one hour
      });

      return res.status(200).json({ message: "Logged in successfully" });

    } catch (error) {
      return res.status(500).json({ message: "Error while logging in user", error: error.message });
    }
  }
}

export default new AuthController();
