import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselPage = () => {
  return (
    <Carousel>
      <div className="w-10 border-2 border-orange-500">
        <img className="w-50" src="asstes/images/card1.png" alt="" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="asstes/images/card1.png" alt="" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="asstes/images/card1.png" alt="" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
export default CarouselPage;
