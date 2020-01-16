import React from "react";

import Logo from "../../Images/Logo/logosvgcom.png";

const Header = () => {
  return (
    <header>
      <nav className="navigation--bar container">
        <div className="navigation--bar_logo">
          <a href="/">
            <img src={Logo} alt="CMH Guards Logo" />
          </a>
        </div>
        <div className="navigation--bar_links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Company</a>
            </li>
            <li>
              <a href="/">Products</a>
              <ul className="navigation--bar_submenu">
                <li>
                  <a href="/">Product 1</a>
                </li>
                <li>
                  <a href="/">Product 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navigation--bar_quote-button">
          <a href="/">Request Quote</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
