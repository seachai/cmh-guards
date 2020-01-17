import React from "react";
import Slider from "react-slick";

// Carousel Images
import GiantMiningSaw from "../../Images/Carousel/giant-mining-saw.jpg";
import MiningGarage from "../../Images/Carousel/mining-garage.jpg";
import MiningSawDistantView from "../../Images/Carousel/mining-saw-distant-view.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Carousel = () => {
  return (
    <Slider {...settings}>
      <div>
        <h3>Hello World</h3>
      </div>
      <div>
        <h3>Hello World</h3>
      </div>
      <div>
        <h3>Hello World</h3>
      </div>
      <div>
        <h3>Hello World</h3>
      </div>
      <div>
        <h3>Hello World</h3>
      </div>
      <div>
        <h3>Hello World</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
