import { React, useState, useEffect } from "react";
import axios from "axios";

function NewRealeased() {

    const [toprated, setToprated] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=f7ed68515e074c4cb5ad9d87046ba874`
      )
      .then((res) => {
        setToprated(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="upcoming flex gap-8 mt-10">
      <div className="flex flex-wrap justify-center">
        {toprated.map((movie, index) => (
          <div className="image flex flex-col">
            <div>
              <img
                className="w-40 m-3 mt-5 rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                // imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
            </div>

            <div className="name self-start m-1">
              <h2 className="text-white font-bold text-xl text-center">
                {movie.ratings}
              </h2>
              ,
              <h3 className="text-white font-bold hover:text-yellow-300 duration-300 cursor-pointer">
                {movie.title}
              </h3>
              ,<p className="text-white text-sm mb-5">{movie.release_date}</p>
              <p className="text-white bg-yellow-300 w-1 text-center hover:w-40 duration-700 cursor-pointer py-1 rounded-xl">
                {movie.vote_average}
              </p>
              ;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewRealeased;
