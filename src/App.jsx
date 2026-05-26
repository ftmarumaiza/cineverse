import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MovieSection from "./components/MovieSection"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black min-h-screen">

      <Navbar />

      <Hero />

      <MovieSection />

      <Reviews />

      <Footer />

    </div>
  )
}

export default App