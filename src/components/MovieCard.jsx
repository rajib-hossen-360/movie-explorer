import React from 'react';

const MovieCard = ({ show, onSelectShow }) => {
  const { name, image, rating, premiered } = show;

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-red-500/50 transition duration-300 flex flex-col justify-between">
      <img
        src={image?.medium || 'https://via.placeholder.com/300x400?text=No+Image'}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 text-white truncate">{name}</h3>
          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <span>⭐ {rating?.average || 'N/A'}</span>
            <span>📅 {premiered ? premiered.split('-')[0] : 'N/A'}</span>
          </div>
        </div>
        <button
          onClick={() => onSelectShow(show)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;