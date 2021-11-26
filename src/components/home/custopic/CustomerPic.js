import React from "react";
import pic1 from "../../../image/pic1.jpg";
import pic2 from "../../../image/pic2.jpg";
import pic3 from "../../../image/pic3.jpg";
import pic4 from "../../../image/pic4.jpg";
import pic5 from "../../../image/pic5.jpg";
import pic6 from "../../../image/pic6.jpg";
import pic7 from "../../../image/pic7.jpg";
import pic8 from "../../../image/pic8.jpg";
import pic9 from "../../../image/pic9.jpg";
import pic10 from "../../../image/pic10.jpg";
import pic11 from "../../../image/pic11.jpg";
import pic12 from "../../../image/pic12.jpg";
import Picture from "./Picture";
const CustomerPic = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <h4
          className="text-center"
          style={{ color: "#f60", fontWeight: "bold" }}
        >
          OUR Gallery
        </h4>
        <hr
          className=" mx-auto"
          style={{
            height: "3px",
            width: "15%",
            color: "#f60",
          }}
        />
        <h1 className="text-center">PHOTOS OUR CUSTOMERS</h1>

        <div className="row">
          <div className="col-md-10 col-11 mx-auto row g-4">
            {[
              pic1,
              pic2,
              pic3,
              pic4,
              pic5,
              pic6,
              pic7,
              pic8,
              pic9,
              pic10,
              pic11,
              pic12,
            ].map((pic, id) => (
              <Picture key={id} pic={pic} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerPic;
