import { FUEL_VEHICLE } from '../constante/fuels.constant.js';
import { DataTypes } from 'sequelize';
import connexion from "../config/database.config.js";


  

const Fuels = connexion.db.define('Fuels', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    fuel : {
        type : DataTypes.STRING(255),
        alloNull : false
    }
},
{
    timestamps:false,
    createdAt:'created',
    updatedAt:'updated'
});


//   Fuels.bulkCreate(FUEL_VEHICLE)
//     .then(() => {
//       console.log('Default roles created successfully');
//     })
//     .catch((error) => {
//       console.error('Error creating default roles:', error);
//     })


export default Fuels;