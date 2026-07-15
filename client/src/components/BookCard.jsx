import { Link } from "react-router-dom";

function BookCard({ book }) {
	return (
		<div className="card h-100 book-card">
			<div className="position-relative">
				<img
					src={book.image || "https://via.placeholder.com/250x300"}
					className="card-img-top"
					alt={book.title}
				/>
				<span className="badge bg-success position-absolute top-0 end-0 m-2">
					₹{book.price}
				</span>
			</div>

			<div className="card-body d-flex flex-column">
				<h5 className="card-title book-title">{book.title}</h5>
				<p className="card-text text-muted mb-3 small">{book.author}</p>

				<div className="mt-auto d-flex gap-2">
					<Link to={`/book/${book._id}`} className="btn btn-sm btn-primary w-100">
						View
					</Link>
					
				</div>
			</div>
		</div>
	);
}

export default BookCard;
