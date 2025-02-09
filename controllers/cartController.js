import Cart from "../models/cartModel.js";

export const getCart = async (req, res) => {
  const userId = req.userId; // You would use JWT to extract this from the token

  try {
    const cart = await Cart.findOne({ user: userId }).populate(
      "items.productId"
    );
    res.status(200).json(cart);
  } catch (err) {
    console.error("Error in Cart API:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const addToCart = async (req, res) => {
  const userId = req.userId; // You would use JWT to extract this from the token
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();

    res.status(200).json({ message: "Item added to cart", cart });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
