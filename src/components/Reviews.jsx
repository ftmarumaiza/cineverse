function Reviews() {
  const reviews = [
    {
      name: "Alex",
      text: "An amazing platform for discovering movies.",
    },
    {
      name: "Sarah",
      text: "Clean UI and awesome movie suggestions.",
    },
    {
      name: "John",
      text: "Perfect place for movie lovers.",
    },
    {
      name: "Emma",
      text: "The movie collection is absolutely amazing.",
    },
    {
      name: "Daniel",
      text: "I discovered so many great films here.",
    },
    {
      name: "Chris",
      text: "Clean design and super easy to use.",
    },
  ]

  return (
    <section id="reviews" className="bg-gray-950 py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          What People Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-900 hover:border-red-600/30 hover:shadow-[0_0_20px_rgba(220,38,38,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative mb-6">
                <span className="absolute -top-4 -left-2 text-6xl text-red-600/20 font-serif pointer-events-none select-none">“</span>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed relative z-10 italic pl-4">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-6 h-[2px] bg-red-600"></div>
                <h4 className="text-red-500 font-extrabold text-sm sm:text-base tracking-wider uppercase">
                  {review.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews