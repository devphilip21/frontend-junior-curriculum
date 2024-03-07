import Link from 'next/link';

export default function MovieCard({
  id,
  title,
  description,
}) {
  const href = `/${id}`;

  return (
    <Link href={href} className='movie-card'>
      <strong className="title">{title}</strong>
      <p className="desc">{description}</p>
    </Link>
  );
}
