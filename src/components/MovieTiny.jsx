import { FaImdb } from "react-icons/fa";

function MovieTiny({ movie }) {
  return (
    <div className="movie-tiny">
      <img style={{ width: "50px" }} src={movie.Poster} alt="" />
      <div className="movie-tiny-infos">
        <h2>{movie.Title}</h2>
        <h3>{movie.Year}</h3>
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaImdb className="imdb-icon" style={{ fontSize: "2.5rem" }} />
        </a>
      </div>
    </div>
  );
}

export default MovieTiny;
