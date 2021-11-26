import React from "react";
import "./home.css";
const HomeBanner = () => {
  return (
    <div className="banner h-50">
      <div
        style={{ height: "83vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <h1 className=" display-2 text-white mx-3 text-capitalize">
          welcome to our travel guro
        </h1>
      </div>
    </div>
  );
};

export default HomeBanner;
