import React from "react";
import { Link } from "react-router-dom";
import "./css/join-slide.css";
import { Row, Col, Button } from "react-bootstrap";

const JoiningSlide = ({ content }) => {
  const data = content && content[1];
  const EditJoinSlide = data && data.EditJoinSide;

  return (
    <div>
      <Row className="stat-numbers">
        {EditJoinSlide &&
          EditJoinSlide.map((content) => {
            return (
              <Col lg key={content.stat + content.text}>
                <div>
                  <h2 className="number ">
                    <b>{content.stat}</b>
                  </h2>
                </div>
                <div>
                  <h3>{content.text}</h3>
                </div>
              </Col>
            );
          })}
      </Row>
      <div className="Edit-numbers">
        <Link to="/signup">
          {" "}
          <Button className="join-btn">Join the community Today</Button>
        </Link>
      </div>
    </div>
  );
};

export default JoiningSlide;
