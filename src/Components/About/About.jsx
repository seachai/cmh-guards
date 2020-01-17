import React from "react";

import QuoteButton from "../../Library/Button/Button";

const About = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-us--title">
              <h5>Oil-tight Chain Guards</h5>
              <h2>Why CMH Guards?</h2>
            </div>
            <div className="about-us--body">
              <p>
                CMH Guards, a division of Co-Lin Metals Fabricating, Inc.,
                created a specialty a welding division to fulfill the needs of
                manufacturers and industry to safeguard their employees and
                operation out in the field.
              </p>
            </div>
            <div className="about-us--list">
              <ul>
                <li>Offsets</li>
                <li>Multi-shaft</li>
                <li>Sectional</li>
                <p>and more...</p>
              </ul>
            </div>
            <QuoteButton text={"Request Quote"} />
          </div>
          <div className="col-xl-6">
            <div className="about-us--photo">Photo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
