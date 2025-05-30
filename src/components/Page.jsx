import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getData } from "../utils/getData";
import Button from "./Button";
import MovieSmall from "./MovieSmall";

function Page() {
  const { data, numPages, setData, query } = useAppContext();
  const [currPage, setCurrPage] = useState(1);

  const activeButtonStyle = { backgroundColor: "aqua" };

  async function handlePage(page) {
    const newData = await getData(query, page);

    setData(newData.Search);
    setCurrPage(page);
  }

  return (
    <>
      {data.map((movie) => (
        <MovieSmall key={movie.imdbID} movie={movie} />
      ))}
      <footer>
        {currPage > 1 && (
          <Button onClick={() => handlePage(currPage - 1)}>⬅️</Button>
        )}
        {Array.from({ length: numPages }).map((_, i) => {
          const page = i + 1;
          const isActive = currPage === page;

          return (
            <Button
              style={isActive ? activeButtonStyle : {}}
              onClick={() => handlePage(page)}
              key={page}
            >
              {page}
            </Button>
          );
        })}
        {currPage < numPages && (
          <Button onClick={() => handlePage(currPage + 1)}>➡️</Button>
        )}
      </footer>
    </>
  );
}

export default Page;
