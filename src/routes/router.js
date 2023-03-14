import initUsersRoutes from "./users.routes.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.middleware.js";


const initRoutes = (app) => {
  initUsersRoutes(app, sanitizeMiddleware);
  initVideosRoutes
};

export default initRoutes;
