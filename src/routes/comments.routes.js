import { Router } from "express";
import { CommentsController } from "../controllers/comments.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const initCommentsRoutes = (app) => {
    const router = Router();
    router.post("/add" ,jwtMiddleware,  CommentsController.createComment);
    router.get("/all",  CommentsController.readAllComments)
    app.use("/comments", router);
}

export default initCommentsRoutes;