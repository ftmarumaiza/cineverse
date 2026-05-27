import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Movies", href: "#movies" },
    { label: "Reviews", href: "#reviews" },
  ]

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-gray-900 text-white flex justify-between items-center px-6 md:px-12 py-4 sticky top-0 z-50 transition-all">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
        <a href="#">CineVerse</a>
      </h1>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-8 text-base font-semibold">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-red-500 transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-red-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none p-2 hover:bg-gray-900/60 rounded-lg transition-colors duration-200"
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Drawer */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-gray-900 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center py-6 gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.label} className="w-full text-center">
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-red-500 transition-colors duration-200 block py-2 w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar