import { Router } from "express";
import { VideoController } from "../controllers/video.controller.js";

const initVideosRoutes = (app, sm) => {
  const router = Router();
  router.post("/add", sm, VideoController.addVideo);
  router.delete("/:id",sm , VideoController.dltVideo)
  app.use("/videos", router);
};

export default initVideosRoutes;