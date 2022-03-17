import React from "react";

function PrimaryButton({ text, type, disabled }) {
  return (
    <div className={`btn-wrap ${disabled ? "btn-disabled" : "btn-active"}`} style={{ position: "relative" }}>
      <span className="btn-label">{text}</span>
      <button
        type={type}
        className="primary-btn"
        disabled={disabled}
        style={{ cursor: disabled ? "" : "pointer" }}
      ></button>
    </div>
  );
}

export default PrimaryButton;
