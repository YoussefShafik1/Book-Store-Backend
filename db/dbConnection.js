import mongoose from "mongoose";

export const dbConnection = mongoose.connect("mongodb://localhost:27017/Book");

mongoose.connection
  .once("open", () => {
    console.log("Connected to MongoDB");
  })
  .on("error", (error) => {
    console.log("Connection error:", error);
  });