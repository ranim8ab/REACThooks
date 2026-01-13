import { useState } from "react";

const AddMovie = ({ movies, setMovies }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
    backClass: "bright_back",
  });

  const handleAddMovie = () => {
    if (!movie.title || !movie.posterURL) return;

    setMovies([...movies, movie]);

    setMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 1,
      backClass: "bright_back",
    });
  };

  return (
    <div className="add-movie">
      <h3>Add New Movie / TV Show</h3>

      <input
        type="text"
        placeholder="Title"
        value={movie.title}
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
      />

      <input
        type="text"
        placeholder="Poster URL"
        value={movie.posterURL}
        onChange={(e) => setMovie({ ...movie, posterURL: e.target.value })}
      />

      <textarea
        placeholder="Description"
        value={movie.description}
        onChange={(e) =>
          setMovie({ ...movie, description: e.target.value })
        }
      />

      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating (1–5)"
        value={movie.rating}
        onChange={(e) =>
          setMovie({ ...movie, rating: Number(e.target.value) })
        }
      />

      <select
        value={movie.backClass}
        onChange={(e) =>
          setMovie({ ...movie, backClass: e.target.value })
        }
      >
        <option value="bright_back">Bright</option>
        <option value="tomb_back">Tomb Raider</option>
        <option value="ave_back">Avengers</option>
      </select>

      <button onClick={handleAddMovie}>➕ Add Movie</button>
    </div>
  );
};

export default AddMovie;
