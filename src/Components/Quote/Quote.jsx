import React from "react";
import Fade from "react-reveal/Fade";

import QuoteButton from "../../Library/Button/Button";

const Quote = ({ subtitle, title, button }) => {
  return (
    <section className="quote">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="quote--container">
              <Fade>
                <div className="quote--body">
                  <h5>{subtitle}</h5>
                  <h2>{title}</h2>
                  {button ? <QuoteButton text={"Get Started"} /> : null}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
