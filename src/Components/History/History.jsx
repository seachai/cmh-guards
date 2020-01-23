import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Fade from "react-reveal/Fade";

import HandCut from "../../Images/Product/20190624_GBX_0257.jpg";
import LaserCut from "../../Images/Product/20190624_GBX_0245.jpg";

const History = () => {
  const [modal, setModal] = useState({
    toggler: false,
    slide: 0,
    key: 0
  });
  return (
    <section className="history">
      <div className="container">
        <div className="row">
          <Fade top distance={"30%"}>
            <div className="history--container col-xl-12">
              <div className="history--title">
                <h5>CMH Guards</h5>
                <h2>No job too small or too complicated</h2>
              </div>
              <div className="history--body">
                <p>
                  We are supported by a team of metal fabricators who have a
                  combined 150+ years of experience in custom parts and
                  weldments. Our mission includes accurate, timely production
                  and cost efficient fabricating of your custom oil-tight chain
                  guard, resulting in a high quality manufactured part that your
                  operation can rely on for years to come.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="row">
          <Fade delay={1000}>
            <div className="history--photo">
              <FsLightbox
                toggler={modal.toggler}
                slide={modal.slide}
                sources={[HandCut, LaserCut]}
                key={modal.slide}
              />
              <div className="history--photo_image-card col-xl-6">
                <img src={HandCut} alt="Precision laser cutting metal" />
                <div
                  className="history--photo_overlay"
                  onClick={() =>
                    setModal({
                      toggler: !modal.toggler,
                      slide: 1
                    })
                  }
                >
                  <i className="fas fa-expand"></i>
                </div>
              </div>
              <div className="history--photo_image-card col-xl-6">
                <img src={LaserCut} alt="Precision laser cutting metal" />
                <div
                  className="history--photo_overlay"
                  onClick={() =>
                    setModal({
                      toggler: !modal.toggler,
                      slide: 2
                    })
                  }
                >
                  <i className="fas fa-expand"></i>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default History;
