import { DataTypes } from "sequelize";
import connexion from "../config/database.config.js";
import User from "./model_user.js";
import Vehicles from "./model_vehicles.js";


const Comments = connexion.db.define('Comments', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    comment : {
        type : DataTypes.TEXT,
        alloNull : false
    }

},
{
    timestamps:true,
    createdAt:'created',
    updatedAt:false
});



// User
Comments.belongsTo(User, 
    { foreignKey: 'user_id' 
});

User.hasMany(Comments,
      { foreignKey: 'user_id' 
});



// Vehicle
Comments.belongsTo(Vehicles, 
    { foreignKey: 'vehicle_id' 
});

Vehicles.hasMany(Comments,
      { foreignKey: 'vehicle_id' 
});


export default Comments;

