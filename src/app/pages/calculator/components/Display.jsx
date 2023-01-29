import React, { useState } from "react";
import "./Display.css";

const Display = ({ value = 0 }) => {
  return (
    <div>
      <input className="display" max={70} value={value} readOnly />
    </div>
  );
};

export default Display;
