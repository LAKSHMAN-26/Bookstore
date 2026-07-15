import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const res = await API.get(`/books/${id}`);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/books/${id}`, book);

      alert("Book Updated Successfully");

      navigate("/admin/books");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2>Edit Book</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Title"
          />

          <input
            className="form-control mb-3"
            name="author"
            value={book.author}
            onChange={handleChange}
            placeholder="Author"
          />

          <input
            className="form-control mb-3"
            name="price"
            value={book.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <input
            className="form-control mb-3"
            name="stock"
            value={book.stock}
            onChange={handleChange}
            placeholder="Stock"
          />

          <input
            className="form-control mb-3"
            name="image"
            value={book.image}
            onChange={handleChange}
            placeholder="Image URL"
          />

          <textarea
            className="form-control mb-3"
            name="description"
            value={book.description}
            onChange={handleChange}
            placeholder="Description"
          />

          <button className="btn btn-success">
            Update Book
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditBook;