import { Router } from "express";
import { VehicleTypeController } from "../controllers/types.controller.js";

const initVehiclesTypesRoutes = (app, sm) => {
    const router = Router();
    router.get("/all", sm, VehicleTypeController.readTypesVehicles);
    app.use("/vehicles/types", router);
  };
  
  export default initVehiclesTypesRoutes;