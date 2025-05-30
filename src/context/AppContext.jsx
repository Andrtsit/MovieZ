import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        data,
        setData,
        watchedMovies,
        setWatchedMovies,
        totalResults,
        setTotalResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  return useContext(AppContext);
}
