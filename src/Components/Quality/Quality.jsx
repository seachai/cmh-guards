import React from "react";

import OilChainGaurd from "../../Images/Product/20190624_GBX_0356.jpg";

const Quality = () => {
  return (
    <section className="quality">
      <div className="col-xl-6">
        <div className="quality--photo">
          {/* <img src={OilChainGaurd} alt="Mining and showcasing CMH guards" /> */}
        </div>
      </div>
      <div className="container">
        <div className="col-xl-6">
          <div className="quality--title">
            <h5>Oil-tight Chain Guards</h5>
            <h2>Quality you can count on</h2>
          </div>
          <div className="quality--list">
            <ul>
              <li>
                <i className="fas fa-hand-point-right"></i>
                <div className="quality--list_content">
                  <h2>Title</h2>
                  <p>
                    Adequate lubrication is essential to maximize the life of
                    roller chains, sprockets and gears.
                  </p>
                </div>
              </li>
              <li>
                <i className="fas fa-hand-point-right"></i>
                <span>
                  Whether indoor or outdoor applications, our guards and casings
                  are designed to prevent oil loss and the intrusion of dust and
                  water.
                </span>
              </li>
              <li>
                <i className="fas fa-hand-point-right"></i>
                <span>
                  All of our chain casings are formed using fully welded
                  construction. Guards can be affixed or freestanding.
                </span>
              </li>
              <li>
                <i className="fas fa-hand-point-right"></i>
                <span>
                  Offsets, sectional and multi-shaft configurations are just a
                  few of the options that we offer in stainless or mild steel.
                </span>
              </li>
              <li>
                <i className="fas fa-hand-point-right"></i>
                <span>
                  Each chain guard is analyzed to ensure proper specifications
                  and deliver the superior build quality associated with the CMH
                  Guards name.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
