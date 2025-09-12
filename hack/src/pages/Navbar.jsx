import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyLogo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-200">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          </li>

          {/* Login / Signup */}
          <li>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-200 font-medium"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="ml-2 border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-blue-600 font-medium"
            >
              Signup
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-blue-700 space-y-4 p-4 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-200">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          </li>
          <li>
            <Link
              to="/login"
              className="block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="block border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 font-medium"
            >
              Signup
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
