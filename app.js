import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";
import cartRoute from "./routes/cartRoute.js";
import { dbConnection } from "./db/dbConnection.js";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoute);
app.use("/api", cartRoute);

// MongoDB connection
dbConnection;
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
