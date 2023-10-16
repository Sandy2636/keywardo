import React from "react";
import "../Styles/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="logoHolder">
        <h4>APP LOGO</h4>
      </div>
      <div className="optionHolder">
        <Link to={"/"}>
          <span>DASHBOARD</span>
        </Link>
        <Link to={"/create-ad"}>
          <span>CREATE ADS</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
