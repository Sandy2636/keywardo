import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/HomeLayout.scss";

function HomeLayout({ child }) {
  return (
    <div className="homeLayout">
      <Navbar />
      <div className="childHolder">{child}</div>
    </div>
  );
}

export default HomeLayout;
