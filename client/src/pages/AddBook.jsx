import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBook() {
    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "",
        price: "",
        image: "",
        description: "",
        stock: "",
    });

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/api/books", book);

            alert("Book Added Successfully");

            navigate("/admin/books");
        } catch (error) {
            console.log(error.response?.data);

            alert(error.response?.data?.message || "Failed to add book");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">

                <h2 className="mb-4">Add New Book</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        placeholder="Book Title"
                        name="title"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Author"
                        name="author"
                        onChange={handleChange}
                        required
                    />

                    <select
                        className="form-control mb-3"
                        name="genre"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Genre</option>
                        <option value="Programming">Programming</option>
                        <option value="Self Help">Self Help</option>
                        <option value="Business">Business</option>
                        <option value="Finance">Finance</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Biography">Biography</option>
                    </select>

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Price"
                        name="price"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Stock"
                        name="stock"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Image URL"
                        name="image"
                        onChange={handleChange}
                    />

                    <textarea
                        className="form-control mb-3"
                        placeholder="Description"
                        name="description"
                        rows="4"
                        onChange={handleChange}
                    ></textarea>

                    <button className="btn btn-success w-100">
                        Add Book
                    </button>

                </form>

            </div>
        </div>
    );
}

export default AddBook;