import React from "react";
import { Carousel } from "flowbite-react";

function BannerSlider() {
  return (
    <div className="h-80 sm:h-64 xl:h-80 2xl:h-96 mt-24">
          <Carousel>
            <img
              src="https://www.sacnilk.com/image/bunnyimagenews.php?newsid=1000019234"
              alt="..."
            />
            <img
              src="https://images.moviesanywhere.com/5769ad1dc28cdb75dcd29f77bd5d845b/b4fc0f77-0926-4658-b08b-76cfc944c1d1.webp?h=375&resize=fit&w=250"
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
  );
}

export default BannerSlider;
