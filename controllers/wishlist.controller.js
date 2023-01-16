const { User } = require("../models");

const getWishlistItemsHandler = async (req, res) => {
  try {
    const id = req.userId;
    const foundUser = await User.findById(id);
    const { wishlist } = foundUser;
    return res.json({ wishlist });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't get wishlist items" });
  }
};

const addItemToWishlistHandler = async (req, res) => {
  try {
    const id = req.userId;
    const foundUser = await User.findById(id);
    const { product } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: { wishlist: [...foundUser.wishlist, product] },
      },
      { new: true }
    );
    return res.status(201).json({ wishlist: updatedUser.wishlist });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't add item to wishlist" });
  }
};

const removeItemFromWishlistHandler = async (req, res) => {
  try {
    const id = req.userId;
    const productId = req.params.id;
    const foundUser = await User.findById(id);

    if (!foundUser.wishlist.find((item) => item._id.toString() === productId)) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedWishlist = foundUser.wishlist.filter(
      (item) => item._id.toString() !== productId
    );

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { wishlist: updatedWishlist } },
      { new: true }
    );
    return res.status(200).json({ wishlist: updatedUser.wishlist });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: "Couldn't remove item from wishlist",
    });
  }
};

module.exports = {
  getWishlistItemsHandler,
  addItemToWishlistHandler,
  removeItemFromWishlistHandler,
};
