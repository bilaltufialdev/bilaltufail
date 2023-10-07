import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import illustration from "../assets/img/illustration.png";

const Slider = () => {
  return (
    <div className="slider__section">
      <Container className="py-5 min-vh-100 d-flex">
        <Row className="align-items-center vw-100 py-5 my-5">
          <Col sm="12" md="6" className="text-left">
            <p>I'm a</p>
            <h1>
              Full Stack Software Developer<span>.</span>
            </h1>
            <Button variant="primary" className="btn-lg px-5 my-4 btn__anime">
              Previous Projects
            </Button>
          </Col>
          <Col sm="12" md="6" className="text-center d-none d-md-block">
            <img
              src={illustration}
              className="responsive img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
