import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import s1 from '../../../assets/images/slider/s1.png'
import s2 from '../../../assets/images/slider/s2.png'
const Banner = () => {
  return (
    <div>
      <Carousel className="text-center">
        <div>
          <img src={s1}/>
        </div>
        <div>
          <img src={s2} />
        </div>
        <div>
          <img src={s1}/>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
