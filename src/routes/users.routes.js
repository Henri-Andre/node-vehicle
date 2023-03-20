import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";
import { UserController } from "../controllers/user.controller.js";

const initUsersRoutes = (app) => {
  const router = Router();
  router.get("/read", UserController.read);
  router.put("/update/:id", UserController.update)
  router.post("/sign-up", UserController.signUp);
  router.post("/sign-in", UserController.signIn);
  router.delete("/delete/:id", UserController.dltUser);
  router.get("/check-token", jwtMiddleware,  UserController.getUserInfos);

  app.use("/users", router);
};

export default initUsersRoutes;
