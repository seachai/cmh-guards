import React, { useState } from "react";

import Logo from "../../Images/Logo/CMH-Guards-Logos.jpg";
import QuoteButton from "../../Library/Button/Button";

const Products = ({ dropDown, setDropDown }) => {
  return (
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
              <a href="/">Products</a>
              {dropDown && (
                <Products dropDown={dropDown} setDropDown={setDropDown} />
              )}
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <QuoteButton text={"Request Quote"} order />
      </nav>
    </header>
  );
};

export default Header;
