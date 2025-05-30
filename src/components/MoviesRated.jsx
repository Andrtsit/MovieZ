import { FaImdb } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

function MoviesRated() {
  const { openedMovie } = useAppContext();
  console.log(openedMovie);
  if (!openedMovie) return <section className="scroll-smooth-dark"></section>;
  return (
    <section className="opened-movie scroll-smooth-dark">
      <img src={openedMovie.Poster} alt="" />
      <h1>{openedMovie.Title}</h1>
      <h2>Director: {openedMovie.Director}</h2>
      <h3>Duration: {openedMovie.Runtime}</h3>
      <p>Actors: {openedMovie.Actors} </p>
      <p>Genre: {openedMovie.Genre} </p>
      <p> Plot: {openedMovie.Plot} </p>
      <a
        href={`https://www.imdb.com/title/${openedMovie.imdbID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaImdb className="imdb-icon" />
      </a>
    </section>
  );
}

export default MoviesRated;
