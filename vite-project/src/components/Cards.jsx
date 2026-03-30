import React from "react";
import Loading from "../partials/Loading";

function Cards({ data }) {
  if (!data || data.length === 0) {
    return <Loading />;
  }

  return (
    <div className="w-full p-6 max-w-full">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full">
        {data.map((item, index) => (
          <div
            key={item.imdbID || index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-72 bg-zinc-700 overflow-hidden">
              <img
                src={item.Poster}
                alt={item.Title}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/208x320?text=No+Poster";
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Dark Overlay Gradient at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Information at Bottom - Always Visible */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              {/* Badge - Index */}
              <div className="inline-block bg-[#6556CD] text-white px-2 py-1 rounded text-xs font-bold mb-2">
                #{index + 1}
              </div>

              {/* Title */}
              <h3 className="font-bold text-white text-sm truncate mb-1 group-hover:text-[#6556CD] transition-colors">
                {item.Title}
              </h3>

              {/* Year + Type */}
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-zinc-300">📅 {item.Year}</span>
                <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs">
                  {item.Type || "Movie"}
                </span>
              </div>

              {/* Rating */}
              {item.imdbRating && item.imdbRating !== "N/A" && (
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-300 font-bold">
                    {item.imdbRating}
                  </span>
                  <span className="text-zinc-400">/10</span>
                </div>
              )}
            </div>

            {/* Hover Effects - Description */}
            {item.Description && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <p className="text-xs line-clamp-3">{item.Description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
