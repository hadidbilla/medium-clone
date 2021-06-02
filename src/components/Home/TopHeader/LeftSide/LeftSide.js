import React from "react";
import HeaderImage from "../../../../images/headerimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const LeftSide = () => {
  return (
    <div className="col-md-4">
      <img style={{ width: "376px" }} src={HeaderImage} alt="" />
      <div className="d-flex">
        <img
          style={{
            height: "24px",
            width: "24px",
            marginTop: "7px",
            borderRadius: "5px",
            marginRight: "10px",
          }}
          src="https://i.ibb.co/b14CwSK/michael-mcauliffe-Qnfe-PA4j-IQ-unsplash.jpg"
          alt=""
        />
        <div>
          <small style={{ marginBottom: "0px", display: "block" }}>
            <strong>Tessa Schlesinger</strong>
          </small>
          <small>
            <span>in </span>
            <strong className="text-justify">
              World Issues — Politics, Economics, and More
            </strong>
          </small>
          <h3
            style={{
              wordSpacing: "0px",
              fontSize: "20px",
              fontWeight: "bold",
              lineHeight: "20px",
            }}
          >
            I am a Second Generation Holocaust Survivor. Let me Tell You About
            Israel
          </h3>
          <div className="mb-5">
            <small style={{ color: "#757575" }}>
              Read More · 9 min read
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
