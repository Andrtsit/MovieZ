import { useAppContext } from "../context/AppContext";
import { getData } from "../utils/getData";

function Header() {
  const { setData, setTotalResults, query, setQuery } = useAppContext();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newData = await getData(query, 1);
      setData(newData.Search);
      setTotalResults(Number(newData.totalResults));
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBar"></label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          id="searchBar"
          placeholder="Search for a movie.."
        />
      </form>
    </header>
  );
}

export default Header;
