import React, { useState } from 'react'

function Crasual({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // अगर data नहीं है तो कुछ न दिखाएं
  if (!data || data.length === 0) {
    return null
  }

  const currentMovie = data[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full mb-6 rounded-lg overflow-hidden shadow-2xl">

      <div className="relative w-full h-160 bg-zinc-800 group">       
        {/* Full Width Background Image */}
        <img
          src={currentMovie.Poster}
          alt={currentMovie.Title}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/1200x320?text=No+Poster"
          }}
          className="w-full object-center h-full object-cover"
        />

        {/* Dark Overlay Gradient at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-[#6556CD] hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#6556CD] hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Movie Information at Bottom Left */}
        <div className="absolute bottom-0 left-0 p-6 text-white z-10 w-full">
          <div className="inline-block bg-[#6556CD] text-white px-3 py-1 rounded-full text-sm mb-3 font-semibold">
            #{currentIndex + 1} / {data.length}
          </div>
          
          <h2 className="text-4xl font-bold mb-3 text-yellow-100">
            {currentMovie.Title}
          </h2>

          <div className="flex items-center gap-6 mb-3">
            {/* Year */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-300">📅</span>
              <span className="text-zinc-200">{currentMovie.Year}</span>
            </div>

            {/* Type */}
            <div className="bg-purple-600 px-3 py-1 rounded text-sm">
              {currentMovie.Type || "Movie"}
            </div>

            {/* Rating */}
            {currentMovie.imdbRating && currentMovie.imdbRating !== "N/A" && (
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="font-bold text-lg">{currentMovie.imdbRating}/10</span>
              </div>
            )}
          </div>

          {/* Description */}
          {currentMovie.Description && (
            <p className="text-zinc-200 text-sm line-clamp-2 mb-3 max-w-2xl">
              {currentMovie.Description}
            </p>
          )}

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {data.slice(0, Math.min(5, data.length)).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-[#6556CD] w-8"
                    : "bg-zinc-500 w-2 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crasual
