import express from "express";
import initMiddlewares from "./middlewares/init.js";
import initRoutes from "./routes/router.js";
import initDb from "./config/database.config.js";


const app = express();
const port =  process.env.PORT || 2007;

app.get("/", (req, res) => {
  res.send("ok");
});




  app.get("/", (req, res) => {
    res.send("ok");
  });
  
  await initDb();
  initMiddlewares(app);
  initRoutes(app);
  
  app.listen(port, () => {
    console.log(`serveur en cours d'éxécution dans le port ${port}`);
  });


/* TODO: 
  - validations
  - population 

  - fs
  - simple react
*/
