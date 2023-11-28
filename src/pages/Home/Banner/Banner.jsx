import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel className="text-center">
        <div>
          <img src="https://i.ibb.co/19rwYPt/image.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/J29ndJg/image.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/1G2RVjh/image.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
