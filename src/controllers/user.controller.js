import { UserDAO } from "../daos/user.dao.js";
import { jwtSign } from "../utils/jwt.utils.js";
import { stringIsFilled } from "../utils/string.utils.js";
import { omit, omitMulti } from "../utils/object.utils.js";
import { emailIsValid, passwordIsValid } from "../utils/regex.utils.js";
import bcrypt from "bcrypt"



// S'Inscrire

const signUp = async (req, res) => {
  try {
    const { name, first_name, email, password, image } = req.body;

    if (!name || !first_name || !email || !password) {
      return res.status(400).json({ message: 'Request is not complete' });
    }

    

    const pw = await bcrypt.hash(password, 10);
    const user = await UserDAO.create({
      name,
      first_name,
      email,
      password: pw,
      image: image || 'image.png',
    });

  


    if (user) {
      return res.status(403).json({ message: user });
    }

    const validate_email = emailIsValid(email);
    const validate_password = passwordIsValid(password);

    if (!validate_email) {
      return res
        .status(400)
        .json({ message: `The email does not contain the required elements` });
    }

    if (!validate_password) {
      return res
        .status(400)
        .json({ message: `The password does not contain the required elements` });
    }

    const token = jwtSign(user);
    console.log(`token_updateUser: ${token}`);

    res.json({ message: 'An account already exists with this email' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Se Connecter  
                                   

const signIn = async (req, res) => {
  const {email,password} = req.body;

  if (!stringIsFilled(email) || !stringIsFilled(password)) {
    return res.status(404).json({ message: "email or password is not correct" });
  }

  const user = await UserDAO.readByEmail(email);
      console.log(user)
      const passWordIsOk = await bcrypt.compare(password, user?.dataValues?.password)


      if(passWordIsOk){
          const token = jwtSign(user.id);
          console.log(token)
         return res.status(200).json({message:`ok`,data : user,token})
      }else{
         return res.status(401).json({message:`login_failed`})
      }
};


  //modifier un user
  const update = async (req, res) => {
    const { id } = req.params;
    const { name, first_name, email, password, image } = req.body;

    const pw = await  bcrypt.hash(password, 10)
    const user = await UserDAO.updateUser({ id,
                                            name, 
                                            first_name, 
                                            email, 
                                            password : pw, 
                                            image 
                                          });
  
    if (!user) {
      return res.status(404).json({ message: `User with id ${id} not found` });
    }
  
    const validate_email = emailIsValid(email);
    const validate_password = passwordIsValid(password);
  
    if (!validate_email) {
      return res.status(400).json({ message: `Email is invalid` });
    }
  
    if (!validate_password) {
      return res.status(400).json({ message: `Password is invalid` });
    }
  
    const token = jwtSign(user);
    console.log(`token_updateUser: ${token}`);
  
    res.json({ message: 'User updated', data: user, token });
  };
                                       



// supprimer un user
const dltUser = async (req,res)=>{
    const id = req.params.id
    const user = await UserDAO.deleteUser(id)
    if(!user){
        res.status(404).json({message:`User ${id} is delete`})
    }
}


// All user
const read = async (req, res) => {
  try {
    const users = await UserDAO.readAll();
    res.status(200).json({ data:users});
  } catch (e) {
    res.status(500).json({ message: "internal_server_error" });
  }
};


// User By ID
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
  update,
  dltUser,
  read,
  signIn,
  getUserInfos,
};
