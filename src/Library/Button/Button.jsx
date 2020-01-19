import React from "react";

const Button = ({ text }) => {
  return (
    <div className="button">
      <a href="/">{text}</a>
    </div>
  );
};

export default Button;
