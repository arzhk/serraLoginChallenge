import React, { useState, useEffect } from "react";
import Checkbox from "../atoms/CheckBox";

function CheckBoxBlock({ text, updateChecked }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    updateChecked(checked);
  }, [checked]);

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "16px 0px 24px 10px" }}>
      <Checkbox checked={checked} setChecked={setChecked} />
      <p onClick={() => setChecked(!checked)} style={{ marginLeft: 12, cursor: "pointer" }}>
        {text}
      </p>
    </div>
  );
}

export default CheckBoxBlock;
