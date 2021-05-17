import { Request, Response } from "express";
import { hasAuthor } from "../helpers/validator";
import { books } from "../server";
import { Book } from "../types/book";

export function createBook(req: Request, res: Response) {
  const { book }: { book: Book } = req.body;

  // validation
  if (!book || books.find((current) => current.title === book.title && current.description === current.description) || !hasAuthor(book.author)) {
    return res.status(400).send({
      error: "Não foi possível adicionar o livro.",
    });
  }

  books.push(book);

  return res.status(200).send({ response: "O livro foi adicionado." });
}

export function getBooks(req: Request, res: Response) {
  return res.status(200).send(books);
}

// crie uma funcao que deleta um livro da nossa base de dados
