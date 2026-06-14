import express from "express";
import breedsRoutes from "./breedsRoute.js";

const routes = express.Router();

routes.use(breedsRoutes);

export default routes;