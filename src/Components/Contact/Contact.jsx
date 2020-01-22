import React from "react";

import QuoteButton from "../../Library/Button/Button";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="contact--container">
            <div className="col-xl-6">
              <div className="contact--title">
                <h2>Contact Information</h2>
              </div>
              <div className="contact--list">
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

            <div className="col-xl-6">
              <div className="contact--title">
                <h2>Get In Touch With Us!</h2>
                <h4>
                  We Serve Companys Coast to Coast and Throughout North America
                </h4>
              </div>
              <div className="contact--form">
                <form>
                  <div className="row">
                    <div className="col-xl-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="field"
                        required
                      />
                    </div>

                    <div className="col-xl-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="field"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <textarea
                        name="textarea"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        className="text-area"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <QuoteButton
                        className="contact--form_button"
                        type="submit"
                        text={"Submit"}
                        submit
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
