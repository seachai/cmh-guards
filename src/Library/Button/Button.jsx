import React from "react";

const Button = ({ text, styleLeft }) => {
  return (
    <div className="button">
      <a href="/" style={{ marginLeft: styleLeft ? "auto" : null }}>
        {text}
      </a>
    </div>
  );
};

export default Button;
