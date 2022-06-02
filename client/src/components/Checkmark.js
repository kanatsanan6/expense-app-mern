import React from "react";
import greenCorrect from "../images/green_correct.png";
import grayCorrect from "../images/gray_correct.png";

export function Checkmark({ size, status }) {
  const style_checkbox = { width: size, height: size };

  return (
    <div className="w-5 animate-checkbox" style={style_checkbox}>
      <img src={status ? greenCorrect : grayCorrect} alt="" />
    </div>
  );
}
