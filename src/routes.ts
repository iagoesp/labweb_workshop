import { Router } from "express";
import authorRoutes from "./routes/authors";

const routes = Router();

routes.use(authorRoutes);

export default routes;
