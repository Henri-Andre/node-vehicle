import { Router } from "express";
import { VehicleController } from "../controllers/vehicle.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const initVehiclesRoutes = (app, sm) => {
  const router = Router();
  router.post("/add", jwtMiddleware, VehicleController.createVehicle);
  router.get("/",  VehicleController.readVehicles);
  router.get("/:id", VehicleController.readVehicleById);
  app.use("/vehicles", router);
};

export default initVehiclesRoutes;