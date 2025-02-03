import express from "express";
import { dbConnection } from "./db/dbConnection.js";
const app = express();

dbConnection;
const port = 3000;

app.use(express.json());

app.use("*", (req, res, next) => {
  next(new AppError("url not found", 404));
});

app.use((err, req, res, next) => {
  console.log("from error", err.stack);
  res.status(err.statusCode).json({ msg: "error", err: err.message });
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});
app.listen(port, () => console.log(`app listening port ${port}!`));
