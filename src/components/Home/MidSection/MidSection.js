import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Trend from "../../../images/trend.png";
import MidSectionCard from "./MidSectionCard/MidSectionCard";
const MidSection = () => {
  return (
    <div className="container pt-5">
      <h6 className="mb-3">
        <img
          style={{ width: "30px", height: "25px", marginRight: "10px" }}
          src={Trend}
          alt=""
        />
        TRENDING ON MEDIUM
      </h6>
      <div className="row">
        <div className="col-md-4">
          <MidSectionCard />
          <MidSectionCard />
        </div>
        <div className="col-md-4">
          <MidSectionCard />
          <MidSectionCard />
        </div>
        <div className="col-md-4">
          <MidSectionCard />
          <MidSectionCard />
        </div>
      </div>
    </div>
  );
};

export default MidSection;
