import express from "express";
import { registerUser, loginUser,getUserProfile, updateUserProfile, getUserOrders } from "../controllers/userController.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authenticate, getUserProfile);
router.put("/profile", authenticate, updateUserProfile);
router.get("/orders", authenticate, getUserOrders);

export default router;