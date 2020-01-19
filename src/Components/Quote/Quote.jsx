import React from "react";

import QuoteButton from "../../Library/Button/Button";

const Quote = () => {
  return (
    <section className="quote">
      <div className="container">
        <div className="col-xl-12">
          <div className="quote--container">
            <div className="quote--title">
              <h5>Configure your Oil-tight Chain Guard</h5>
              <h2>Request for Quote</h2>
            </div>
            <QuoteButton text={"Get Started"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
