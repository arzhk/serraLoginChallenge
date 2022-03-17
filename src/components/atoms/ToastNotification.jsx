import React from "react";

function ToastNotification({ type, text }) {
  const isSuccess = type === "success";
  return (
    <div
      className="toast-notification"
      style={{
        borderLeft: isSuccess ? "2px solid #9eeb60" : "2px solid #eb6060",
        color: isSuccess ? "#9eeb60" : "#eb6060",
      }}
    >
      {text}
    </div>
  );
}

export default ToastNotification;
