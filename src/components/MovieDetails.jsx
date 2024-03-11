import React from "react";
import Movies from "./Movies";

function MovieDetails({ watchList }) {
  return (
    <div>
      {watchList.map((movie) => {
        return (
          <div>
            <img
              className="w-84"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />

            <div>
              {movie.overview}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieDetails;
