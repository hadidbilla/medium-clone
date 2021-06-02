import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./LastSection.css";
import RightCart from "./RightCart/RightCart";
const LastSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <LeftSide />
          <LeftSide />
          <LeftSide />
          <LeftSide />
        </div>
        <div className="col-md-4 fixed">
          <div className="bookmark">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Bookmark stories for later</h5>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            <p className="text-muted">
              Start saving stories by clicking the bookmark icon and you’ll find
              them all here.
            </p>
          </div>
          <div className="who-follow mt-4">
            <RightCart />
            <RightCart />
            <RightCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
