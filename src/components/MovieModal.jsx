import React from 'react';

const MovieModal = ({ show, onClose }) => {
  if (!show) return null;

  const { name, image, rating, premiered, summary, genres } = show;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 p-6 relative text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          ✕
        </button>

        <img
          src={image?.original || image?.medium || 'https://via.placeholder.com/600x300?text=No+Image'}
          alt={name}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />

        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
          <span>⭐ Rating: {rating?.average || 'N/A'}</span>
          <span>📅 Release: {premiered || 'N/A'}</span>
          {genres && <span>🎭 Genre: {genres.join(', ')}</span>}
        </div>

        <div className="text-gray-300 text-sm leading-relaxed mb-6">
          <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
          <div dangerouslySetInnerHTML={{ __html: summary || 'No summary available.' }} />
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 rounded-lg transition"
        >
          ❌ Close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;