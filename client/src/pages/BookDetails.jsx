import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";


function BookDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();

    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/api/books/${id}`
            );

            setBook(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    if (!book)
        return (
            <div className="container mt-5">
                Loading...
            </div>
        );

    return (
        <div className="container mt-5">

            <div className="row">

                <div className="col-md-5">

                    <img
                        src={book.image || "https://via.placeholder.com/400x500"}
                        className="img-fluid rounded"
                        alt={book.title}
                    />

                </div>

                <div className="col-md-7">

                    <h2>{book.title}</h2>

                    <h5>{book.author}</h5>

                    <p><strong>Genre:</strong> {book.genre}</p>

                    <p><strong>Price:</strong> ₹{book.price}</p>

                    <p><strong>Stock:</strong> {book.stock}</p>

                    <p>{book.description}</p>

                    <button
                        className="btn btn-success"
                        onClick={() => addToCart(book)}
                    >

                        Add to Cart

                    </button>

                </div>

            </div>

        </div>
    );
}

export default BookDetails;