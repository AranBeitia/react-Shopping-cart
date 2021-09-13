import React from "react";

function Button({ submitButton, children, ...props }) {
  return (
    <button
      {...props}
      className="btn btn-primary"
      type={submitButton ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

export default Button;
