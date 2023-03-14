
import { DataTypes } from 'sequelize';
import connexion from "../config/database.config.js";
import Fuels from './model_fuels.js';
import Types from './model_types.js';
import Videos from './model_videos.js';



  

const Vehicles = connexion.db.define('Vehicles', {
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


Fuels.hasMany(Vehicles,
     
    { foreignKey: 'fuel_id' 

    });




// Type
Vehicles.belongsTo(Types, 
    { foreignKey: 'type_id' 
});

Types.hasMany(Vehicles,
      { foreignKey: 'type_id' 
});

 
// Video 

Vehicles.belongsTo(Videos, 
    { foreignKey: 'video_id' 
});

Videos.hasMany(Vehicles,
      { foreignKey: 'video_id' 
});

    




export default Vehicles;