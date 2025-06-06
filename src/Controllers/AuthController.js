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

      const accessToken = jwt.sign({ payload }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN || "15m", //colocar o tempo que ache necessario nao esta no .env
      });

      const refreshToken = jwt.sign({ payload }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_REFRESH_EXPIRE_IN || "1d", //colocar o tempo que se ache necessario 
      });

      res.cookie("token", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 15 * 60 * 1000, 
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge:  24 * 60 * 60 * 1000, 
      });

      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Erro no login:", error);
      res.status(500).json({ message: "Error while logging in", error: error.message });
    }
  }

  async refreshToken(req, res) {
    try {
      const token = req.cookies.refreshToken;

      if (!token) {
        return res.status(401).json({ message: "Refresh token nao fornecido" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const newAccessToken = jwt.sign(
        { payload: decoded.payload },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE_IN || "15m" }
      );

      res.cookie("token", newAccessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 15 * 60 * 1000, 
      });

      res.status(200).json({ message: "Token renovado" });
    } catch (error) {
      console.error("Erro ao renovar token:", error);
      res.status(401).json({ message: "Refresh token invàlido" });
    }
  }

  async logout(req, res) {
    try {
      res.clearCookie("token");
      res.clearCookie("refreshToken");
      res.status(200).json({ message: "Deslogado" });
    } catch (error) {
      console.error("Erro no logout:", error);
      res.status(500).json({ message: "Login Falho", error: error.message });
    }
  }
}

export default new AuthController();
