function Footer() {
  return (
    <footer className="bg-black border-t border-gray-950 text-center text-gray-500 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-red-500 text-xl font-extrabold tracking-wider hover:scale-105 transition-transform duration-300">
          CineVerse
        </h2>
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} CineVerse. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer