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
      <div className="flex justify-center flex-wrap m-4 mt-8">
        {genreList.map((genre, index) => {
          return (
            <div key={index} onClick={() => handleGenre(genre)} className={currGenre == genre?"flex justify-center cursor-pointer my-2 mx-3 h-[2.5rem] w-[6rem] duration-500 rounded-lg bg-yellow-300 items-center text-white":"flex justify-center cursor-pointer my-2 mx-3 h-[2.5rem] w-[6rem] rounded-lg bg-gray-400 duration-500 items-center text-white"}>
              {genre}
            </div>
          );
        })}
       
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies..."
          className="px-14 py-3 mt-6 border-none rounded-lg text-white font-bold bg-gray-400 outline-0"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="overflow-x-auto ml-2 mt-20 mr-2 border-0">
        <Table className="bg-black">
          <Table.Head className="bg-black">
            <Table.HeadCell className="text-white bg-black">Movies Name</Table.HeadCell>
            <Table.HeadCell className="flex cursor-pointer bg-black">
              <div className="mx-5 cursor-pointer bg-black" onClick={sortIncreasing}>
                <i class="fa fa-arrow-up text-white"></i>
              </div>
              <h2 className="text-white bg-black">Ratings</h2>
              <div className="mx-5 cursor-pointer bg-black" onClick={sortDecreasing}>
                <i class="fa fa-arrow-down text-white"></i>
              </div>
            </Table.HeadCell>
            <Table.HeadCell  className="bg-black text-white">Popularity</Table.HeadCell>
            <Table.HeadCell  className="bg-black text-white">Genre</Table.HeadCell>
            <Table.HeadCell  className="bg-black text-white">
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y bg-black">
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
                  <Table.Row className="bg-black">
                    <Table.Cell className="flex bg-black text-white">
                      <img
                        className="w-24"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                      />
                      <div className="ml-12 mt-8 text-center font-bold text-white">
                        {movie.title}
                      </div>
                    </Table.Cell>
                    <Table.Cell className="bg-black text-white">{movie.vote_average}</Table.Cell>
                    <Table.Cell className="bg-black text-white">{movie.popularity}</Table.Cell>
                    <Table.Cell className="bg-black text-white">{genreid[movie.genre_ids[0]]}</Table.Cell>
                    <Table.Cell className="bg-black text-white">
                      <div
                        className="font-medium bg-red-600 px-2 py-2 text-white rounded text-center hover:bg-red-700 dark:text-cyan-500 cursor-pointer"
                        onClick={() => removeFromWatchList(movie)}
                      >
                        <i className="fas fa-trash font-bold hover:text-red-600"></i>
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
