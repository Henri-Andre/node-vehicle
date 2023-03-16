import Vehicles from "../models/model_vehicles.js";
import Fuels from "../models/model_fuels.js";
import Types from "../models/model_types.js";
import Videos from "../models/model_videos.js";



// Create

const create  = async ({vehicle, image, history, price, active , fuel_id, type_id, video_id}) => {
    try {
  
      const vehicles = await Vehicles.create({ 
                                        vehicle, 
                                        image,
                                        history, 
                                        price,
                                        active: true, 
                                        fuel_id,
                                        type_id ,
                                        video_id
                                      });
         return vehicles
    } catch (err) {
      console.error(`Error creating user: ${err.message}`);
      return null;
    }
  };

  
// Find All

  const readAll = async () => {
    try {
      const vehicles = await Vehicles.findAll( 
            {
        include : [
            { model : Fuels },
            { model : Types },
            { model : Videos },
            { model : Fuels }

        ],
        attributes : ['vehicle' ,'image','history','price','active']
    })
      return vehicles
    } catch (err) {
      console.error(`Error finding all users: ${err.message}`);
      return null;
    }
  };



// Find By ID

  const readById = async (id) => {
    try {
      const vehicle = await Vehicles.findByPk(id, 
            {
        include : [
            { model : Fuels },
            { model : Types },
            { model : Videos },
            { model : Fuels}

        ],
        attributes : ['id','vehicle' ,'image','history','price','active']
    })
      return vehicle
    } catch (err) {
      console.error(`Error finding all users: ${err.message}`);
      return null;
    }
  };


// Delete By ID

const dlt = (id)=>{
  User.findByPk(id)
      .then(vehicle => {
          vehicle.destroy()
      })
}

export const VehicleDAO = {
    create,
    readAll,
    readById,
    dlt
}