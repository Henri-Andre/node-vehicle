import User from "../models/model_user.js";
import { logError } from "../utils/logger.utils.js";
import { getErrors } from "../utils/errors.utils.js";
import { getCurrentDate } from "../utils/date.utils.js";
import { formatUser, formatUsers } from "../utils/user.utils.js";
import { where } from "sequelize";

// import fs from "fs";
// const { appendFile } = fs;

const create  = async ({name, first_name, email, password, image}) => {
  try {
    const user = await User.create({ name, first_name, email, password, image });
    return user.toJSON();
  } catch (err) {
    console.error(`Error creating user: ${err.message}`);
    return null;
  }
};

const readByEmail = async (email) => {
  try {
    const user = await User.findOne(email);
    return user;
  } catch (e) {
    logError(`user.dao - readByEmail : ${e.message}`);
    return null;
  }
};

const readAll = async () => {
  try {
    const users = await User.findAll();
    return users
  } catch (err) {
    console.error(`Error finding all users: ${err.message}`);
    return null;
  }
};

const readById = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    return user
  } catch (e) {
    logError(`user.dao - readById : ${e.message}`);
    return null;
  }
};

export const UserDAO = {
  create: create,
  readByEmail,
  readAll,
  readById,
};
