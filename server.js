// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON bodies and handle CORS
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Import routes (note the .js extension)
import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
