import Order from "../Models/order.js";
import Cart from "../Models/cart.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("User ID in createOrder:", userId);

    const cart = await Cart.findOne({ user: userId }).populate({
      path: "items.productId",
      model: "Book",
    });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Your cart is empty" });
    }

    const totalAmount = cart.items.reduce((sum, item) => {
      return sum + item.productId.price * item.quantity;
    }, 0);

    console.log("Total Amount:", totalAmount);

    // Create a payment intent and send clientSecret to the frontend
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount * 100,
      currency: "usd",
      payment_method_types: ["card"],
    });

    console.log("Payment Intent Created:", paymentIntent.id);

    res.status(201).json({
      message: "Payment initiated successfully",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error in createOrder:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get user orders
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("Fetching orders for User ID:", userId);

    const orders = await Order.find({ user: userId }).populate({
      path: "products.productId",
      select: "name price description",
    });

    console.log("Orders Retrieved:", orders);

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error in getUserOrders:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

