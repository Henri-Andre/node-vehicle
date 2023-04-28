import jwt from "jsonwebtoken";
import { secret } from "../config/jwt.config.js";
import { stringIsFilled } from "./string.utils.js";

// Options pour la création d'un token JWT
const jwtOptions = {
  expiresIn: `28800000`, // 8h
};


export const jwtVerify = (token) => {
  try {
    // Vérifie si le token est valide en le décodant avec la clé secrète
    const decoded = jwt.verify(token, secret);
    // Extrait l'identifiant utilisateur encodé dans le token
    const userId = decoded.data;
    // Si l'identifiant est une chaîne de caractères non vide, retourne-le, sinon retourne une chaîne vide
    return stringIsFilled(userId) ? userId : "";
  } catch (err) {
    // En cas d'erreur lors de la vérification du token, log l'erreur et retourne null
    console.error(`jwtVerify: error => `, err);
    return null;
  }
};

export const jwtSign = (data) => jwt.sign({ data }, secret, jwtOptions);
