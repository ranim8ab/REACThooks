import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL:
        "https://m.media-amazon.com/images/I/71n6P6u7tKL._AC_SY679_.jpg",
      rating: 5,
      backClass: "interstellar_back",
    },
    {
      title: "Fractured",
      description:
        "A man becomes desperate to find his missing wife and daughter after a tragic hospital incident.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/f/f9/Fractured_2019_film.jpg",
      rating: 4,
      backClass: "fractured_back",
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
      posterURL:
        "https://m.media-amazon.com/images/I/51s+uLqfGQL._AC_.jpg",
      rating: 5,
      backClass: "inception_back",
    },
    {
      title: "Prison Break",
      description:
        "A man deliberately gets himself imprisoned to help his falsely accused brother escape death row.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/9/97/Prison_Break_Season_1_DVD_cover.jpg",
      rating: 4,
      backClass: "prisonbreak_back",
    },
    {
      title: "Peaky Blinders",
      description:
        "A gangster family epic set in 1919 Birmingham, England, centered on a gang who sew razor blades in their caps.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/0/0a/Peaky_Blinders_Title_Card.jpg",
      rating: 5,
      backClass: "peaky_back",
    },
    {
      title: "Prisoners",
      description:
        "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/5/5f/Prisoners_2013_film_poster.jpg",
      rating: 4,
      backClass: "prisoners_back",
    },
    {
      title: "Shutter Island",
      description:
        "Two U.S. Marshals investigate the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg",
      rating: 5,
      backClass: "shutter_back",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "#ffd700", margin: "20px 0" }}>
        My Movie App 🎬
      </h1>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <AddMovie movies={movies} setMovies={setMovies} />
      <MovieList
        movies={movies.filter(
          (m) =>
            m.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            m.rating >= rateFilter
        )}
      />
    </div>
  );
}

export default App;
