import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import reactImg from "../assets/img/react.png";
import solidityImg from "../assets/img/firebase.png";
import ethImg from "../assets/img/ethereum.png";
import nodeImg from "../assets/img/node.png";
import htmlImg from "../assets/img/html.png";
import cssImg from "../assets/img/css.png";
import sassImg from "../assets/img/sass.png";
import reduxImg from "../assets/img/redux.png";

const Experience = () => {
  return (
    <div className="experience__section">
      <Container className="py-5 my-5">
        <Row className="py-5">
          <Col xs="12" className="text-center">
            <h2>Experience</h2>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center text-center">
          <Col className="text-center my-5" md="3" sm="6" xs="6">
            <img
              src={reactImg}
              alt="react img"
              className="img-responsive"
              width="30%"
              height="auto"
            />
          </Col>
          <Col className="text-center my-5" md="3" sm="6" xs="6">
            <img
              src={reduxImg}
              alt="react img"
              className="img-responsive"
              width="30%"
              height="auto"
            />
          </Col>
          <Col className="text-center my-5" md="3" sm="6" xs="6">
            <img
              src={solidityImg}
              alt="react img"
              className="img-responsive"
              width="30%"
              height="auto"
            />
          </Col>
          <Col className="text-center my-5" md="3" sm="6" xs="6">
            <img
              src={ethImg}
              alt="react img"
              className="img-responsive"
              width="30%"
              height="auto"
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center text-center">
          <Col className="text-center my-5" md="3" sm="6" xs="6">
            <img
              src={htmlImg}
              alt="react img"
              className="img-responsive"
              width="30%"
              height="auto"
            />
          </Col>
          <Col className="text-center my-5" md="3" sm="6" xs="6">
            <img
              src={cssImg}
              alt="react img"
              className="img-responsive"
              width="30%"
              height="auto"
            />
          </Col>
          <Col className="text-center my-5" md="3" sm="6" xs="6">
            <img
              src={sassImg}
              alt="react img"
              className="img-responsive"
              width="30%"
              height="auto"
            />
          </Col>
          <Col className="text-center my-5" md="3" sm="6" xs="6">
            <img
              src={nodeImg}
              alt="react img"
              className="img-responsive"
              width="30%"
              height="auto"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
