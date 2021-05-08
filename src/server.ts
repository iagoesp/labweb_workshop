import app from "./app";
import { Author } from "./types/author";
import { Book } from "./types/book";

export const books: Array<Book> = [];
export const authors: Array<Author> = [];

app.listen(3000, () => {
  console.log(`Server listening at: http://localhost:3000`);
});
