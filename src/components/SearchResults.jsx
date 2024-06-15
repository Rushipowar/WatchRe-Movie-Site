import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MovieCards from "./MovieCards";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = ({ addToWatchList, removeFromWatchList, watchList }) => {
  const query = useQuery();
  const searchQuery = query.get("query");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=f7ed68515e074c4cb5ad9d87046ba874&query=${searchQuery}`)
        .then((res) => {
          setMovies(res.data.results);
        });
    }
  }, [searchQuery]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-white">Search Results for "{searchQuery}"</h1>
      <div className="flex flex-row justify-between flex-wrap my-10">
        {movies.map((movie) => (
          <MovieCards
            key={movie.id}
            movie={movie}
            poster_path={movie.poster_path}
            name={movie.title}
            addToWatchList={addToWatchList}
            removeFromWatchList={removeFromWatchList}
            watchList={watchList}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
