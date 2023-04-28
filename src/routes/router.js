import { sanitizeMiddleware } from "../middlewares/sanitize.middleware.js";
import initCommentsRoutes from "./comments.routes.js";
import initVehiclesTypesRoutes from "./typeVehicle.router.js";
import initUsersRoutes from "./users.routes.js";
import initVehiclesRoutes from "./vehicles.routes.js";


const initRoutes = (app) => {
  initUsersRoutes(app, sanitizeMiddleware);
  initVehiclesRoutes(app, sanitizeMiddleware);
  initCommentsRoutes(app, sanitizeMiddleware);
  initVehiclesTypesRoutes(app, sanitizeMiddleware);

};

export default initRoutes;
