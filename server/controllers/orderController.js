const Order = require("../models/Orders");

const createOrder = async (req, res) => {
  try {
    const { user, books, totalPrice } = req.body;

    const order = await Order.create({
      user,
      books,
      totalPrice,
    });

    res.status(201).json({
      message: "Order Placed Successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
};