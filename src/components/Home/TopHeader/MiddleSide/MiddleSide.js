import React, { useEffect, useState } from "react";
import FakeData from "../../../../FakeData/FakeData.json";
import MiddleCard from "./MiddleCard/MiddleCard";
import "./MiddleSide.css";
const MiddleSide = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    setPostData(FakeData)?.catch((error) => console.log(error));
  }, []);
  return (
    <div className="middle-side col-md-4 ml-3">
      <MiddleCard postData={postData} />
      <MiddleCard postData={postData} />
      <MiddleCard postData={postData} />
    </div>
  );
};

export default MiddleSide;
