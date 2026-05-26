function Hero() {
  return (
    <section className="bg-gray-900 text-white h-[90vh] flex items-center justify-center">

      <div className="text-center px-5">

        <h1 className="text-6xl font-bold mb-6">
          Discover Amazing Movies
        </h1>

        <p className="text-gray-400 text-xl mb-8">
          Reviews, ratings and trending films in one place.
        </p>

   <a href="#movies">
        <button className="bg-red-600 px-8 py-4 rounded-xl text-lg hover:bg-red-700 transition-all">
        Explore Now
        </button>
  </a>

      </div>

    </section>
  )
}

export default Hero