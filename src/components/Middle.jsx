import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";

function Middle() {
  const [cele, setCele] = useState([]);

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
        <div className="left-middle w-96 h-96 flex gap-10">
          <div>
            <div>
              <h2 className="font-bold text-white text-lg text-start mb-3 ml-3">
                New Release
              </h2>
            </div>

            <Carousel
              className="left-middle w-80 h-80"
              indicators={false}
              leftControl="."
              rightControl="."
            >
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>

          <div>
            <div>
              <h2 className="font-bold text-white text-lg text-start mb-3 ml-3">
                Blockbuster
              </h2>
            </div>
            <Carousel
              className="left-middle w-80 h-80"
              indicators={false}
              leftControl="."
              rightControl="."
            >
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>

          <div>
            <div>
              <h2 className="font-bold text-white text-lg text-start mb-3 ml-3">
                Popular
              </h2>
            </div>

            <Carousel
              className="left-middle w-80 h-80"
              indicators={false}
              leftControl="."
              rightControl="."
            >
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>
        </div>

        <div className="right-middle">
          <div className="spotlight">
            <h2 className="text-white mr-20 font-bold text-xl bg-yellow-300 px-6 p-2 rounded-md">
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
                    </h2>,
                    <p className="text-white">{celebrities.known_for_department}</p>
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
