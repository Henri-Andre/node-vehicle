import { TypesVehicleDAO } from "../daos/types.dao.js";

const readTypesVehicles = async (req, res) => {
    try {
      const types = await TypesVehicleDAO.readAll();
      res.status(200).json({ data:types});
    } catch (e) {
      res.status(500).json({ message: "internal_server_error" });
    }
  };



  export const VehicleTypeController = {
    readTypesVehicles
}
