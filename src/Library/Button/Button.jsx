import React from "react";
import Swal from "sweetalert2";

const OrderConfirmation = () => {
  Swal.fire({
    icon: "success",
    title: "Order Received",
    text: "Thank you"
  });
};

const Button = ({ text, styleLeft, order }) => {
  return (
    <div className="button">
      {order ? (
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
