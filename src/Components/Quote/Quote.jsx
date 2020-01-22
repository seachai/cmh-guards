import React from "react";

import QuoteButton from "../../Library/Button/Button";

const Quote = ({ subtitle, title, button }) => {
  return (
    <section className="quote">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="quote--container">
              <div className="quote--title">
                <h5>{subtitle}</h5>
                <h2>{title}</h2>
              </div>
              { button ? <QuoteButton text={"Get Started"} /> : null }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
