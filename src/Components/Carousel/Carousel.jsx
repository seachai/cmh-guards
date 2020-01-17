import React from "react";
import Slider from "react-slick";

import QuoteButton from "../../Library/Button/Button";

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
          <div className="carousel--details_inner col-xl-6">
            <h1 className="carousel--details_title">
              We Engineer Amazing Things
            </h1>
            <p className="carousel--details_body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis officia velit quisquam quo? Aperiam, consequatur
              iste? Illo cumque at accusamus!
            </p>
            <QuoteButton text={"Learn More"} />
          </div>
        </div>
      </div>
      <div className="carousel--images second">
        <div
          className="carousel--details container"
          style={{ alignItems: "center" }}
        >
          <div
            className="carousel--details_inner col-xl-6"
            style={{ textAlign: "center" }}
          >
            <h1 className="carousel--details_title">Hello World</h1>
            <p className="carousel--details_body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis officia velit quisquam quo? Aperiam, consequatur
              iste? Illo cumque at accusamus!
            </p>
            <QuoteButton text={"View Projects"} />
          </div>
        </div>
      </div>
      <div className="carousel--images third">
        <div
          className="carousel--details container"
          style={{ alignItems: "flex-end" }}
        >
          <div
            className="carousel--details_inner col-xl-6"
            style={{ textAlign: "right" }}
          >
            <h1 className="carousel--details_title">Hello World</h1>
            <p className="carousel--details_body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis officia velit quisquam quo? Aperiam, consequatur
              iste? Illo cumque at accusamus!
            </p>
            <QuoteButton text={"Our Mission"} />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
