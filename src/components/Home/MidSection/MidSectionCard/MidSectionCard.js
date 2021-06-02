import React from "react";
import Hadid from "../../../../images/hb.jpg";

const MidSectionCard = () => {
  return (
    <div className="d-flex">
      <h1 style={{ color: "#E6E6E6" }}>01</h1>
      <div className="ml-4">
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
        <p className="mb-0">
          <strong>Apple’s interview questions database</strong>
        </p>
        <p className="text-muted mt-3">Jun 2 · 4 min read</p>
      </div>
    </div>
  );
};

export default MidSectionCard;
