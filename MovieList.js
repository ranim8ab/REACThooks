import MovieCard from "./MovieCard";
import "./App.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p className="no-movies">No movies match your filters 😢</p>
      ) : (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      )}
    </div>
  );
};

export default MovieList;

