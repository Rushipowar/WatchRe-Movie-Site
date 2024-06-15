import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react";

function Navbar() {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="flex space-x-4 m-3 p-4 items-center bg-black text-white">
      <h1 className="font-bold text-lg text-white">
        Watch<span className="font-bold text-lg text-yellow-300">Re.</span>
      </h1>

      <Link to="/" className="font-bold pl-32 text-lg hover:text-yellow-300">
        Home
      </Link>

      <Link
        to="/watchlist"
        className="font-bold pl-3 text-lg hover:text-yellow-300"
      >
        WatchList
      </Link>

      <Dropdown label="Movies" inline>
        <Dropdown.Item className="hover:text-yellow-300 font-bold">
        <Link
            to="/newreleased"
            className="font-bold pl-3 text-lg hover:text-yellow-300"
          >
            New Released
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="hover:text-yellow-300 font-bold">
          <Link
            to="/popular"
            className="font-bold pl-3 text-lg hover:text-yellow-300"
          >
            Popolar
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="hover:text-yellow-300 font-bold">
          <Link
            to="/toprated"
            className="font-bold pl-3 text-lg hover:text-yellow-300"
          >
            TopRated
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="hover:text-yellow-300 font-bold">
          <Link
            to="/upcomingmovies"
            className="font-bold pl-3 text-lg hover:text-yellow-300"
          >
            Upcoming
          </Link>
        </Dropdown.Item>
      </Dropdown>

      <Dropdown label="Pages" inline>
        <Dropdown.Item className="hover:text-yellow-300 font-bold">
          Blog
        </Dropdown.Item>
        <Dropdown.Item className="hover:text-yellow-300 font-bold">
          Pricing
        </Dropdown.Item>
        <Dropdown.Item className="hover:text-yellow-300 font-bold">
          Contact Us
        </Dropdown.Item>
        <Dropdown.Item className="hover:text-yellow-300 font-bold">
          <Link
            to="/terms"
            className="font-bold pl-3 text-lg hover:text-yellow-300"
          >
            Terms & Conditions
          </Link>
        </Dropdown.Item>
      </Dropdown>

      <form onSubmit={handleSearch} className="searchbar flex gap-4 align-middle">
        <input
          type="text"
          placeholder="Search Movies..."
          className="border-0 outline-0 w-96 bg-slate-600 ml-20 pr-2 pl-5 pt-3 pb-3 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="fas fa-search self-center cursor-pointer hover:scale-125 hover:text-yellow-300 transition"></button>
      </form>

      <div className="account">
        <i className="fas fa-user ml-14 w-10 bg-yellow-300 p-3 rounded-full cursor-pointer"></i>
      </div>

      <div className="subscribeBtn">
        <button className="text-white bg-yellow-300 w-0 hover:px-2 hover:py-1 text-center hover:w-40 duration-700 cursor-pointer rounded-md ml-4 font-extrabold">
          <Link
            to="/subscribepage"
          >
            Subscribe
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
