import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const token = req?.cookies?.token;

  if (!token) {
    return res.status(403).json({ message: "Token nao achado nos cookies" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ message: "token inválido" });
    }

    req.userId = user.user?._id;
    req.userType = user.user?.type;

    next();
  });
}

export default authMiddleware;
