import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const foundUser = await UserModel.findOne({ email }).select("+senha");
      if (!foundUser)
        return res.status(403).json({ message: "Email or password not found" });

      const isMatch = await bcrypt.compare(senha, foundUser.senha);
      if (!isMatch)
        return res.status(403).json({ message: "Invalid email or password" });

      const { senha: hashedPassword, ...payload } = foundUser.toObject();

      const token = await jwt.sign(
        {
          payload,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE_IN }
      );

      res.status(200).json({ token });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while creating user", error: error.message });
    }
  }
}

export default new AuthController();
