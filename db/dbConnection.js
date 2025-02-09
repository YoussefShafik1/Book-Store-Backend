import mongoose from "mongoose";

export const dbConnection = mongoose
  .connect("mongodb://localhost:27017/NTI_MEAN")
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("Database error");
  });
