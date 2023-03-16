import { Router } from "express";
import { CommentsController } from "../controllers/comments.controller.js";

const initCommentsRoutes = (app, sm) => {
    const router = Router();
    router.post("/add" , sm, CommentsController.createComment);
    router.get("/all", sm, CommentsController.readAllComments)
    app.use("/comments", router);
}

export default initCommentsRoutes;