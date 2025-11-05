import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-green-600">Minuto</Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/cart" className="hover:text-green-600 flex items-center gap-1">
            <ShoppingCartIcon className="w-5 h-5" /> Cart
          </Link>
          <Link to="/login" className="hover:text-green-600">Login</Link>
        </div>
      </div>
    </nav>
  );
}
