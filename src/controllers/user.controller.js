import bcrypt from "bcrypt";
import { UserDAO } from "../daos/user.dao.js";
import { jwtSign } from "../utils/jwt.utils.js";
import { emailIsValid, passwordIsValid } from "../utils/regex.utils.js";
import { stringIsFilled } from "../utils/string.utils.js";




// S'Inscrire

const signUp = async (req, res) => {
  try {
    const { name, first_name, email, password } = req.body;

    if (!name || !first_name || !email || !password) {
      return res.status(400).json({ message: 'Request is not complete' });
    }

   
    const isEmailValid = emailIsValid(email);
    const isPasswordValid = passwordIsValid(password);

    if (!isEmailValid || !isPasswordValid) {
      return res
        .status(400)
        .json({ message: `email or password  does not contain the required elements` });
    } 

    
    

    const pw = await bcrypt.hash(password, 10);
    const user = await UserDAO.create({
      name,
      first_name,
      email,
      password: pw
    });

    if (user) {
      return res.status(403).json({ message: user });
    }
   


    

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
    const { name, first_name, email} = req.body;
    const password = req.body.password

   
   
      const isEmailValid = emailIsValid(email);
      const isPasswordValid = passwordIsValid(password);
  
    if (!isEmailValid || !isPasswordValid) {
      return res
        .status(400)
        .json({ message: `email or password  does not contain the required elements` });
    }
    
    

    

    
    

    const pw = await  bcrypt.hash(password, 10)
    const user = await UserDAO.updateUser({ id,
                                            name, 
                                            first_name, 
                                            email,
                                            password : pw 
                                          });
  
    if (!user) {
      return res.status(404).json({ message: `User with id ${id} not found` });
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
  const { token, userId } = req.body;
	console.log(token);
  try {
    const users = await UserDAO.readAll();
    res.status(200).json({ data:users});
  } catch (e) {
    res.status(500).json({ message: "internal_server_error" });
  }
};


// User By ID



  const getUserInfos = async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await UserDAO.readById(id);
  
      if (!user) {
        return res.status(404).json({ message: "User non trouvé." });
      }
  
  
  
      res.status(200).json({ user });
    } catch (error) {
      console.error(
        `Erreur lors de la récupération des informations de l'utilisateur : ${error}`
      );
      res.status(500).json({
        message: `Erreur lors de la récupération des informations de l'utilisateur : ${error.message}`,
      });
    }
  };

  const checkToken = async (req, res) => {
    try {
      // Get the user ID from the authenticated request
      const userId = req.user.id;
  
      // Use the UserController to retrieve information about the user
      const user = await UserController.getUserById(userId);
  
      // Return the user information as a JSON object
      res.json(user);
    } catch (err) {
      // Handle any errors that occur during the request
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

export const UserController = {
  signUp,
  update,
  dltUser,
  read,
  signIn,
  getUserInfos,
  checkToken
};
