import express from "express";
import { getCart, addToCart } from "../controllers/cartController.js";
import authenticate from "../middleware/authenticate.js"; // To protect routes with JWT

const router = express.Router();

router.get("/cart", authenticate, getCart);
router.post("/cart", authenticate, addToCart);

export default router;
