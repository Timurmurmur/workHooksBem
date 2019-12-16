import React from "react";
import "./Modal.css";

export const Modal: React.FC = ({ children }) => {
  return (
    <div className="container_comp_modal container">
      <div className="wrapper wrapper_comp_modal">{children}</div>
    </div>
  );
};
