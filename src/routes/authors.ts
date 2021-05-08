import { Router } from "express";
import { createAuthor, getAuthors } from "../controllers/author";

const routes = Router();

routes.post("/author", createAuthor);
routes.get("/authors", getAuthors);

export default routes;
