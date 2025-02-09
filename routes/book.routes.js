import { Router } from "express";
import express from "express";

import {
  getBooks,
  createBook,
  deleteBook,
} from "../controllers/bookController.js";

const bookRoutes = express.Router();

bookRoutes.get("/book", getBooks);
bookRoutes.post("/book", createBook);
bookRoutes.delete("/book/:id", deleteBook);
export default bookRoutes;
