import React from 'react'

function Loading() {
  return (
    <div className="h-[50vh] w-full p-5 overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-lg">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="h-12 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded w-64 mb-2 shimmer"></div>
        <div className="h-4 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded w-40 shimmer"></div>
      </div>

      {/* Movies Container */}
      <div className="w-full h-[calc(100%-100px)] overflow-hidden">
        <div className="flex gap-5 pb-4">
          {[1, 2, 3, 4, 5,7,8,9,10,11,12,13].map((item) => (
            <div key={item} className="flex-shrink-0 w-52 bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
              <div className="relative overflow-hidden h-72 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 shimmer"></div>
              <div className="p-4 bg-zinc-800 space-y-3">
                <div className="h-5 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded w-40 shimmer"></div>
                <div className="flex justify-between gap-2">
                  <div className="h-4 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded w-24 shimmer"></div>
                  <div className="h-4 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded w-16 shimmer"></div>
                </div>
                <div className="h-4 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded w-32 shimmer"></div>
                <div className="h-4 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded w-28 shimmer mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .shimmer {
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>

    </div>
  )
}

export default Loading