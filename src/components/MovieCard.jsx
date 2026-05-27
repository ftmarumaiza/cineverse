function MovieCard({ title, image, rating }) {
  return (
    <div className="group bg-gray-950/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-900 hover:border-red-600/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between w-full max-w-[280px] sm:max-w-none">
      
      <div className="relative overflow-hidden aspect-[2/3] w-full bg-gray-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="bg-red-600 p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg shadow-red-600/50">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-white text-base sm:text-lg font-bold mb-2 line-clamp-1 group-hover:text-red-500 transition-colors duration-200" title={title}>
          {title}
        </h3>

        <div className="flex items-center gap-1 text-yellow-400 font-bold text-sm sm:text-base">
          <span>⭐</span>
          <span>{rating}</span>
        </div>
      </div>

    </div>
  )
}

export default MovieCard