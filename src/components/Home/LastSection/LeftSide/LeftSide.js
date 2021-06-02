import React from "react";
import Hadid from "../../../../images/hb.jpg";
import SideImg from "../../../../images/left.jpeg";
const LeftSide = () => {
  return (
    <div className="d-flex mb-3">
      <div className="">
        <div className="d-flex mt-3">
          <img
            style={{ height: "25px", width: "30px", borderRadius: "50%" }}
            src={Hadid}
            alt=""
          />
          <small className=" ml-2 mt-1">
            <strong>Anjali Viramgama in Level Up Coding</strong>
          </small>
        </div>
        <h3 className="mb-0">
          <strong>Apple’s interview questions database</strong>
        </h3>
        <p className="text-muted mt-2">
          Solid-state batteries are poised to emerge in the coming years.
        </p>
        <p className="text-muted mt-3">
          Jun 2 · 4 min read · Popular on Medium
        </p>
      </div>
      <img src={SideImg} alt="" />
    </div>
  );
};

export default LeftSide;
