import { Router } from "express";
import { VideoController } from "../controllers/video.controller.js";

const initVideosRoutes = (app, sm) => {
  const router = Router();
  router.post("/add",  VideoController.addVideo);
  router.delete("/:id", VideoController.dltVideo)
  app.use("/videos", router);
};

export default initVideosRoutes;