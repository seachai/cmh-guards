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
              <div className="reviews--card_container">
                <div className="reviews--card_image">
                  <img src="https://i.pravatar.cc/100" alt="Random user" />
                </div>
                <div className="reviews--card_details">
                  <div className="reviews--card_title">
                    <h2>Bruce S.</h2>
                    <h4>Production Manager, Acme Mining</h4>
                  </div>
                  <div className="reviews--card_body">
                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut sit amet, consectetuer.”
                  </div>
                  <div className="reviews--card_rating">⭐️⭐️⭐️⭐️⭐️</div>
                </div>
              </div>
            </div>
            <div className="reviews--card">
              <div className="reviews--card_container">
                <div className="reviews--card_image">
                  <img src="https://i.pravatar.cc/100" alt="Random user" />
                </div>
                <div className="reviews--card_details">
                  <div className="reviews--card_title">
                    <h2>Bruce S.</h2>
                    <h4>Production Manager, Acme Mining</h4>
                  </div>
                  <div className="reviews--card_body">
                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut sit amet, consectetuer.”
                  </div>
                  <div className="reviews--card_rating">⭐️⭐️⭐️⭐️⭐️</div>
                </div>
              </div>
            </div>
            <div className="reviews--card">
              <div className="reviews--card_container">
                <div className="reviews--card_image">
                  <img src="https://i.pravatar.cc/100" alt="Random user" />
                </div>
                <div className="reviews--card_details">
                  <div className="reviews--card_title">
                    <h2>Bruce S.</h2>
                    <h4>Production Manager, Acme Mining</h4>
                  </div>
                  <div className="reviews--card_body">
                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut sit amet, consectetuer.”
                  </div>
                  <div className="reviews--card_rating">⭐️⭐️⭐️⭐️⭐️</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
