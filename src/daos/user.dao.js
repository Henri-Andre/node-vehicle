import User from "../models/model_user.js";
import { logError } from "../utils/logger.utils.js";
import { getErrors } from "../utils/errors.utils.js";
import { getCurrentDate } from "../utils/date.utils.js";
import { formatUser, formatUsers } from "../utils/user.utils.js";
import { where } from "sequelize";
import Roles from "../models/model_role.js";

// import fs from "fs";
// const { appendFile } = fs;

const create  = async ({name, first_name, email, password, image}) => {
  try {

 


    const user = await User.create({ 
                                      name, 
                                      first_name,
                                      email, 
                                      password, 
                                      image,
                                      role_id : 1 
                                    });
    return user
  } catch (err) {
    console.error(`Error creating user: ${err.message}`);
    return null;
  }
};

const readByEmail = async (email) => {
  try {
      const user = await User.findOne(
      {
        where:  {email:email},
        include : [
          { model : Roles },
      ]
      });
 
  return user ;
  } catch (e) {
    console.error(`user.dao - readByEmail : ${e.message}`); 
    return null;
  }
};

const readAll = async () => {
  try {
    const users = await User.findAll({
      include : [
        { model : Roles}
      ]
    });
    return users
  } catch (err) {
    console.error(`Error finding all users: ${err.message}`);
    return null;
  }
};

const updateUser = async ({ id, name, first_name, email, password, image,  }) => {
  try {
    const user = await User.findByPk(id)
    await user.update({
                       name, 
                       first_name,
                       email, 
                       password,
                       image 
    });
    return user;
  } catch (err) {
    console.error(`Error updating user: ${err.message}`);
    return null;
  }
};


const deleteUser = (id)=>{
  User.findByPk(id)
      .then(user => {
          user.destroy()
      })
}

const readById = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    return user
  } catch (e) {
    console.error();(`${e.message}`);
    return null;
  }
};

export const UserDAO = {
  create: create,
  updateUser,
  deleteUser,
  readByEmail,
  readAll,
  readById,
};
