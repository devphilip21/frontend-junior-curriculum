export default function MovieCard({
  title,
  description,
}) {
  return (
    <a href="" className="movie-card">
      <strong className="title">{title}</strong>
      <p className="desc">{description}</p>
    </a>
  );
}
