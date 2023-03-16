import { Router } from "express";
import { VehicleController } from "../controllers/vehicle.controller.js";

const initVehiclesRoutes = (app, sm) => {
  const router = Router();
  router.post("/add", sm, VehicleController.createVehicle);
  router.get("/", sm, VehicleController.readVehicles);
  router.get("/:id",sm , VehicleController.readVehicleById);
  app.use("/vehicles", router);
};

export default initVehiclesRoutes;