import mongoose from "mongoose";
import Book from "../Models/product.js"; // Import Product model

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
});

export default mongoose.model("Cart", cartSchema);
