import { useAppContext } from "../context/AppContext";
import { getData } from "../utils/getData";
import Button from "./Button";
import MovieSmall from "./MovieSmall";

function Page() {
  const { data, totalResults, setData, query } = useAppContext();
  const numPages = Math.floor(totalResults / 10);

  async function handlePage(page) {
    const newData = await getData(query, page);
    setData(newData.Search);
  }

  return (
    <>
      {data.map((movie) => (
        <MovieSmall key={movie.imdbID} movie={movie} />
      ))}
      <footer>
        {Array.from({ length: numPages }).map((_, i) => (
          <Button onClick={() => handlePage(i + 1)} key={i + 1}>
            {i + 1}
          </Button>
        ))}
      </footer>
    </>
  );
}

export default Page;
