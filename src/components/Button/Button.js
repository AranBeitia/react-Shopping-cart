import React from "react";

function Button({ submitButton, disabled = false, children, ...props }) {
  return (
    <button
      {...props}
      className="btn btn-primary"
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
