import React from "react";
import { Card } from "react-bootstrap";
import man1 from "../../../image/man1.jpg";
import man2 from "../../../image/man2.jpg";
import man3 from "../../../image/man3.jpg";
const Team = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <h4
          className="text-center"
          style={{ color: "#f60", fontWeight: "bold" }}
        >
          Team
        </h4>
        <hr
          className=" mx-auto"
          style={{
            height: "3px",
            width: "15%",
            color: "#f60",
          }}
        />
        <h1 className="text-center mb-5">MEET OUR TEAM</h1>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-10 col-11 mx-auto row ">
          <div className="col-lg-4 col-md-6 col-10 mx-auto">
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src={man1} />
              <Card.Body className="text-center">
                <Card.Title>Mr. Nazmul</Card.Title>
                <h4 className="lead">Manager</h4>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-10 mx-auto">
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src={man2} />
              <Card.Body className="text-center">
                <Card.Title>Mr. Riyan</Card.Title>
                <h4 className="lead">FOUNDER</h4>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-10 mx-auto">
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src={man3} />
              <Card.Body className="text-center">
                <Card.Title>SanJida Rohman</Card.Title>
                <h4 className="lead">ASSISTANT MANAGER</h4>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
