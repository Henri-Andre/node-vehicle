import { DataTypes } from 'sequelize';
import connexion from "../config/database.config.js";
import {TYPE_VEHICLE} from '../constante/types.vehicle.constant.js';

  

const Types = connexion.db.define('Types', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    type : {
        type : DataTypes.STRING(255),
        alloNull : false
    }

},
{
    timestamps:false,
    createdAt:'created',
    updatedAt:'updated'
});




//   Types.bulkCreate(TYPE_VEHICLE)
//     .then(() => {
//       console.log('Default types created successfully');
//     })
//     .catch((error) => {
//       console.error('Error creating default types:', error);
//     });


export default Types;