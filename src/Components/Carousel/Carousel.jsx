import React from "react";
import Slider from "react-slick";

const Arrow = ({ direction, onClick }) => {
  return (
    <div onClick={onClick} className={`carousel--arrow_overlay ${direction}`}>
      <i className={`fas fa-chevron-${direction}`}></i>
    </div>
  );
};

const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  arrows: true,
  fade: true,
  // autoplay: true,
  // autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  className: "carousel",
  nextArrow: <Arrow direction={"right"} />,
  prevArrow: <Arrow direction={"left"} />
};

const Carousel = () => {
  return (
    <Slider {...settings}>
      <div className="carousel--images first">
        <div className="carousel--details container">
          <div className="carousel--details_inner">
            <h1 className="carousel--details_title">Hello World</h1>
            <p className="carousel--details_body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              eius?
            </p>
          </div>
        </div>
      </div>
      <div className="carousel--images second">
        <div className="carousel--details container">
          <div className="carousel--details_inner">
            <h1 className="carousel--details_title">Hello World</h1>
            <p className="carousel--details_body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              eius?
            </p>
          </div>
        </div>
      </div>
      <div className="carousel--images third">
        <div className="carousel--details container">
          <div className="carousel--details_inner">
            <h1 className="carousel--details_title">Hello World</h1>
            <p className="carousel--details_body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              eius?
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
