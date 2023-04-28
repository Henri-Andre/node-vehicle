import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const initUsersRoutes = (app, sm) => {
  const router = Router();
  router.get("/readAll", sm,UserController.read);
  router.get("/readById/:id", sm,  UserController.getUserInfos);
  router.put("/update/:id", sm, UserController.update)
  router.post("/sign-up", sm, UserController.signUp);
  router.post("/sign-in", sm, UserController.signIn);
  router.delete("/delete/:id",jwtMiddleware, sm, UserController.dltUser);
  router.get("/check-token",jwtMiddleware, sm, UserController.checkToken);
  app.use("/users", router);
};

export default initUsersRoutes;
 