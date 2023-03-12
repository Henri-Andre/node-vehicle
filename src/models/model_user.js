
import { ERRORS } from "../utils/errors.utils.js";
import { emailIsValid } from "../utils/regex.utils.js";
import { Sequelize, DataTypes } from 'sequelize';
import initDb from '../config/database.config.js';



const sequelize = new Sequelize(process.env.MARIADB_URI || 'mariadb://root@localhost:3306/popcars');

sequelize.sync({ 
    //force: false
 }).then(() => {
    console.log('User table created');
  }).catch((err) => {
    console.log(err);
  });
  

const User = sequelize.define('User', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name : {
        type : DataTypes.STRING(255),
        alloNull : false
    },
    
    first_name : {
        type : DataTypes.STRING(255),
        alloNull : false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          message: 'email deja pris'
        }
      },
    password : {
        type: DataTypes.STRING(255),
        allowNull : false
    },
    
    image : {
        type : DataTypes.STRING(255),
        allowNull: false
    }
});




export default User;