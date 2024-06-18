import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import BannerSlider from "./components/BannerSlider";
import MovieDetails from "./components/MovieDetails";
import Popular from "./components/Popular";
import TermsPage from "./components/TermsPage";
import { AppContext } from "./context/AppContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRated from "./components/TopRated";
import UpcomingMovies from "./components/UpcomingMovies";
import SubscribePage from "./components/SubscribePage";
import NewRealeased from "./components/NewRealeased";
import SearchResults from "./components/SearchResults";
import BlogPage from "./components/BlogPage"

function App() {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movie) => {
    let newWatchList = [...watchList, movie];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const removeFromWatchList = (movie) => {
    let filteredWatchList = watchList.filter((item) => item.id !== movie.id);
    setWatchList(filteredWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
  };

  useEffect(() => {
    let newLocalStorage = localStorage.getItem("moviesApp");
    if (newLocalStorage) {
      return setWatchList(JSON.parse(newLocalStorage));
    }
    // setWatchList(JSON.parse(newLocalStorage));
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
                  <BannerSlider watchList={watchList} />{" "}
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

            <Route path="/newreleased" element={<NewRealeased />} />

            <Route path="/popular" element={<Popular />} />

            <Route path="/toprated" element={<TopRated />} />

            <Route path="/upcomingmovies" element={<UpcomingMovies />} />

            <Route path="/movies/:id" element={<MovieDetails />} />

            <Route path="/search" element={<SearchResults />} />

            <Route path="/subscribepage" element={<SubscribePage />} />

            <Route path="/terms" element={<TermsPage />} />

            <Route path="/blogpage" element={<BlogPage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
