import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./css/scoreBoard.css";

const scoreBoard = ({
  score,
  total,
  setShowScoreBoard,
  quiz,
  courseId,
  courseName,
}) => {
  const ratio = score / total;
  var imageLink;
  var message;
  if (ratio === 1) {
    imageLink = "https://www.svgrepo.com/show/38684/report.svg";
    message = "CHEERS!!! You got em all right...";
  }
  if (ratio >= 0.5 && ratio < 1) {
    imageLink = "https://www.svgrepo.com/show/154836/report.svg";
    message = "CLOSE!!! You Almost Got it, Give it another Shot ...";
  }
  if (ratio < 0.5) {
    imageLink = "https://www.svgrepo.com/show/154836/report.svg";
    message = "You Can do much better, give it another shot ...";
  }

  return (
    <div className="quiz-container" key={quiz.id}>
      <Card style={{}} className="score-card">
        <Card.Img src={imageLink} />
        <Card.Body>
          <Card.Title>RESULT</Card.Title>
          <Card.Text as="div">
            <div className="">
              <br />
              <div className="score">
                <div className="score-text">Your Score</div>
                <div className="score-value">
                  <h1>
                    {score}/ {total}
                  </h1>
                </div>
              </div>
              <br />
              <br />
              <div className="text-center">
                <h3> {message}</h3>
              </div>
            </div>
            <div className="">
              {score === total ? (
                <div className="text-center">
                  <div className="card-img">
                    <img
                      src="https://www.svgrepo.com/show/243554/cheers.svg"
                      alt=""
                    />
                  </div>
                  <h3> You have a perfect score </h3>
                </div>
              ) : (
                <div className="">
                  <Button
                    variant={"primary"}
                    onClick={() => setShowScoreBoard(false)}
                  >
                    Try Again
                  </Button>
                </div>
              )}
              {quiz.courseId ? (
                <div className="text-center">
                  <NavLink to={"/certificate/" + courseId}>
                    <Button variant={"primary"}>Get Certificate</Button>
                  </NavLink>
                </div>
              ) : null}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default scoreBoard;
