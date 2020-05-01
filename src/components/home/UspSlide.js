import React from "react";
import "./css/UspSlide.css";
import { Row, Col } from "react-bootstrap";
import UspSvgOne from "./UspSVG's/uspSvg1";
import UspSvgTwo from "./UspSVG's/uspSvg2";
import UspSvgThree from "./UspSVG's/uspSvg3";

const UspSlide = ({ content }) => {
  const data = content && content[2];
  const EditUspData = data && data.EditUspData;

  return (
    <div className="usp-container">
      <div className="usp-heading">
        <h1>What makes us special</h1>
      </div>
      <div className="usp">
        <Row>
          <Col sm={4}>
            <div className="usp-icon">
              <UspSvgOne />
            </div>
            <div className="usp-text">
              <h2>{EditUspData && EditUspData[0].heading}</h2>
              {EditUspData && EditUspData[0].text}
            </div>
          </Col>
          <Col sm={4}>
            <div className="usp-icon">
              <UspSvgTwo />
            </div>
            <div className="usp-text">
              <h2>{EditUspData && EditUspData[1].heading}</h2>
              {EditUspData && EditUspData[1].text}
            </div>
          </Col>
          <Col sm={4}>
            <div className="usp-icon">
              <UspSvgThree />
            </div>
            <div className="usp-text">
              <h2>{EditUspData && EditUspData[2].heading}</h2>
              {EditUspData && EditUspData[2].text}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UspSlide;
