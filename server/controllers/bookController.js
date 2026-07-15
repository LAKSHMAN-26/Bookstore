const Book = require("../models/Book");

const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      message: "Book Added Successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 // get books 
const getBooks = async (req, res) => {
    try {
 
        const keyword = req.query.search || "";

        const books = await Book.find({
            title: {
                $regex: keyword,
                $options: "i"
            }
        });

        res.json(books);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
 // GET BOOK 
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json(book);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// deleting Book

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json({
      message: "Book deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update the book
const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json({
      message: "Book updated successfully",
      book,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addBook,
  getBooks,
  getBookById,
  deleteBook,
  updateBook,
};