import React from "react";
import { Card } from "react-bootstrap";
const Picture = ({ pic }) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-10 mx-auto ">
        <Card style={{ width: "18rem" }} className="border border-0">
          <Card.Img variant="top" src={pic} />
        </Card>
      </div>
    </>
  );
};

export default Picture;
