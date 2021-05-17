import { Router } from "express";
import authorRoutes from "./routes/authors";
import bookRoutes from "./routes/books";

const routes = Router();

routes.use(authorRoutes);
routes.use(bookRoutes);

export default routes;
