import React from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function MovieCards({
  poster_path,
  name,
  addToWatchList,
  movie,
  removeFromWatchList,
  watchList,
}) {
  const navigate = useNavigate();

  function doesContain(movie) {
    for (let i = 0; i < watchList.length; i++) {
      if (movie.id === watchList[i].id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="m-2">
      <Card   
        className="max-w-60 hover:scale-110 duration-300 cursor-pointer"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={`https://image.tmdb.org/t/p/original/${poster_path}`}
      >
        <div className="text-lg font-bold text-center" onClick={() => navigate("/moviesdetailspage")}>{name}</div>

        {doesContain(movie) ? (
          <div className="flex justify-center">
            <button
              onClick={() => removeFromWatchList(movie)}
              className="text-white bg-red-500 px-8 py-2 rounded hover:bg-red-400 duration-300"
            >
              Remove WatchList
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={() => addToWatchList(movie)}
              className="text-white bg-blue-500 px-8 py-2 rounded hover:bg-blue-400 duration-300"
            >
              Add To WatchList
            </button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default MovieCards;
