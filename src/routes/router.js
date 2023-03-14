import initUsersRoutes from "./users.routes.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.middleware.js";
import initVideosRoutes from "./videos.routes.js";


const initRoutes = (app) => {
  initUsersRoutes(app, sanitizeMiddleware);
  initVideosRoutes(app,sanitizeMiddleware);

};

export default initRoutes;
