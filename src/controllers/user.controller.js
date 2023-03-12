import { UserDAO } from "../daos/user.dao.js";
import { jwtSign } from "../utils/jwt.utils.js";
import { stringIsFilled } from "../utils/string.utils.js";
import { omit, omitMulti } from "../utils/object.utils.js";

const signUp = async (req, res) => {
  const name = req.body.name;
  const first_name = req.body.first_name;
  const email = req.body.email;
  const password = req.body.password;
  const image = req.body.image;

  try {
    const user = await UserDAO.create({ name, first_name, email, password, image });
    const token = jwtSign(user.id);
    res.status(201).json({ message: "user_created", data: user, token });
  } catch (e)
   {
    console.error(e);
    if (e.name === 'SequelizeUniqueConstraintError') {
      return res.status(403).json({ message: `email_already_exist` });
    }
    res.status(500).json({ message: "internal_server_error" });
  }
};

const signIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!stringIsFilled(email) || !stringIsFilled(password)) {
    return res.status(404).json({ message: "email or password is not correct" });
  }

  try {
    const user = await UserDAO.readByEmail({ where: { email: email } });
    if (user && user.password === password) {
      const token = jwtSign(user.id);
      res.status(200).json({ message: "ok", data: user , token });
    } else {
      res.status(401).json({ message: "login_failed" });
    }
  } catch (e) {
    res.status(500).json({ message: "internal_server_error" });
  }
};

const read = async (req, res) => {
  try {
    const users = await UserDAO.readAll();
    res.status(200).json({ data:users});
  } catch (e) {
    res.status(500).json({ message: "internal_server_error" });
  }
};

const getUserInfos = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await UserDAO.readById(userId);
    if (!user) return res.status(400).json({ message: `can't retrieve user` });
    res.status(200).json({data: user, token});
  } catch (e) {
    res.status(500).json({ message: "internal_server_error" });
  }
};

export const UserController = {
  signUp,
  read,
  signIn,
  getUserInfos,
};
