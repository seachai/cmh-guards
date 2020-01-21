import React from "react";
import Slider from "react-slick";

const Arrow = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`reviews--carousel--arrow_overlay ${direction}`}
    >
      <i className={`fas fa-chevron-${direction}`}></i>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  swipeToSlide: true,
  className: "reviews--carousel col-xl-12",
  dotsClass: "slick-dots container",
  nextArrow: <Arrow direction={"right"} />,
  prevArrow: <Arrow direction={"left"} />
};

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="row">
          <div className="reviews--heading col-xl-12">
            <div className="reviews--heading_title">
              <h5>Testimonials</h5>
              <h2>What our customers have to say</h2>
            </div>
          </div>
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
                    <p>
                      “Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut sit amet, consectetuer.”
                    </p>
                  </div>
                  <div className="reviews--card_rating">
                    <span role="img" aria-label="5 star rating">
                      ⭐️⭐️⭐️⭐️⭐️
                    </span>
                  </div>
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
                    <p>
                      “Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut sit amet, consectetuer.”
                    </p>
                  </div>
                  <div className="reviews--card_rating">
                    <span role="img" aria-label="5 star rating">
                      ⭐️⭐️⭐️⭐️⭐️
                    </span>
                  </div>
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
                    <p>
                      “Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut sit amet, consectetuer.”
                    </p>
                  </div>
                  <div className="reviews--card_rating">
                    <span role="img" aria-label="5 star rating">
                      ⭐️⭐️⭐️⭐️⭐️
                    </span>
                  </div>
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
