import { DataTypes } from 'sequelize';
import {TYPE_VEHICLE} from '../constante/types.vehicle.constant.js';
import initDb from '../config/database.config.js';

const db = await initDb() 

  

const Types = db.define('Types', {
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