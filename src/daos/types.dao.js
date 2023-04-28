import Types from "../models/model_types.js";

const readAll = async () => {
    try {
      const types = await Types.findAll({});
    
      return types
    } catch (err) {
      console.error(`Error finding all users: ${err.message}`);
      return null;
    }
  };


  export const TypesVehicleDAO = {
    readAll
  };
  