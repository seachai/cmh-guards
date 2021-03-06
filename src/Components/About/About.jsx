import React from "react";
import Fade from "react-reveal/Fade";

import QuoteButton from "../../Library/Button/Button";

import MachineGuard from "../../Video/Machine-Guard.mp4";

const About = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row">
          <Fade left distance={"30%"}>
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
                  <li>
                    <i className="fas fa-hand-point-right"></i>
                    <span>Offsets</span>
                  </li>
                  <li>
                    <i className="fas fa-hand-point-right"></i>
                    <span>Multi-shaft</span>
                  </li>
                  <li>
                    <i className="fas fa-hand-point-right"></i>
                    <span>Sectional</span>
                  </li>
                  <p>and more...</p>
                </ul>
              </div>
              <QuoteButton text={"More About Us"} />
            </div>
          </Fade>
          <Fade right distance={"30%"}>
            <div className="col-xl-6">
              <div className="about-us--video">
                <video autoPlay muted loop>
                  <source src={MachineGuard} type="video/mp4" />
                </video>
                <h4>Showcase - Oil Chain Guard</h4>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
