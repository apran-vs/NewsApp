import React, { Component } from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      {/* <img src={loading} alt="loading" /> */}
      <div className="spinner-border my-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
