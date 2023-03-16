import express from "express";
import initRoutes from "./routes/router.js";
import { log } from "./utils/logger.utils.js";
import connexion from "./config/database.config.js";
import initMiddlewares from "./middlewares/init.js";
import User from "./models/model_user.js";
import Roles from "./models/model_role.js";
import Vehicles from "./models/model_vehicles.js";
import Fuels from "./models/model_fuels.js";
import Types from "./models/model_types.js";
import Videos from "./models/model_videos.js";
import Comments from "./models/model_comments.js";



const app = express();
const port =  process.env.PORT || 2007;

app.get("/", (req, res) => {
  res.send("ok");
});



try{
  console.log(`connection bdd`)
  initMiddlewares(app)
  await initRoutes(app)
  await connexion.sync()
}catch(e){
  console.error(e.message)
}

app.listen(port, ()=>{
console.log(`serveur en cours d'éxécution dans le port ${port}`)

})





/* TODO: 
  - validations
  - population 

  - fs
  - simple react
*/
