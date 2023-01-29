import React from "react";
import { Route as ReactRoute } from "react-router-dom";
const Route = ({ render, ...props }) => {
  return (
    <>
      <ReactRoute
        {...props}
        render={(matchProps) => {
          return <>{render(matchProps)}</>;
        }}
      />
    </>
  );
};

export default Route;
