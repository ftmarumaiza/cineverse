function MovieCard({ title, image, rating }) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-[300px] md:h-[400px] object-cover"
      />

      <div className="p-5">

        <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
          {title}
        </h2>

        <p className="text-yellow-400 text-lg">
          ⭐ {rating}
        </p>

      </div>

    </div>
  )
}

export default MovieCard