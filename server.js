import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./Db/dbConnection.js";  // Import connectDB

// Import Routes
import userRoutes from "./Routes/user.js";
import productRoutes from "./Routes/product.js";
import cartRoutes from "./Routes/cart.js";
import orderRoutes from "./Routes/order.js";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();  // Call database connection

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Allow requests from any domain

// Route Handling
app.use("/api/auth", userRoutes);
app.use("/api", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
