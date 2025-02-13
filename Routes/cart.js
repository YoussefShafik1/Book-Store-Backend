import express from "express";
import { getCart, addToCart, removeFromCart } from "../Controllers/cart.js"; // Import the function
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getCart);
router.post("/add", authMiddleware, addToCart);
router.delete("/remove", authMiddleware, removeFromCart); // Add the remove route

export default router;
