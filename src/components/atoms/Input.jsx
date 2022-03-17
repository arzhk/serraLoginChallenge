import React from "react";

function Input({ name, placeholder, icon, type, value, onChange, required }) {
  return (
    <div className="input-wrap">
      <img src={icon} width={16} height={16} alt="input-icon" />
      <input
        name={name}
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default Input;
