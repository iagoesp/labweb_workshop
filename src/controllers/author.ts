import { Request, Response } from "express";
import { authors } from "../server";
import { Author } from "../types/author";

export function createAuthor(req: Request, res: Response) {
  const { author }: { author: Author } = req.body;

  // validation
  if (!author || authors.find((current) => current.name === author.name)) {
    return res.status(400).send({
      error: "Não foi possível adicionar o autor.",
    });
  }

  authors.push(author);

  return res.status(200).send({ response: "O autor foi adicionado." });
}

export function getAuthors(req: Request, res: Response) {
  return res.status(200).send(authors);
}

// crie uma funcao que deleta um autor da nossa base de dados
