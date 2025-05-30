import { FaImdb } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import Button from "./Button";
import { getMovie } from "../utils/getMovie";

function MovieSmall({ movie }) {
  const { setOpenedMovie } = useAppContext();
  return (
    <div className="movie-small">
      {movie.Poster === "N/A" ? (
        <p>NO POSTER</p>
      ) : (
        <img src={movie.Poster}></img>
      )}
      <div className="movie-small-infos">
        <h1>{movie.Title}</h1>
        <h2>Type: {movie.Type.toUpperCase()}</h2>
        <h3>
          Year of release: <b>{movie.Year}</b>
        </h3>
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaImdb className="imdb-icon" />
        </a>
        <Button
          onClick={async () => {
            const clickedMovie = await getMovie(movie.imdbID);
            setOpenedMovie(clickedMovie);
          }}
        >
          More Details
        </Button>
      </div>
    </div>
  );
}

export default MovieSmall;
