import { useAppContext } from "../context/AppContext";

import MovieTiny from "./MovieTiny";

function MoviesRated() {
  const { watchedMovies } = useAppContext();

  return (
    <section>
      <h1>WATCHEDMOVIES</h1>
      {watchedMovies.map((movie) => (
        <MovieTiny key={movie.imdbID} movie={movie} />
      ))}
    </section>
  );
}

export default MoviesRated;
