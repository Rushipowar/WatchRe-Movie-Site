import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import BannerSlider from "./components/BannerSlider";
import MovieDetails from "./components/MovieDetails";
import { AppContext } from "./context/AppContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movie) => {
    let newWatchList = [...watchList, movie];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const removeFromWatchList = (movie) => {
    let filterWatchList = setWatchList.filter((item) => {
      return item.id !== movie.id;
    });

    setWatchList(filterWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filterWatchList));
  };

  useEffect(() => {
    let newLocalStorage = localStorage.getItem("moviesApp");
    if (!newLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(newLocalStorage));
  }, []);
  return (
    <>
      <AppContext.Provider
        value={{
          watchList,
          addToWatchList,
          removeFromWatchList,
          setWatchList,
        }}
      >
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BannerSlider watchList={watchList}/>{" "}
                  <Movies
                    watchList={watchList}
                    addToWatchList={addToWatchList}
                    removeFromWatchList={removeFromWatchList}
                  />
                </>
              }
            />

            <Route
              path="/watchlist"
              element={<WatchList watchList={watchList} />}
            />

            <Route
              path="/moviesdetailspage"
              element={
                <MovieDetails
                  watchList={watchList}
                  setWatchList={setWatchList}
                  removeFromWatchList={removeFromWatchList}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
