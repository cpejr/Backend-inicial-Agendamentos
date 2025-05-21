import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
  async login(req, res) {
    try {
      console.log("Login iniciado");
      console.log("Corpo da requisição:", req.body);

      const { email, password } = req.body;

      const foundUser = await UserModel.findOne({ email }).select("+password");
      console.log("Usuário encontrado:", foundUser);
      console.log("Password retornado:", foundUser ? foundUser.password : "Usuário não encontrado");

      if (!foundUser) {
        console.log("Usuário não encontrado");
        return res.status(403).json({ message: "Email or password not found" });
      }

      const isMatch = await bcrypt.compare(password, foundUser.password);
      console.log("Resultado da comparação de senha:", isMatch);

      if (!isMatch) {
        console.log("Senha inválida");
        return res.status(403).json({ message: "Invalid email or password" });
      }

      const { password: hashedPassword, ...payload } = foundUser.toObject();

      console.log("Payload para token:", payload);
      console.log("JWT_SECRET:", process.env.JWT_SECRET ? "OK" : "NÃO DEFINIDO");

      // Usa 1 dia como padrão caso não tenha variável de ambiente
      const expiresIn = process.env.JWT_EXPIRE_IN || "1d";

      const token = await jwt.sign(
        { payload },
        process.env.JWT_SECRET,
        { expiresIn }
      );

      console.log("Token JWT gerado:", token);

      // Envia o token como cookie HTTP only
      res.cookie("token", token, {
        httpOnly: true,
        secure: false, // Em produção, você deve usar true com HTTPS
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 dia em ms
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
