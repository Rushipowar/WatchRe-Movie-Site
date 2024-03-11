import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import MovieDetails from "./MovieDetails";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({addToWatchList, removeFromWatchList, watchList}) {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const nextPage = () => {
    setPageNum(pageNum + 1);
  }

  const previousPage = () => {
    if(pageNum == 1){
      setPageNum(1);
    }else{
      setPageNum(pageNum - 1);
    }
    
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f7ed68515e074c4cb5ad9d87046ba874&language=en-US&page=${pageNum}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNum]);
  return (
    <div className="p-5">
      <div className="text-3xl m-5 font-bold text-center">Movies</div>

      <div className="flex flex-row justify-between flex-wrap my-7">
        {movies.map((movie) => {
          return <MovieCards key={movie.id} movie={movie} poster_path={movie.poster_path} name={movie.title} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} watchList={watchList} />;
        })}
      </div>

      <Pagination pageNum={pageNum} netxPage={nextPage} previousPage={previousPage}/>
    </div>
  );
}

export default Movies;


// https://api.themoviedb.org/3/movie/popular?api_key=f7ed68515e074c4cb5ad9d87046ba874&language=en-US&page=1
