import { FaImdb } from "react-icons/fa";

function MovieSmall({ movie }) {
  return (
    <div className="movie-small">
      <img src={movie.Poster}></img>
      <div className="movie-small-infos">
        <h1>{movie.Title}</h1>
        <p>Type: {movie.Type.toUpperCase()}</p>
        <p>
          Year of release: <b>{movie.Year}</b>
        </p>
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaImdb className="imdb-icon" />
        </a>
      </div>
    </div>
  );
}

export default MovieSmall;
