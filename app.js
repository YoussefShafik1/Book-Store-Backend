import express from "express";
import { dbConnection } from "./db/dbConnection.js";
import bookRoutes from "./routes/book.routes.js";

const app = express();

app.use(express.json());
app.use(bookRoutes);

app.listen(3000, () => {
  console.log("Running on port 3000");
});
