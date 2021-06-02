import React from "react";
import "./RightCart.css";
import Hadid from "../../../../images/hb.jpg";
const RightCart = () => {
  return (
    <div className="d-flex mb-2">
      <img
        style={{
          height: "50px",
          width: "55px",
          borderRadius: "50%",
        }}
        src={Hadid}
        alt=""
      />
      <div className="d-flex">
        <div>
          <h5 className=" ml-2">
            <strong>Marker</strong>
          </h5>
          <small className="mb-0 text-muted">
            <strong>
              Apple’s interview questions database Lorem ipsum dolor sit amet.
            </strong>
          </small>
        </div>
        <div className=" d-flex align-items-center">
          <button className="side-btn">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default RightCart;
