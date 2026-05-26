function Hero() {
  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center">

      <div className="text-center px-4">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Amazing Movies
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Reviews, ratings and trending films in one place.
        </p>

        <a href="#movies">
          <button className="bg-red-600 px-6 md:px-8 py-3 md:py-4 rounded-xl text-lg hover:bg-red-700 transition-all">
            Explore Now
          </button>
        </a>

      </div>

    </section>
  )
}

export default Hero