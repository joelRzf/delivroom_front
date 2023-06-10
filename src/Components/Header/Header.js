import React from "react";
import "./Header.css";

const Header = (props) => {
  const { restoName, description, picture } = props;

  return (
    <div className="Header">
      <div className="HeaderInside">
        <div>
          <h1>{restoName}</h1>
          <p>{description}</p>
        </div>
        <div className="restoLogo hide">
          <img src={picture} alt="resto-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
