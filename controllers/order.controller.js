const { User } = require("../models");

const getAllOrdersHandler = async (req, res) => {
  try {
    const id = req.userId;
    const user = await User.findById(id);
    const { orders } = user;
    return res.json({ orders });
  } catch (err) {
    return res.status(500).json({ message: "Couldn't get orders" });
  }
};

const postOrderHandler = async (req, res) => {
  try {
    const id = req.userId;
    const { order } = req.body;
    const user = await User.findById();

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { orders: [...user.address, order] } },
      { new: true }
    );
    return res.status(201).json({ orders: updatedUser.orders });
  } catch (err) {
    return res.status(500).json({ message: "Couldn't post order" });
  }
};

module.exports = {
  getAllOrdersHandler,
  postOrderHandler,
};
