import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function ManageBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await API.get("/books");
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    const confirmDelete = window.confirm("Delete this book?");

    if (!confirmDelete) return;

    await API.delete(`/books/${id}`);

    fetchBooks();
  };

  return (
    <div className="container mt-5">
      <h2>Manage Books</h2>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>₹{book.price}</td>
              <td>{book.stock}</td>

              <td>
                <Link
                  to={`/admin/edit-book/${book._id}`}
                  className="btn btn-primary btn-sm"
                >
                  Edit
                </Link>
              </td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBook(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBooks;