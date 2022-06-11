import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
      ref: "User",
      required: false,
    },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, default: 1 },
        // price: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

const CartItem = mongoose.model("Cart", cartSchema);
export default CartItem;
