import React from "react";
import Swal from "sweetalert2";

const OrderConfirmation = e => {
  e.preventDefault();
  Swal.fire({
    icon: "success",
    title: "We will contact you soon.",
    text: "Thank you"
  });
};

const Button = ({ text, styleLeft, order, submit }) => {
  return (
    <div className="button">
      {order || submit ? (
        <button
          style={{ marginLeft: styleLeft ? "auto" : null }}
          onClick={OrderConfirmation}
        >
          {text}
        </button>
      ) : (
        <a href="/" style={{ marginLeft: styleLeft ? "auto" : null }}>
          {text}
        </a>
      )}
    </div>
  );
};

export default Button;
