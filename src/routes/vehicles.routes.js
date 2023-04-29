import { Router } from "express";
import { VehicleController } from "../controllers/vehicle.controller.js";
//import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const initVehiclesRoutes = (app, sm) => {
  const router = Router();
  router.post("/add",sm, VehicleController.createVehicle);
  router.get("/all",sm, VehicleController.readVehicles);
  router.put("/:id/active", sm, VehicleController.updateActive);
  router.get("/:id",sm, VehicleController.readVehicleById);
  router.get("/type/:type_id",sm, VehicleController.readVehicleByTypeId);
  app.use("/vehicles", router);
};

export default initVehiclesRoutes;