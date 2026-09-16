import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-red-500">
          🎬 MovieExplorer
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-red-400 transition">Home</Link>
          <Link to="/movies" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition">
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;