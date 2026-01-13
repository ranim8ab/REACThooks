const MovieCard = ({ movie }) => {
  const stars = "⭐".repeat(movie.rating);

  return (
    <div className="movie_card">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={movie.posterURL} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <h4>{stars}</h4>
            <span className="minutes">120 min</span>
            <p className="type">Action, Adventure</p>
          </div>
        </div>

        <div className="movie_desc">
          <p className="text">{movie.description}</p>
        </div>
      </div>
      <div className={`blur_back ${movie.backClass}`}></div>
    </div>
  );
};

export default MovieCard;
