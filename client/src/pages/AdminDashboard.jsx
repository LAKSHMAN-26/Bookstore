import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="container mt-5">

      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row">

        <div className="col-md-4 mb-3">
          <Link
            to="/admin/add-book"
            className="btn btn-success w-100 p-4"
          >
            Add Book
          </Link>
        </div>

        <div className="col-md-4 mb-3">
          <Link
            to="/admin/books"
            className="btn btn-primary w-100 p-4"
          >
            Manage Books
          </Link>
        </div>

        <div className="col-md-4 mb-3">
          <Link
            to="/admin/orders"
            className="btn btn-warning w-100 p-4"
          >
            Manage Orders
          </Link>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;