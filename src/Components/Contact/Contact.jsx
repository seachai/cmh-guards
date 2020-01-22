import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="contact--title">
              <h2>Contact Information</h2>
            </div>
            {/* <div className="contact--body">
              <p>
                CMH Guards, a division of Co-Lin Metals Fabricating, Inc.,
                created a specialty a welding division to fulfill the needs of
                manufacturers and industry to safeguard their employees and
                operation out in the field.
              </p>
            </div> */}
            <div className="contact--list">
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Northwest of Chicago, Illinois,</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>orders@cmh.com</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>800-555-1234</span>
                </li>
                <li>
                  <i className="fas fa-fax"></i>
                  <span>800-555-5678</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="contact--title">
              <h2>Get In Touch With Us!</h2>
              <h4>
                We Serve Companys Coast to Coast and Throughout North America
              </h4>
            </div>
            <div className="contact--form">
              <div className="container">
                <div className="row">
                  <form>
                    <div className="col-md-4 col-md-12">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name *"
                        className="field"
                      />
                    </div>

                    <div className="col-md-4 col-md-12">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email *"
                        className="field"
                      />
                    </div>

                    <div className="col-md-4 col-md-12">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject *"
                        className="field"
                      />
                    </div>
                  </form>
                </div>

                <div className="row">
                  <form>
                    <div className="col-lg-12">
                      <input
                        component="textarea"
                        name="textarea"
                        id="textarea"
                        cols="120"
                        rows="10"
                        placeholder="Please enter all inquiries here"
                      />
                    </div>
                  </form>
                </div>

                <div className="row">
                  <form>
                    <div className="col-lg-12">
                      <div className="center-button">
                        <button className="button" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
