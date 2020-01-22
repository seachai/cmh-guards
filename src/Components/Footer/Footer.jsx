import React from "react";

import Logo from "../../Images/Logo/CMH-Guards-Logos.jpg";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="footer--top">
              <div className="col-xl-4">
                <div className="footer--logo">
                  <img src={Logo} alt="CMH Guard logo" />
                </div>
                <div className="footer--body">
                  <p>
                    CMH Guards, a division of Co-Lin Metals Fabricating, Inc.,
                    created a specialty a welding division to fulfill the needs
                    of manufacturers and industry to safeguard their employees
                    and operation out in the field.
                  </p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="footer--links">
                  <h2>Our Links</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Company</a>
                    </li>
                    <li>
                      <a href="/">Products</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="footer--contact">
                  <h2>Contact Us</h2>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Northwest of Chicago, Illinois,</span>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:orders@cmh.com" target="_top">
                        orders@cmh.com
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel:800-555-1234">800-555-1234</a>
                    </li>
                    <li>
                      <i className="fas fa-fax"></i>
                      <a href="tel:800-555-5678">800-555-5678</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="footer--bottom">
                <div className="footer--copyright">
                  © Copyright 2020 Chai Lee - All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
