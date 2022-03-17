import React from "react";

function CheckBox({ checked, setChecked }) {
  return (
    <div
      style={{
        width: 16,
        height: 16,
        backgroundColor: checked ? "rgb(255, 208, 38)" : "",
        border: checked ? "1px solid rgb(255, 208, 38)" : "1px solid rgba(255,255,255,0.25)",
        borderRadius: 2,
        cursor: "pointer",
      }}
      onClick={() => setChecked(!checked)}
    ></div>
  );
}

export default CheckBox;
