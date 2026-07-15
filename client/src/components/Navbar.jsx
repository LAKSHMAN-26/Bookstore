import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
        >
          <i className="bi bi-book-half me-2"></i>
          BookStore
        </Link>

        <div className="d-flex align-items-center">

          <Link
            to="/"
            className="btn btn-outline-light me-2 rounded-pill"
          >
            <i className="bi bi-house-door me-1"></i>
            Home
          </Link>

          <Link
            to="/cart"
            className="btn btn-warning me-2 rounded-pill"
          >
            <i className="bi bi-cart3 me-1"></i>
            Cart ({cartItems.length})
          </Link>

          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="btn btn-info me-2 rounded-pill"
            >
              <i className="bi bi-speedometer2 me-1"></i>
              Dashboard
            </Link>
          )}

          {!user ? (
            <>
              <Link
                to="/login"
                className="btn btn-success me-2 rounded-pill"
              >
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-primary rounded-pill"
              >
                <i className="bi bi-person-plus me-1"></i>
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-white fw-semibold me-3">
                <i className="bi bi-person-circle me-1"></i>
                {user.name}
              </span>

              <button
                onClick={logout}
                className="btn btn-danger rounded-pill"
              >
                <i className="bi bi-box-arrow-right me-1"></i>
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;