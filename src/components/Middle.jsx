import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";

function Middle() {
  const [cele, setCele] = useState([]);
  const [bgImg, setBgImg] = useState(
    "https://pbs.twimg.com/media/EVOCAX6U0AAthj1.jpg:large"
  );

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?api_key=f7ed68515e074c4cb5ad9d87046ba874&language=en-US&page=1"
      )
      .then((res) => {
        setCele(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="middle-container">
      <div className="font-bold text-white text-3xl mt-5 mb-10">
        Multiple Movies
      </div>
      <div className="flex justify-between">
        <div>
          <div className="left-middle w-96 h-96 flex gap-10">
            <div>
              <div>
                <h2 className="font-bold text-white text-lg text-start mb-3 ml-3">
                  New Release
                </h2>
              </div>

              <Carousel
                className="left-middle w-80 h-80 font-bold text-yellow-300"
                indicators={false}
                leftControl="<"
                rightControl=">"
              >
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202405/CHANDU-CHAMPION_1715768291.jpg?downsize=215:301"
                  alt="..."
                />
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202406/luv_ki_arrange_marriage_1_1718307490.jpg?downsize=215:301"
                  alt="..."
                />
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202405/blackout_1716282014.jpg?downsize=215:301"
                  alt="..."
                />
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202405/munjya_1716463991.jpg?downsize=215:301"
                  alt="..."
                />
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202310/10_1_1698302101.jpg?downsize=215:301"
                  alt="..."
                />
              </Carousel>
            </div>

            <div>
              <div>
                <h2 className="font-bold text-white text-lg text-start mb-3 ml-3">
                  Upcoming
                </h2>
              </div>
              <Carousel
                className="left-middle w-80 h-80 font-bold text-yellow-300"
                indicators={false}
                leftControl="<"
                rightControl=">"
              >
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202405/ishq_vishk_rebound_1715689980.jpg?downsize=215:301"
                  alt="..."
                />
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202302/Project-K_1676981742.jpg?downsize=215:301"
                  alt="..."
                />
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202308/kill1_1691151336.jpg?downsize=215:301"
                  alt="..."
                />
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202404/Stree-2_1712210862.jpg?downsize=215:301"
                  alt="..."
                />
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202309/Jigar_1695903816.jpg?downsize=215:301"
                  alt="..."
                />
              </Carousel>
            </div>

            <div>
              <div>
                <h2 className="font-bold text-white text-lg text-start mb-3 ml-3">
                  BlockBuster
                </h2>
              </div>

              <Carousel
                className="left-middle w-80 h-80 font-bold text-yellow-300"
                indicators={false}
                leftControl="<"
                rightControl=">"
              >
                <img
                  src="https://stat5.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022-306x393.jpeg"
                  alt="..."
                />
                <img
                  src="https://stat4.bollywoodhungama.in/wp-content/uploads/2019/03/KGF-19-306x393.jpg"
                  alt="..."
                />
                <img
                  src="https://media5.bollywoodhungama.in/wp-content/uploads/2021/10/Gadar-2-1-306x393.jpg"
                  alt="..."
                />
                <img
                  src="https://stat4.bollywoodhungama.in/wp-content/uploads/2017/09/Golmaal-Again-2-306x393.jpg"
                  alt="..."
                />
                <img
                  src="https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/films14-306x393.jpg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>


          <div className="spotlight mt-12">
            <h2 className="text-white my-10 mr-20 w-60 font-bold text-2xl">
              Movie Posters
            </h2>
          </div>
          <div
            className="movie-poster rounded-md w-auto"
            style={{ backgroundImage: bgImg }}
          >
            <div className="items w-2/4 flex gap-4 absolute left-24">
              <div className="w-full">
                <img
                  className="rounded-lg h-24 w-44 cursor-pointer hover:opacity-80 duration-300 pt-1"
                  src="https://pbs.twimg.com/media/EVOCAX6U0AAthj1.jpg:large"
                  alt=""
                  onClick={() => {
                    setBgImg(
                      'url("https://pbs.twimg.com/media/EVOCAX6U0AAthj1.jpg:large")'
                    );
                  }}
                />

                {/* <div className="text-white absolute top-96 left-4 pt-16">
                  <h1 className="font-bold text-4xl">Vijay Master</h1>
                  <div className="mt-10 font-semibold text-lg flex flex-col gap-3">
                    <p>Released: 2023</p>
                    <p>Actors: Thalapathy Vijay, Vijay Sethupaty, Arjun Das</p>
                    <p>Ratings: 8.9</p>
                  </div>
                </div> */}
              </div>
              <div className="w-full">
                <img
                  className="rounded-lg h-24 w-44 cursor-pointer hover:opacity-80 duration-300 pt-1"
                  src="https://images.hdqwalls.com/download/captain-america-civil-war-movie-poster-1920x1080.jpg"
                  alt=""
                  onClick={() => {
                    setBgImg(
                      'url("https://images.hdqwalls.com/download/captain-america-civil-war-movie-poster-1920x1080.jpg")'
                    );
                  }}
                />

                {/* <div className="text-white absolute top-96 left-4 pt-16">
                  <h1 className="font-bold text-4xl">Civil Var</h1>
                  <div className="mt-10 font-semibold text-lg flex flex-col gap-3">
                    <p>Released: 2023</p>
                    <p>Actors: Thalapathy Vijay, Vijay Sethupaty, Arjun Das</p>
                    <p>Ratings: 8.9</p>
                  </div>
                </div> */}
              </div>
              <div className="w-full">
                <img
                  className="rounded-lg h-24 w-44 cursor-pointer hover:opacity-80 duration-300 pt-1"
                  src="https://4kwallpapers.com/images/wallpapers/fast-x-2023-movies-8k-5k-1920x1080-11504.jpg"
                  alt=""
                  onClick={() => {
                    setBgImg(
                      'url("https://4kwallpapers.com/images/wallpapers/fast-x-2023-movies-8k-5k-1920x1080-11504.jpg")'
                    );
                  }}
                />
              </div>
              <div className="w-full">
                <img
                  className="rounded-lg h-24 w-44 cursor-pointer hover:opacity-80 duration-300 pt-1"
                  src="https://wallpapercave.com/wp/wp8525583.jpg"
                  alt=""
                  onClick={() => {
                    setBgImg(
                      'url("https://wallpapercave.com/wp/wp8525583.jpg")'
                    );
                  }}
                />
              </div>
              <div className="w-full">
                <img
                  className="rounded-lg h-24 w-44 cursor-pointer hover:opacity-80 duration-300 pt-1"
                  src="https://wallpapercave.com/wp/wp12400982.jpg"
                  alt=""
                  onClick={() => {
                    setBgImg(
                      'url("https://wallpapercave.com/wp/wp12400982.jpg")'
                    );
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-white text-3xl mt-20 mb-2">
              Download Offline
            </h1>
            <div className="newsletter mt-10 flex justify-center bg-slate-900 py-24 rounded">
              <div className="left-image">
                <img
                  src="https://themebeyond.com/html/movflx/img/images/services_img.jpg"
                  alt=""
                  className="w-96 h-96 rounded"
                />
              </div>
              <div className="right-content text-white ml-20 w-2/4">
                <div className="flex">
                  <span className="text-yellow-300 text-xl font-extrabold">
                    _____
                  </span>
                  <p className="font-bold text-gray-400 ml-1">OUR SERVICES</p>
                </div>
                <h1 className="text-white font-bold text-3xl mb-5 mt-5">
                  Download Your Shows and Movies
                  <br /> <span className="text-yellow-300">Offline.</span>
                </h1>
                <p className="font-semibold text-gray-400">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                  eiusmod tempor.There are many variations of passages of lorem
                  Ipsum available, but the majority have suffered alteration in
                  some injected humour.
                </p>

                <div className="mt-5">
                  <div className="top flex">
                    <i class="fa fa-video px-6 py-5 rounded-full border border-dashed border-yellow-300 self-center text-xl hover:bg-yellow-300 duration-300 cursor-pointer"></i>
                    <div className="flex flex-col ml-5">
                      <h1 className="font-bold text-lg mt-2">
                        Enjoy on Your Movies.
                      </h1>
                      <p className="mt-2 font-bold text-gray-400">
                        Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>

                  <div className="bottom flex mt-5">
                    <i class="fa fa-tv px-6 py-6 rounded-full border border-dashed border-yellow-300 self-center text-xl hover:bg-yellow-300 duration-300 cursor-pointer"></i>
                    <div className="flex flex-col ml-5">
                      <h1 className="font-bold text-lg mt-2">
                        Enjoy on Your TV.
                      </h1>
                      <p className="mt-2 font-bold text-gray-400">
                        Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="right-middle w-2/6">
          <div className="spotlight">
            <h2 className="text-white mr-20 w-60 font-bold text-xl bg-yellow-300 px-6 p-2 rounded-md">
              Spotlight Celebrities
            </h2>
          </div>

          <div className="celebrities flex flex-col gap-8 mt-10">
            <div className="flex flex-col">
              {cele.map((celebrities, index) => (
                <div className="image flex" key={index}>
                  <div>
                    <img
                      className="w-20 m-2 mt-5  rounded-lg"
                      src={`https://image.tmdb.org/t/p/original/${celebrities.profile_path}`}
                      // imgSrc={`https://image.tmdb.org/t/p/original/${celebrities.poster_path}`}
                      alt=""
                    />
                  </div>

                  <div className="name self-center m-3">
                    <h2 className="text-white font-bold text-xl text-center">
                      {celebrities.name}
                    </h2>
                    ,
                    <p className="text-white">
                      {celebrities.known_for_department}
                    </p>
                    ;
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
