import { createAuthor, getAuthors } from "../controllers/author";
import { authors } from "../server";
import { Author } from "../types/author";

export function hasAuthor(author: Author){
    if(authors.find((current) => current.name === author.name)){
        return true;
    }
    return false;
}