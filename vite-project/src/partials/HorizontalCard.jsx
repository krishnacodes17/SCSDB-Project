import React from "react";
import { useNavigate } from "react-router-dom";
import Crasual from "./Crasual";

function HorizontalCard({ data }) {
  const navigate = useNavigate();

//   // जब user movie पर click करे
//   const handleMovieClick = (movie) => {
//     console.log("🎯 Clicked on:", movie.Title);
//     navigate(`/movie/${movie.imdbID}`);
//   };

  // Empty state
  if (!data || data.length === 0) {
    return (
      <div className="h-[50vh] w-full p-5 bg-zinc-50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-3xl mb-3">🍿</p>
          <p className="text-zinc-600 font-semibold">No trending movies found</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full p-5 overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-lg">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <span className="text-yellow-100">🔥</span>
          Trending Now
        </h1>
        <p className="text-zinc-400 mt-2">{data.length} movies trending</p>
      </div>

      {/* Carousel Component */}
      <Crasual data={data} />



      {/* Movies Container - Horizontal Scroll */}
      <div className="w-full h-[calc(100%-100px)] overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex gap-5 pb-4">
          {data.map((movie, index) => (
            <div
              key={movie.imdbID || index}
            //   onClick={() => handleMovieClick(movie)}
              className="flex-shrink-0 w-52 bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              {/* Movie Poster */}
              <div className="relative overflow-hidden h-72 bg-zinc-700">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/208x288?text=No+Poster";
                  }}
                />
                {/* Overlay on hover */}
                {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-[#6556CD] text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </button>
                </div> */}
                {/* #1, #2 etc badge */}
                <div className="absolute top-3 right-3 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                  #{index + 1}
                </div>
              </div>

              {/* Movie Info */}
              <div className="p-4 bg-zinc-800">
                {/* Title */}
                <h3 className="font-bold text-white text-lg truncate mb-2 group-hover:text-[#6556CD] transition-colors">
                  {movie.Title}
                </h3>

                {/* Year + Type */}
                <div className="flex justify-between items-center mb-3 text-xs">
                  <span className="text-zinc-400">📅 {movie.Year}</span>
                  <span className="bg-[#6556CD] text-white px-2 py-1 rounded text-xs">
                    {movie.Type || "Movie"}
                  </span>
                </div>

                {/* Rating  */}
                {movie.imdbRating && movie.imdbRating !== "N/A" && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-white font-bold">{movie.imdbRating}</span>
                    <span className="text-zinc-500 text-xs">/10</span>
                  </div>
                )}

                {/* Description (अगर है) */}
                {movie.Description && (
                  <p className="text-zinc-400 text-xs line-clamp-2 mb-3">
                    {movie.Description}
                  </p>
                )}

                {/* Click to view */}
                <div className="text-center text-[#6556CD] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to see details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default HorizontalCard;
