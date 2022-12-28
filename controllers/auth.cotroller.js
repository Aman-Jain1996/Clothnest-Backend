const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginHandler = async (req, res) => {
  try {
    const data = req.body;
    let foundUser;
    foundUser = await User.findOne({ email: data.email });

    if (!foundUser) {
      return res
        .status(404)
        .json({ message: "No user registered with this email" });
    }

    let isPasswordValid = false;
    isPasswordValid = await bcrypt.compare(data.password, foundUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const jwtToken = jwt.sign(
      { userId: foundUser._id },
      process.env.APP_SECRET_KEY,
      { expiresIn: "24h" }
    );

    const userDataToSend = { ...foundUser._doc };
    delete userDataToSend.password;

    return res.status(200).json({
      message: "Login successful",
      user: { ...userDataToSend, token: jwtToken },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Login failed" });
  }
};

const signUpHandler = async (req, res) => {
  try {
    const data = req.body;
    let userFound = await User.findOne({ email: data.email });
    if (userFound) {
      return res
        .status(409)
        .json({ message: "User already exists with this email" });
    }
    let encyyptedPassword = await bcrypt.hash(data.password, 15);

    const newUser = new User({
      ...data,
      password: encyyptedPassword,
      cart: [],
      wishlist: [],
      orders: [],
      address: [],
    });

    await newUser.save();

    const jwtToken = jwt.sign(
      { userId: newUser._id },
      process.env.APP_SECRET_KEY,
      { expiresIn: "24h" }
    );

    const userDataToSend = { ...newUser._doc };
    delete userDataToSend.password;

    return res.status(201).json({
      message: "Signup successful",
      user: { ...userDataToSend, token: jwtToken },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Signup failed" });
  }
};

const resetHandler = async (req, res) => {
  try {
    const data = req.body;
    let foundUser = await User.findOne({ email: data.email });

    if (!foundUser) {
      return res
        .status(404)
        .json({ message: "No user registered with this email" });
    }

    if (foundUser.isAdmin) {
      return res
        .status(400)
        .json({ message: "Guest user password can't be changed" });
    }

    let encryptedPassword = await bcrypt.hash(data.password, 15);

    await User.findByIdAndUpdate(
      foundUser._id,
      {
        $set: {
          password: encryptedPassword,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, message: "Password reset failed" });
  }
};

module.exports = { loginHandler, signUpHandler, resetHandler };
