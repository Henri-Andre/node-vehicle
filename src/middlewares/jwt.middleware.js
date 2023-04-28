import { jwtVerify } from "../utils/jwt.utils.js";

// Middleware pour vérifier la validité du JWT
export const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Jetons d\'authentification non fourni.');
  }
  const userId = jwtVerify(token);
  if (!userId) return res.status(403).json({ message: "unauthorized" });
  req.body = { ...req.body, userId };
  next();
};
