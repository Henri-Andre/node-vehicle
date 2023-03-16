import Comments from "../models/model_comments.js";
import User from "../models/model_user.js";
import Vehicles from "../models/model_vehicles.js";




//Create
const create  = async ({comment , user_id, vehicle_id}) => {
    try {
  
      const comments = await Comments.create({ 
                                        comment, 
                                        user_id,
                                        vehicle_id
                                      });
         return comments
    } catch (err) {
      console.error(`Error creating user: ${err.message}`);
      return null;
    }
  };

//Read All

const readAll = async () => {
    try {
      const comments = await Comments.findAll( 
            {
        include : [
            {
                 model : User ,
                 attributes : ['name' ,'first_name']
            },
            { 
                model : Vehicles,
                attributes : ['vehicle']
            }

        ],
    })
      return comments
    } catch (err) {
      console.error(`Error finding all users: ${err.message}`);
      return null;
    }
  };


  export const CommentDAO = {
    create,
    readAll
  }