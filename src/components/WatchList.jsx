import React, { useEffect } from "react";
import { Table } from "flowbite-react";
import { useState } from "react";
import genreid from "../utility/genre";

function WatchList({ watchList, setWatchList, removeFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [currGenre, setCurrGenre] = useState("All Genre");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleGenre = (genre) => {
    setCurrGenre(genre)
  }

  const sortIncreasing = () => {
    let sortedInc = watchList.sort((a, b) => a.vote_average - b.vote_average);
    setWatchList([...sortedInc]);
  };

  const sortDecreasing = () => {
    let sortedDec = watchList.sort((a, b) => b.vote_average - a.vote_average);
    setWatchList([...sortedDec]);
  };

  useEffect(() => {
    let temp = watchList.map((movie) => {
      return genreid[movie.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genre", ...temp]);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div onClick={() => handleGenre(genre)} className={currGenre == genre?"flex justify-center cursor-pointer my-2 mx-3 h-[3rem] w-[7rem] rounded bg-blue-500 items-center text-white":"flex justify-center cursor-pointer my-2 mx-3 h-[3rem] w-[7rem] rounded bg-gray-400 items-center text-white"}>
              {genre}
            </div>
          );
        })}
       
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies..."
          className="px-8 py-3 mt-2 border-none rounded-full bg-gray-300 outline-none"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="overflow-x-auto ml-2 mr-2 border">
        <Table>
          <Table.Head>
            <Table.HeadCell>Movies Name</Table.HeadCell>
            <Table.HeadCell className="flex cursor-pointer">
              <div className="mx-5" onClick={sortIncreasing}>
                <i class="fa fa-arrow-up"></i>
              </div>
              Ratings
              <div className="mx-5 cursor-pointer" onClick={sortDecreasing}>
                <i class="fa fa-arrow-down"></i>
              </div>
            </Table.HeadCell>
            <Table.HeadCell>Popularity</Table.HeadCell>
            <Table.HeadCell>Genre</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {watchList.filter((movie) => {
              if(currGenre == "All Genre"){
                return movie
              }
              else{
                return genreid[movie.genre_ids[0]] == currGenre
              }
            })
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLocaleLowerCase())
              )
              .map((movie) => {
                return (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="flex">
                      <img
                        className="w-24"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                      />
                      <div className="ml-12 mt-8 text-center font-bold">
                        {movie.title}
                      </div>
                    </Table.Cell>
                    <Table.Cell>{movie.vote_average}</Table.Cell>
                    <Table.Cell>{movie.popularity}</Table.Cell>
                    <Table.Cell>{genreid[movie.genre_ids[0]]}</Table.Cell>
                    <Table.Cell>
                      <div
                        className="font-medium bg-red-600 px-2 py-2 text-white rounded text-center hover:bg-red-700 dark:text-cyan-500 cursor-pointer"
                        onClick={() => removeFromWatchList(movie)}
                      >
                        Delete
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default WatchList;
