import React from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import MovieDetails from "./MovieDetails";

function MovieCards({
  poster_path,
  name,
  addToWatchList,
  movie,
  removeFromWatchList,
  watchList,
}) {
  const navigate = useNavigate();

  // function doesContain(movie) {
  //   for (let i = 0; i < watchList.length; i++) {
  //     if (movie.id === watchList[i].id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // const doesContain = (arr, item) => {
  //     if (!arr) return false; // Ensure arr is defined
  //     return arr.length && arr.includes(item);
  // };

  const doesContain = (arr, item) => {
    if (!arr) return false;
    return arr.some(watchListItem => watchListItem.id === item.id);
  };

  return (
    <div className="m-2">
      <Card
        className="max-w-80 cursor-pointer bg-black text-white border-0 " //hover:scale-95 duration-300
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={`https://image.tmdb.org/t/p/original/${poster_path}`}
      >
        <div
          className="text-md font-bold text-start"
          onClick={() => navigate(`/movies/${movie.id}`)}
        >
          {name}
        </div>

        {doesContain(watchList, movie) ? (
          <div className="flex justify-start">
            <button
              onClick={() => removeFromWatchList(movie)}
              className="text-white"
            >
              <i className="fas fa-trash font-bold hover:text-red-600"></i>
            </button>
          </div>
        ) : (
          <div className="flex justify-start">
            <button
              onClick={() => addToWatchList(movie)}
              className="text-white"
            >
              <i className="fas fa-plus hover:text-green-400 duration-200"></i>
            </button>

            <div className="otherBtns">
              <button>
                {" "}
                <i className="fas fa-share-alt ml-5 hover:text-blue-400 duration-200"></i>{" "}
              </button>
              <button>
                <i className="fas fa-heart ml-5 hover:text-pink-500 duration-200"></i>
              </button>
              <button>
                <a
                  href=""
                  className="ml-24 font-bold hover:text-yellow-300 duration-300"
                  onClick={() => navigate(`/movies/${movie.id}`)}
                >
                  Details
                </a>
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

export default MovieCards;
