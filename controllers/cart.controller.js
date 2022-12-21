const { User } = require("../models");

const getCartItemsHandler = async (req, res) => {
  try {
    const id = req.userId;
    const foundUser = await User.findById(id);
    const { cart } = foundUser;
    return res.status(200).json({ cart });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't get cart items" });
  }
};

const addItemToCartHandler = async (req, res) => {
  try {
    const id = req.userId;
    const { product } = req.body;
    const foundUser = await User.findById(id);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: { cart: [...foundUser.cart, { ...product, quantity: 1 }] },
      },
      { new: true }
    );
    return res.status(201).json({ cart: updatedUser.cart });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't add item to cart" });
  }
};

const removeItemFromCartHandler = async (req, res) => {
  try {
    const id = req.userId;
    const productId = req.params.id;
    const foundUser = await User.findById(id);
    const foundCartItem = foundUser.cart.find(
      (cartItem) => cartItem.id === productId
    );

    if (!foundCartItem) {
      return res.status(404).json({ message: "Product not found" });
    }

    const filteredCart = foundUser.cart.filter(
      (cartItem) => cartItem.id !== productId
    );

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { cart: filteredCart } },
      { new: true }
    );

    return res.status(200).json({ cart: updatedUser.cart });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't remove item from cart" });
  }
};

const updateCartItemHandler = async (req, res) => {
  try {
    const id = req.userId;
    const productId = req.params.id;
    const { action } = req.body;

    const foundUser = await User.findById(id);
    const userCart = foundUser.cart;
    const foundCartItem = userCart.find(
      (cartItem) => cartItem.id === productId
    );

    if (!foundCartItem) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (action.type === "increment") {
      userCart.forEach((cartItem) => {
        if (cartItem.id === productId) {
          cartItem.quantity += 1;
        }
      });
    } else if (action.type === "decrement") {
      userCart.forEach((cartItem) => {
        if (cartItem.id === productId) {
          cartItem.quantity -= 1;
        }
      });
    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { cart: userCart } },
      { new: true }
    );
    res.status(200).json({ cart: updatedUser.cart });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't update item in cart" });
  }
};

const clearCartHandler = async (req, res) => {
  try {
    const id = req.userId;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { cart: [] } },
      { new: true }
    );
    return res.status(200).json({ cart: updatedUser.cart });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't clear cart" });
  }
};

module.exports = {
  getCartItemsHandler,
  addItemToCartHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
  clearCartHandler,
};
