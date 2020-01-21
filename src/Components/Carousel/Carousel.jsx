import React from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

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
        <div className="carousel--details">
          <div className="container">
            <div className="carousel--details_inner col-xl-6">
              <Fade top>
                <h1 className="carousel--details_title">
                  No Job Too Small or Too Complicated
                </h1>
              </Fade>
              <Fade bottom>
                <p className="carousel--details_body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis officia velit quisquam quo? Aperiam, consequatur
                  iste? Illo cumque at accusamus!
                </p>
                <QuoteButton text={"Learn More"} />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel--images second">
        <div className="carousel--details">
          <div className="container">
            <div
              className="carousel--details_inner col-xl-6 col-xl-offset-3"
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <Fade top>
                <h1 className="carousel--details_title">Hello World</h1>
              </Fade>
              <Fade bottom>
                <p className="carousel--details_body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis officia velit quisquam quo? Aperiam, consequatur
                  iste? Illo cumque at accusamus!
                </p>
                <QuoteButton text={"View Projects"} />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel--images third">
        <div className="carousel--details" style={{ alignItems: "flex-end" }}>
          <div className="container">
            <div
              className="carousel--details_inner col-xl-6"
              style={{ textAlign: "right" }}
            >
              <Fade top>
                <h1 className="carousel--details_title">Hello World</h1>
              </Fade>
              <Fade bottom>
                <p className="carousel--details_body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis officia velit quisquam quo? Aperiam, consequatur
                  iste? Illo cumque at accusamus!
                </p>
                <QuoteButton text={"Our Mission"} />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
