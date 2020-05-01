/* eslint-disable */
import React, { useState, useContext } from "react";
import { QuizContext } from "../../contexts/quizContext";
import { Row, Col, Form, Button } from "react-bootstrap";
import { addQuiz } from "../crudFunctions/quizesFunctions";
import "./css/TopicQuiz.css";

const _AddQuiz = ({ topicId, courseId }) => {
  // topic id and course id both
  const { quizDispatch } = useContext(QuizContext);

  const [quizQuesAns, setQuizQuesAns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [err, setErr] = useState();

  const handleChange = (e) => {
    let newArr = [...quizQuesAns];
    let newObject = {
      ...newArr[currentPage - 1],
      [e.target.id]: e.target.value,
    };
    newArr[currentPage - 1] = newObject;
    setQuizQuesAns(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // topic id and course id both one would be null
    if (topicId != null) {
      addQuiz(quizDispatch, {
        quizQuestionAnswer: quizQuesAns,
        topicId,
      });
    } else {
      addQuiz(quizDispatch, {
        quizQuestionAnswer: quizQuesAns,
        courseId,
      });
    }
  };

  const addNextQues = () => {
    setCurrentPage(currentPage + 1);
    document.getElementById("quiz-form").reset();
  };

  return (
    <div className="ml-5 bg-light mb-5 pb-5 ">
      <h2 className="text-center pt-2">
        <b>Add Quiz</b>
      </h2>
      <Form className="m-5 mt-3" id="quiz-form">
        <Form.Group>
          <Form.Control
            required={true}
            as="textarea"
            rows="3"
            className="question"
            placeholder="Write Question"
            id="question"
            onChange={handleChange}
          />
        </Form.Group>
        <Row className="ml-3">
          <Col sm={5} className="m-3">
            <Form.Control
              className="option-add"
              placeholder="Option One"
              id="option1"
              onChange={handleChange}
              required
            />
          </Col>
          <Col sm={5} className="m-3">
            <Form.Control
              className="option-add"
              placeholder="Option Two"
              id="option2"
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="ml-3">
          <Col sm={5} className="m-3">
            <Form.Control
              className="option-add"
              placeholder="Option Three"
              id="option3"
              onChange={handleChange}
              required
            />
          </Col>
          <Col sm={5} className="m-3">
            <Form.Control
              className="option-add"
              placeholder="Option Four"
              id="option4"
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Form.Group className="m-5">
          <Row>
            <Col sm={4}>
              <Form.Label>Choose Answer :</Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control
                as="select"
                className="choose-ans"
                id="correctAnswer"
                onChange={handleChange}
                required
              >
                {quizQuesAns[currentPage - 1] &&
                quizQuesAns[currentPage - 1].option1 != null ? (
                  <option>{quizQuesAns[currentPage - 1].option1}</option>
                ) : (
                  <option>Option One</option>
                )}
                {quizQuesAns[currentPage - 1] &&
                quizQuesAns[currentPage - 1].option2 != null ? (
                  <option>{quizQuesAns[currentPage - 1].option2}</option>
                ) : (
                  <option>Option Two</option>
                )}
                {quizQuesAns[currentPage - 1] &&
                quizQuesAns[currentPage - 1].option3 != null ? (
                  <option>{quizQuesAns[currentPage - 1].option3}</option>
                ) : (
                  <option>Option Three</option>
                )}
                {quizQuesAns[currentPage - 1] &&
                quizQuesAns[currentPage - 1].option4 != null ? (
                  <option>{quizQuesAns[currentPage - 1].option4}</option>
                ) : (
                  <option>Option Four</option>
                )}
              </Form.Control>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Form.Group>
        {err ? <div className="text-danger align-center">{err}</div> : null}
        <Row className="mt-5">
          <Col>
            <Button variant="primary" onClick={addNextQues}>
              Add Next Question
            </Button>
          </Col>
          <Col>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit Quiz
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default _AddQuiz;
