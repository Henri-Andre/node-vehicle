
import { DataTypes } from 'sequelize';
import initDb from '../config/database.config.js';
import Roles from './model_role.js';

const db = await initDb()  

const User = db.define('User', {
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
    }
},
{
    timestamps:true,
    createdAt:'created',
    updatedAt:'updated'
});

        User.belongsTo(Roles, 
            { foreignKey: 'role_id' 
        });


export default User;