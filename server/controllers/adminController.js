const Book = require("../models/Book");
const User = require("../models/User");

const dashboard = async (req, res) => {
  try {

    const totalBooks = await Book.countDocuments();

    const totalUsers = await User.countDocuments();

    res.json({
      totalBooks,
      totalUsers,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { dashboard };