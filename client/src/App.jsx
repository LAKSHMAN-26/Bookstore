import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageBooks from "./pages/ManageBooks";
import EditBook from "./pages/EditBook";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/books"
          element={
            <ProtectedRoute adminOnly={true}>
              <ManageBooks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-book/:id"
          element={
            <ProtectedRoute adminOnly={true}>
              <EditBook />
            </ProtectedRoute>
          }
        />
        <Route
  path="/admin/add-book"
  element={
    <ProtectedRoute adminOnly={true}>
      <AddBook />
    </ProtectedRoute>
  }
/>
      </Routes>
    </>
  );
}

export default App;