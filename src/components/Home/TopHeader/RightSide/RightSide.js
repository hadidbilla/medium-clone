import React from "react";
import Medium from "../../../../images/medium.png";
import Twitter from "../../../../images/twitter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./RightSide.css";
const RightSide = () => {
  return (
    <div className="col-md-3 ml-3">
      <div className="top-icon ">
        <div className="d-flex justify-content-center align-items-center">
          <img style={{ width: "75px", height: "50px" }} src={Medium} alt="" />
          <FontAwesomeIcon icon={faPlus} />
          <img
            style={{ width: "40px", height: "30px", marginLeft: "10px" }}
            src={Twitter}
            alt=""
          />
        </div>
        <p className="text-center mt-3">
          Discover Medium writers you already follow on Twitter.
        </p>
        <div className="d-flex justify-content-center">
          <button className="main-button mt-3" type="submit">
            <img src="" alt="" />
            <img
              style={{ width: "35px", height: "20px", marginRight: "5px" }}
              src={Twitter}
              alt=""
            />
            Connect to Twitter
          </button>
        </div>
        <p
          className="text-center mt-3 mb-4"
          style={{ textDecoration: "underline" }}
        >
          Maybe Later
        </p>
      </div>
      <div>
        <p className="mt-2">TOPICS TO FOLLOW</p>
        <div className="d-flex justify-content-between pb-3 mb-3 follow-card">
          <h5>Coronavirus</h5>
          <button className="follow-btn">Follow</button>
        </div>
        <div className="d-flex justify-content-between pb-3 mb-3 follow-card">
          <h5>Software</h5>
          <button className="follow-btn">Follow</button>
        </div>
        <div className="d-flex justify-content-between pb-3 mb-3 follow-card">
          <h5>Lifestyle</h5>
          <button className="follow-btn">Follow</button>
        </div>
        <p style={{ color: "#1a8917" }}>See More</p>
      </div>
    </div>
  );
};

export default RightSide;
