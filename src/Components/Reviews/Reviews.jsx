import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  // autoplay: true,
  // autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  swipeToSlide: true,
  className: "reviews--carousel"
};

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="row">
          <Slider {...settings}>
            <div className="reviews--card">
              <div className="reviews--card_title">
                <h2>Mr Robinson</h2>
              </div>
              <div className="reviews--card_body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis, porro!
              </div>
              <div className="reviews--card_rating">Amazing!</div>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
