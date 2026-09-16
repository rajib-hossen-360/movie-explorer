import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-[70vh] flex items-center justify-center text-center px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
          DISCOVER MOVIES
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Explore and discover your favorite movies from around the world.
        </p>
        <Link
          to="/movies"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-red-500/50 transition duration-300 inline-block"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;