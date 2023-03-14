import { DataTypes } from "sequelize";
import connexion from "../config/database.config.js";



const Videos = connexion.db.define('Videos',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name:{
        type : DataTypes.STRING(255),
        alloNull : false
    },

    typeofvideo : {
        type : DataTypes.STRING(255),
        alloNull : false
    },
    date : {
        type : DataTypes.DATE,
        alloNull: false
    }
},
{
    timestamps:false,
    createdAt:'created',
    updatedAt:'updated'
});

export default Videos;