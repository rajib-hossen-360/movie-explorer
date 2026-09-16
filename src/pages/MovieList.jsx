import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

const MovieList = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initial fetch for all shows
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        setShows(data.slice(0, 20)); // First 20 shows
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Search API fetch
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setShows(data.map((item) => item.show));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8 max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 Search for a movie or show..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-5 rounded-full bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-red-500 shadow-inner"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* Shows Grid */}
      {loading ? (
        <div className="text-center text-xl text-gray-400 py-12">Loading shows...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <MovieCard key={show.id} show={show} onSelectShow={setSelectedShow} />
          ))}
        </div>
      )}

      {/* Details Modal */}
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
};

export default MovieList;