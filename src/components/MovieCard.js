
function MovieCard({ movie }) {
  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
      <p>Rating: ⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;