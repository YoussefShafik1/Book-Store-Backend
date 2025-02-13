import express from "express";
import { getUserOrders, createOrder } from "../Controllers/order.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUserOrders);
router.post("/", authMiddleware, createOrder);

export default router;
