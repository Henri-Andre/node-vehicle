import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";
import { UserController } from "../controllers/user.controller.js";

const initUsersRoutes = (app, sm) => {
  const router = Router();
  router.get("/read", sm, UserController.read);
  router.post("/sign-up", sm, UserController.signUp);
  router.post("/sign-in", sm, UserController.signIn);
  router.get("/check-token", jwtMiddleware, sm, UserController.getUserInfos);

  app.use("/users", router);
};

export default initUsersRoutes;
