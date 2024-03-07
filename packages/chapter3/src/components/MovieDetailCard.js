import MovieRepository from "@/persist/MovieRepository";

export default function MovieDetailCard() {
  const movie = {
    id: 1,
    title: 'TO-DO',
    description: 'implementation required.',
  };

  if (!movie) {
    throw new Error('movie not found');
  }

  return (
    <div className="movie-detail-wrap">
      <div className="movie-detail-card">
        <em className="id">#{movie.id}</em>
        <h1 className="heading">{movie.title}</h1>
        <p className="desc">{movie.description}</p>
      </div>
    </div>
  );
}
