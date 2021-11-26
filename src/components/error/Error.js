import React from "react";
import errorImg from "../../image/error.jpg";
const Error = () => {
  return (
    <div
      className=" d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100vw", height: "80vh" }}
    >
      <img src={errorImg} alt="" />
    </div>
  );
};

export default Error;
