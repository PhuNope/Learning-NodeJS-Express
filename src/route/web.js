import express from "express";
import HomeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", HomeController.getHomepage);

  return app.use("/", router);
};

// module.exports = initWebRoute;
export default initWebRoute;
