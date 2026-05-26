function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-4 md:px-8 py-5 sticky top-0 z-50">

      <h1 className="text-2xl md:text-3xl font-bold text-red-500">
        CineVerse
      </h1>

      <ul className="flex gap-4 md:gap-8 text-sm md:text-lg">

        <li>
          <a
            href="#"
            className="hover:text-red-500 transition-all"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#movies"
            className="hover:text-red-500 transition-all"
          >
            Movies
          </a>
        </li>

        <li>
          <a
            href="#reviews"
            className="hover:text-red-500 transition-all"
          >
            Reviews
          </a>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar