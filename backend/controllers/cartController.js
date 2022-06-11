import Cart from "../models/cartModel.js";

const getCartItems = async (req, res) => {
  console.log(" :", req.body);
  const CartItems = await Cart.find({});

  res.json(CartItems);
};
export { getCartItems };
