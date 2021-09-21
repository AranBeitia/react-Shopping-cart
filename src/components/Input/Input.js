import React from "react";

function Input({
  type = "text",
  label = "input-01",
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  errorMessage,
  ...props
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={errorMessage ? "form-control is-invalid" : "form-control"}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {errorMessage && <p className="invalid-feedback">{errorMessage}</p>}
    </div>
  );
}

export default Input;
