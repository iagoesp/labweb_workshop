import { Router } from "express";
import { createBook, getBooks } from "../controllers/book";

const routes = Router();

routes.post("/book", createBook);
routes.get("/books", getBooks);

export default routes;
