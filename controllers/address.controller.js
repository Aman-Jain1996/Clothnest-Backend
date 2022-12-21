const { User } = require("../models");

const getAddressHandler = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    const { address } = user;
    return res.status(200).json({ address });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't get address" });
  }
};

const postAddressHandler = async (req, res) => {
  try {
    const userId = req.userId;
    const foundUser = await User.findById(userId);
    const { address } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: { address: [...foundUser.address, address] },
      },
      { new: true }
    );
    return res.status(201).json({ address: updatedUser.address });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't add address" });
  }
};

const deleteAddressHandler = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const foundUser = await User.findById(userId);
    const foundAddress = foundUser.address.find(
      (address) => address.id === id
    );

    if (!foundAddress) {
      return res.status(404).json({ message: "Address not found" });
    }

    const updatedUserAddresses = foundUser.address.filter(
      (address) => address.id !== id
    );

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          address: updatedUserAddresses,
        },
      },
      { new: true }
    );
    res.status(200).json({ address: updatedUser.address });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't delete address" });
  }
};

const updateAddressHandler = async (req, res) => {
  try {
    const userId = req.userId;
    const { address } = req.body;
    const { id } = req.params;

    const foundUser = await User.findById(userId);
    const foundAddress = foundUser.address.find(
      (address) => address.id === id
    );

    if (!foundAddress) {
      return res.status(404).json({ message: "Address not found" });
    }

    const updatedUserAddresses = foundUser.address.map((userAddress) =>
      userAddress.id === id ? address : userAddress
    );

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { address: updatedUserAddresses } },
      { new: true }
    );
    res.status(200).json({ address: updatedUser.address });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Couldn't update address" });
  }
};

module.exports = {
  getAddressHandler,
  postAddressHandler,
  deleteAddressHandler,
  updateAddressHandler,
};
