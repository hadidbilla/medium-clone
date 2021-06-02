import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import MiddleSide from "./MiddleSide/MiddleSide";
import RightSide from "./RightSide/RightSide";
const TopHeader = () => {
  return (
    <div className="row">
      <LeftSide />
      <MiddleSide />
      <RightSide />
    </div>
  );
};

export default TopHeader;
