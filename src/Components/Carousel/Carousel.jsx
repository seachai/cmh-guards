import React from "react";
import Slider from "react-slick";

// Carousel Images
import GiantMiningSaw from "../../Images/Carousel/giant-mining-saw.jpg";
import MiningGarage from "../../Images/Carousel/mining-garage.jpg";
import MiningSawDistantView from "../../Images/Carousel/mining-saw-distant-view.jpg";

const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  className: "carousel"
};

const Carousel = () => {
  return (
    <Slider {...settings}>
      <div className="carousel--images">
        <img src={GiantMiningSaw} alt="Giant mining saw" />
      </div>

      <div className="carousel--images">
        <img src={MiningGarage} alt="Mining garage" />
      </div>

      <div className="carousel--images">
        <img src={MiningSawDistantView} alt="Giang mining saw in the distant" />
      </div>
    </Slider>
  );
};

export default Carousel;
