import React, { useState } from "react";
import "../Styles/CreateAd.scss";
import AdFirst from "../Assets/AdFirst.png";
import AdSecond from "../Assets/AdSecond.png";
import { useNavigate } from "react-router-dom";
function CreateAd() {
  const navigate = useNavigate();
  const [adCategorySelected, setAdCategorySelected] = useState({
    Text: false,
    Media: false,
  });
  const AdCategory = ({ img, type }) => {
    return (
      <div
        className="adContainer"
        onClick={() => {
          setAdCategorySelected((prev) => ({ ...prev, [type]: !prev[type] }));
        }}
      >
        <div className="adHeader">
          <input
            className="input"
            type="checkbox"
            checked={adCategorySelected[type]}
          />
        </div>
        <div className="adBody">
          <img src={img} />
        </div>
        <div className="adFooter">
          <small>Create</small>
          <br />
          <h5>{type} Ad</h5>
        </div>
      </div>
    );
  };
  return (
    <div className="creatAdContainer">
      <h2>Creat Ads</h2>
      <div className="itemHolder">
        <AdCategory img={AdFirst} type={"Text"} />
        <AdCategory img={AdSecond} type={"Media"} />
      </div>
      <div className="actionBtn">
        <button
          onClick={() => {
            if (!adCategorySelected.Text && !adCategorySelected.Media) {
              alert("Please select atleast one ad Category!");
              return;
            }
            navigate("/create-form");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CreateAd;
