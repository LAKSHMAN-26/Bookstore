import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import axios from "axios";

function Home() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchBooks();
    }, [search]);

    const fetchBooks = async () => {
        try{
   const res = await axios.get(
        `http://localhost:5000/api/books?search=${search}`
    );

    setBooks(res.data);

        } catch(error){
            console.error(error)
        }

 
};

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Book Store</h2>
             <SearchBar
            search={search}
            setSearch={setSearch}
        />

            <div className="row">
                {books.map((book) => (
                    <div className="col-sm-6 col-md-4 mb-4" key={book._id}>
                        <BookCard book={book} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;