import React from "react";

const MiddleCard = ({ postData }) => {
  return (
    <div className="d-flex mb-4">
      <div>
        <div className="display-flex">
          <img
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              marginRight: "5px",
            }}
            src={postData[0]?.icon}
            alt=""
          />
          <small style={{ fontWeight: "bold" }}>{postData[0]?.name}</small>
        </div>
        <h5 className="mt-2">{postData[0]?.title}</h5>
        <small>{postData[0]?.date}</small>
      </div>
      <img
        style={{ height: "100px", width: "100px" }}
        src={postData[0]?.img}
        alt=""
      />
    </div>
  );
};

export default MiddleCard;
