import { ThreeDots } from "react-loader-spinner";
import "./loader.css";

import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#29CCBC"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <p>En cours de chargement...</p>
    </div>
  );
};

export default LoaderSpinner;
