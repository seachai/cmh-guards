import React from "react";
import Fade from "react-reveal/Fade";

const Quality = () => {
  return (
    <section className="quality">
      <div className="quality--background_overlay"></div>
      <div className="container">
        <div className="row">
          <div className="quality--right_side col-xl-6 col-xl-offset-6">
            <Fade right cascade distance={"30%"}>
              <div className="quality--title">
                <h5>Manufacture High Quality Products</h5>
                <h2>Quality you can count on</h2>
              </div>
              <div className="quality--list">
                <div className="quality--list_content">
                  <i className="far fa-check-circle"></i>
                  <div className="quality--list_details">
                    <p>
                      Adequate lubrication is essential to maximize the life of
                      roller chains, sprockets and gears.
                    </p>
                  </div>
                </div>
                <div className="quality--list_content">
                  <i className="far fa-check-circle"></i>
                  <div className="quality--list_details">
                    <p>
                      Whether indoor or outdoor applications, our guards and
                      casings are designed to prevent oil loss and the intrusion
                      of dust and water.
                    </p>
                  </div>
                </div>
                <div className="quality--list_content">
                  <i className="far fa-check-circle"></i>
                  <div className="quality--list_details">
                    <p>
                      All of our chain casings are formed using fully welded
                      construction. Guards can be affixed or freestanding.
                    </p>
                  </div>
                </div>
                <div className="quality--list_content">
                  <i className="far fa-check-circle"></i>
                  <div className="quality--list_details">
                    <p>
                      Offsets, sectional and multi-shaft configurations are just
                      a few of the options that we offer in stainless or mild
                      steel.
                    </p>
                  </div>
                </div>
                <div className="quality--list_content">
                  <i className="far fa-check-circle"></i>
                  <div className="quality--list_details">
                    <p>
                      Each chain guard is analyzed to ensure proper
                      specifications and deliver the superior build quality
                      associated with the CMH Guards name.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
