import React from "react";

const Input = ({ type = "text", placeholder, label, setValue, value }) => {
  return (
    <div className="form-input">
      <label htmlFor="Email">{label}</label>
      <div className="input">
        <input
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default Input;
