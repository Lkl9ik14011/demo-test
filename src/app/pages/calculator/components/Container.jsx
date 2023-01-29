import React from "react";
import "./Container.css";

const Container = ({ children }) => {
  return (
    <div className="root">
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
