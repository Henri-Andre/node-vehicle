
import { DataTypes } from 'sequelize';
import Fuels from './model_fuels.js';
import Types from './model_types.js';
import initDb from '../config/database.config.js';

const db = await initDb() 



  

const Vehicles = db.define('Vehicles', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    vehicle : {
        type : DataTypes.STRING(255),
        alloNull : false
    },
    image : {
        type : DataTypes.STRING(255),
        alloNull : false
    },
    history : {
        type : DataTypes.TEXT,
        alloNull : false
    },
    price : {
        type : DataTypes.INTEGER,
        alloNull : false
    },
    active : {
        type : DataTypes.BOOLEAN,
        alloNull: false
    },
    video : {
        type : DataTypes.STRING(255),
        alloNull : false
    }


},
{
    timestamps:true,
    createdAt:'created',
    updatedAt:'updated'
});



// Fuel
Vehicles.belongsTo(Fuels, 
    { foreignKey: 'fuel_id' 
});

// Type
Vehicles.belongsTo(Types, 
    { foreignKey: 'type_id' 
});


 




export default Vehicles;