import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import img1 from "../../image/paris.jpg";
import "./service.css";
const SingleService = ({ service }) => {
  //   console.log(service);
  const { _id, name, price, img, discription } = service;
  const history = useHistory();
  const linkHandle = (id) => {
    history.push(`/perservice/${id}`);
  };
  return (
    <>
      <Card
        //   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        className="col-lg-4 col-md-5 col-8 mx-auto my-2 pb-3 border-0"
        style={{
          width: "21rem",
        }}
      >
        <div
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <div className="img-div">
            <Card.Img className="img" variant="top" src={img} />
          </div>

          <Card.Body className="border d-flex flex-column justify-content-between align-items-start">
            <Card.Title style={{ fontSize: "25px", letterSpacing: "1px" }}>
              TOURS IN <span className="text-uppercase">{name}</span>
            </Card.Title>
            <Card.Text>{discription.slice(0, 130)}</Card.Text>
            <div className="w-100 d-flex  justify-content-between align-items-center ">
              <button
                onClick={() => linkHandle(_id)}
                className="rounded-pill px-3 py-2 btn text-white"
                style={{ backgroundColor: "#ff6600" }}
              >
                BOOK NOW
              </button>
              <h3>${price}</h3>
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default SingleService;
