import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f7ed68515e074c4cb5ad9d87046ba874&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail p-5 text-white">
      <button onClick={() => navigate(-1)} className="mb-5 px-6 py-3 bg-yellow-300 font-bold rounded-md hover:bg-yellow-400">
      <i class="fa fa-arrow-left mr-2"></i>Back
      </button>
      <div className="mt-10">
        <div className="flex gap-4">
          <div className="left">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded"
            />
          </div>

          <div className="right">
          <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="rounded"
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold ml-6 mt-5">{movie.title}</h2>
        <p className="my-3 ml-12">{movie.overview}</p>

        <ul className="mt-12 ml-8">
          <li className="mt-4">
            <strong>Release Date:</strong> {movie.release_date}
          </li>
          <li className="mt-4">
            <strong>Rating:</strong> {movie.vote_average}
          </li>
          <li className="mt-4">
            <strong>Popularity:</strong> {movie.popularity}
          </li>
          <li className="mt-4">
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
