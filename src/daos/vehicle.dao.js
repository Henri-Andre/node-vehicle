import Fuels from "../models/model_fuels.js";
import Types from "../models/model_types.js";
import Vehicles from "../models/model_vehicles.js";



// Create

const create  = async ({vehicle, image, history, price, active, video , fuel_id, type_id}) => {
    try {
  
      const vehicles = await Vehicles.create({ 
                                        vehicle, 
                                        image,
                                        history, 
                                        price,
                                        active: true, 
                                        video,
                                        fuel_id,
                                        type_id ,
                                        
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

        ],
        attributes : ['id','vehicle' ,'image','history','price','active']
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

        ],
        attributes : ['id','vehicle' ,'image','history','price','active']
    })
      return vehicle
    } catch (err) {
      console.error(`Error finding all users: ${err.message}`);
      return null;
    }
  };


  const readByTypeId = async (type_id) => {
    try {
      const vehicles = await Vehicles.findAll({
        where: { type_id: type_id },
        include: [
          { model: Fuels },
          { model: Types },
        ],
        attributes: ['id', 'vehicle', 'image', 'history', 'price', 'active']
      });
      return vehicles;
    } catch (err) {
      console.error(`Error finding vehicles by type id: ${err.message}`);
      return null;
    }
  };

// update active

const update = async ({id, active}) => {
  try {
    const vehicle = await Vehicles.findByPk(id)
    await vehicle.update({
                    active 
    });
    return vehicle;
  } catch (err) {
    console.error(`Error updating user: ${err.message}`);
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
    update,
    dlt,
    readByTypeId
}