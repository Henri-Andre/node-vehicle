import Roles from "../models/model_role.js";
import User from "../models/model_user.js";

// import fs from "fs";
// const { appendFile } = fs;

const create  = async ({name, first_name, email, password}) => {
  try {

 

    const user = await User.create({ 
                                      name, 
                                      first_name,
                                      email, 
                                      password, 
                                      role_id : email === 'henri-andre.guillou@3wa.io' ? 2 : 1
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

const updateUser = async ({ id, name, first_name, email, password}) => {
  try {
    const user = await User.findByPk(id)
    
    await user.update({
                       name, 
                       first_name,
                       email, 
                       password 
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
    return user ? user : null;
  } catch (e) {
    console.error();(`${e.message}`);;
  }
};


export const UserDAO = {
  create: create,
  updateUser,
  deleteUser,
  readByEmail,
  readAll,
  readById
};
