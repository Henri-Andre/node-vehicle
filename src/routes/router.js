import initUsersRoutes from "./users.routes.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.middleware.js";
import initVideosRoutes from "./videos.routes.js";
import initVehiclesRoutes from "./vehicles.routes.js";
import initCommentsRoutes from "./comments.routes.js";


const initRoutes = (app) => {
  initUsersRoutes(app, sanitizeMiddleware);
  initVideosRoutes(app,sanitizeMiddleware);
  initVehiclesRoutes(app, sanitizeMiddleware);
  initCommentsRoutes(app, sanitizeMiddleware);

};

export default initRoutes;
