import { USER_ROLE } from "../constante/user.constants.js";
import { DataTypes } from "sequelize";
import connexion from "../config/database.config.js";


const Roles = connexion.db.define('Roles',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    role : {
        type : DataTypes.STRING(255),
        alloNull : false
    }
});

// Roles.bulkCreate(USER_ROLE)
//   .then(() => {
//     console.log('Default roles created successfully');
//   })
//   .catch((error) => {
//     console.error('Error creating default roles:', error);
//   })

export default Roles;