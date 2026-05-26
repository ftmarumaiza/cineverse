import MovieCard from "./MovieCard"

function MovieSection() {

  const movies = [
    {
      title: "Interstellar",
      rating: "9.5",
      image:
        "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },

    {
      title: "Inception",
      rating: "9.2",
      image:
        "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },

    {
      title: "The Batman",
      rating: "8.9",
      image:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },

    {
  title: "Joker",
  rating: "8.8",
  image:
    "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
},

{
  title: "Avengers Endgame",
  rating: "9.0",
  image:
    "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
},

{
  title: "Spider-Man No Way Home",
  rating: "8.7",
  image:
    "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
},

{
  title: "Doctor Strange",
  rating: "8.5",
  image:
    "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
},

{
  title: "John Wick",
  rating: "8.6",
  image:
    "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
},

{
  title: "Black Panther",
  rating: "8.4",
  image:
    "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
},

{
  title: "Tenet",
  rating: "8.5",
  image:
    "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
},

{
  title: "Dune",
  rating: "8.8",
  image:
    "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
},

{
  title: "Deadpool",
  rating: "8.4",
  image:
    "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
},

{
  title: "Thor Ragnarok",
  rating: "8.3",
  image:
    "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
},

{
  title: "The Flash",
  rating: "7.9",
  image:
    "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
},

{
  title: "Guardians of the Galaxy",
  rating: "8.7",
  image:
    "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
},
  ]
  return (
    <section id="movies" className="bg-black px-4 md:px-10 py-16">

      <h1 className="text-white text-4xl font-bold mb-10 text-center">
        Trending Movies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            rating={movie.rating}
            image={movie.image}
          />
        ))}

      </div>

    </section>
  )
}

export default MovieSection
 