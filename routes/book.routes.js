import { Router } from "express";
import express from "express";

import {
  getBooks,
  createBook,
  deleteBook,
  getBook_id,
} from "../controllers/bookController.js";

const bookRoutes = express.Router();

bookRoutes.get("/book", getBooks);
bookRoutes.get("/book/:id", getBook_id);
bookRoutes.post("/book", createBook);
bookRoutes.delete("/book/:id", deleteBook);
export default bookRoutes;
