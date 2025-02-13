import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Remove "Bearer " from the token if it exists
    const extractedToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;

    // Decode the token
    const decoded = jwt.verify(extractedToken, process.env.JWT_SECRET);

    console.log("Decoded Token:", decoded); // Log the token content

    // Ensure the user ID exists in the token
    req.userId = decoded.user.id; 
    // Make sure to check the correct key containing the ID in the token

    console.log("Extracted User ID:", req.userId); // Log the value before proceeding

    if (!req.userId) {
      return res.status(400).json({ message: "Invalid token structure." });
    }

    next(); // Proceed to the next controller
  } catch (err) {
    res.status(400).json({ message: "Invalid token.", error: err.message });
  }
};

export default authMiddleware;
