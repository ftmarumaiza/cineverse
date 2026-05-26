function Reviews() {
  return (
    <section id="reviews" className="bg-gray-950 py-20 px-4 md:px-10">

      <h1 className="text-white text-4xl font-bold text-center mb-12">
        What People Say
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <p className="text-gray-300 mb-4">
            “An amazing platform for discovering movies.”
          </p>

          <h3 className="text-red-500 font-bold">
            Alex
          </h3>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <p className="text-gray-300 mb-4">
            “Clean UI and awesome movie suggestions.”
          </p>

          <h3 className="text-red-500 font-bold">
            Sarah
          </h3>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <p className="text-gray-300 mb-4">
            “Perfect place for movie lovers.”
          </p>

          <h3 className="text-red-500 font-bold">
            John
          </h3>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <p className="text-gray-300 mb-4">
            “The movie collection is absolutely amazing.”
          </p>

          <h3 className="text-red-500 font-bold">
            Emma
          </h3>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <p className="text-gray-300 mb-4">
            “I discovered so many great films here.”
          </p>

          <h3 className="text-red-500 font-bold">
            Daniel
          </h3>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <p className="text-gray-300 mb-4">
            “Clean design and super easy to use.”
          </p>

          <h3 className="text-red-500 font-bold">
            Chris
          </h3>
        </div>

      </div>

    </section>
  )
}

export default Reviews