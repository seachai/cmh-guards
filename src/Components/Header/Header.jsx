import React, { useState } from "react";
import { Animated } from "react-animated-css";

import Logo from "../../Images/Logo/CMH-Guards-Logos.jpg";

const Products = ({ dropDown, setDropDown }) => {
  return (
    <Animated animationIn="fadeIn" animationInDuration={400}>
      <ul className={`navigation--bar_submenu ${dropDown ? "show" : null}`}>
        <li>
          <a href="/">Product 1</a>
        </li>
        <li>
          <a href="/">Product 2</a>
        </li>
        <li>
          <a href="/">Product 3</a>
        </li>
        <li>
          <a href="/">Product 4</a>
        </li>
      </ul>
    </Animated>
  );
};

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
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
              <a href="/" onMouseEnter={() => setDropDown(true)}>
                Products
              </a>
              {dropDown && (
                <Products dropDown={dropDown} setDropDown={setDropDown} />
              )}
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
