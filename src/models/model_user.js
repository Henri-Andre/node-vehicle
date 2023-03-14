
import { ERRORS } from "../utils/errors.utils.js";
import { emailIsValid } from "../utils/regex.utils.js";
import { DataTypes } from 'sequelize';
import connexion from "../config/database.config.js";


  

const User = connexion.db.define('User', {
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
},
{
    timestamps:true,
    createdAt:'created',
    updatedAt:'updated'
});




export default User;