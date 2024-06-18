import React from "react";
import { Carousel } from "flowbite-react";

function BannerSlider() {
  return (
    <div className="carousel" >
      <Carousel slideInterval={3000} indicators={false} leftControl="<" rightControl=">" className="text-white font-bold text-xl">
        <img
          src="https://4kwallpapers.com/images/wallpapers/fast-x-2023-movies-8k-5k-1920x1080-11504.jpg"
          alt="..."
        />
        <img
          src="https://wallpapercave.com/wp/wp12400936.jpg"
          alt="..."
        />
        <img
          src="https://wallpapercave.com/wp/wp12628340.jpg"
          alt="..."
        />
        <img
          src="https://wallpapercave.com/wp/wp12628358.jpg"
          alt="..."
        />
        <img
          src="https://wallpapercave.com/wp/wp12628339.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );

}

export default BannerSlider;
