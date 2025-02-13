import Cart from "../Models/cart.js";

export const getCart = async (req, res) => {
  const userId = req.userId; // You would use JWT to extract this from the token

  try {
    const cart = await Cart.findOne({ user: userId }).populate({
      path: "items.productId",
      model: "Book", 
    });
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
export const removeFromCart = async (req, res) => {
  const userId = req.userId; // Extract userId from JWT
  const { productId } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Filter out the item to remove it from the cart
    cart.items = cart.items.filter((item) => item.productId.toString() !== productId);

    await cart.save();

    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
