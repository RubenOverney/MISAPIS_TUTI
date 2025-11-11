import { Router } from "express";
import tutiRoutes from "./tuti.routes.js";

const indexRoutes = Router();

indexRoutes.use("/tuti", tutiRoutes);

export default indexRoutes;
