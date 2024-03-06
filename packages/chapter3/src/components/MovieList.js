import MovieCard from "./MovieCard";

export default function MovieList() {
  const movies = [];

  if (movies.length === 0) {
    return (
      <p className="notice">Not found movies</p>
    )
  }

  return (
    <ul className="movie-list">
      {movies.map(movie => (
        <li className="item" key={movie.id}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  )
}
