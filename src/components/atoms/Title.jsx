import React from "react";

function Title({ text }) {
  return (
    <h1 className="title" style={{ padding: 30 }}>
      {text}
    </h1>
  );
}

export default Title;
