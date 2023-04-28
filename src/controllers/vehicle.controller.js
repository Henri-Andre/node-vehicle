 import { VehicleDAO } from "../daos/vehicle.dao.js";



// Create Vehicle
 const createVehicle = async (req, res) => {
    const {vehicle, image, history, price, video, fuel_id, type_id} = req.body

    if (!vehicle || !image || !history || !price || !video || !fuel_id || !type_id ) {
      return res.status(400).json({ message: ' request is not complet' });
      }
      const vehicles = await VehicleDAO.create({ 
                                          vehicle, 
                                          image, 
                                          history, 
                                          price,
                                          video,
                                          fuel_id,
                                          type_id,
                                          
                                        });

      if(vehicles){
       return res.status(403).json({message: vehicles })
      }
    
      res.json({ message: 'Vehicle add', data: vehicles });
    };


// All Vehicle
const readVehicles = async (req, res) => {
  try {
    const vehicles = await VehicleDAO.readAll();
    res.status(200).json({ data:vehicles});
  } catch (e) {
    res.status(500).json({ message: "internal_server_error" });
  }
};


// User By ID

const readVehicleById= async (req, res) => {
  const id = req.params.id
  try {
    const vehicle = await VehicleDAO.readById(id);
    if (!vehicle) return res.status(400).json({ message: `can't retrieve vehicle` });
    res.status(200).json({data: vehicle});
  } catch (e) {
    res.status(500).json({ message: "internal_server_error" });
  }
};



const readVehicleByTypeId = async (req, res) => {
  const typeId = req.params.type_id;
  try {
    const vehicles = await VehicleDAO.readByTypeId(typeId);
    if (!vehicles.length) return res.status(400).json({ message: `No vehicle of type id ${typeId} found` });
    res.status(200).json({ data: vehicles });
  } catch (e) {
    res.status(500).json({ message: "internal_server_error" });
  }
};











export const VehicleController = {
    createVehicle,
    readVehicles,
    readVehicleById,
    readVehicleByTypeId
}