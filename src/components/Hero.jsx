function Hero() {
  return (
    <section className="relative bg-black text-white min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24 px-4">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-red-600/15 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-rose-600/10 blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight">
          Discover Amazing <br className="hidden sm:inline" /> Movies
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed px-2">
          Reviews, ratings, and trending films all in one sleek destination. Find your next watch instantly.
        </p>

        <a href="#movies" className="inline-block group active:scale-95 transition-transform duration-100">
          <button className="relative bg-red-600 text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.35)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] group-hover:scale-105 cursor-pointer">
            Explore Now
          </button>
        </a>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero