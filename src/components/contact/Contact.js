import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import contactImg from "../../image/contact.jpg";
const Contact = () => {
  return (
    <>
      <div className="mt-5 pt-3">
        <h1 className="text-center mb-3">Contact With us:</h1>
        <hr className="w-25 mx-auto" />
        <Container>
          <Row>
            <Col sm={12} lg={6} className=" ">
              <img className="w-100" src={contactImg} alt="" />
            </Col>
            <Col className=" pt-5 mx-auto  mt-5" sm={10} lg={6}>
              <Row>
                <Col sm={10} md={6} className="mx-auto my-3">
                  <Form.Control placeholder="Enter Your Name" />
                </Col>
                <Col sm={10} md={6} className="mx-auto my-3">
                  <Form.Control placeholder="Enter Your Email" />
                </Col>
                <Col sm={10} md={6} className="mx-auto my-3">
                  <Form.Control placeholder="Enter Your Phone Number" />
                </Col>
                <Col sm={10} md={6} className="mx-auto my-3">
                  <Form.Control placeholder="Enter Your Adress" />
                </Col>

                <Button variant="info" size="md">
                  submit
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
