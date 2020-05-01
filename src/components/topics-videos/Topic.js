/* eslint-disable */
import React, { useContext } from "react";
import { Row, Col, Accordion } from "react-bootstrap";

import { AdminContext } from "../../contexts/adminContext";
import { CourseContext } from "../../contexts/courseContext";
import { QuizContext } from "../../contexts/quizContext";

import { deleteCourseFunction } from "../crudFunctions/coursesFunctions";
import { deleteQuiz } from "../crudFunctions/quizesFunctions";

import AddVideo from "./addVideo";
import EditCourseTopic from "../EDIT/editCourses/editCourseTopic";
import EditVideoTopic from "../EDIT/editCourses/editVideoName";

import "./css/topic.css";
import { AuthContext } from "../../contexts/authContext";

const _Topic = (props) => {
  const {
    topic,
    videos,
    courseId,
    displayVideo,
    displayQuiz,
    showTemplateOfAddQuiz,
  } = props;

  const { dispatch } = useContext(CourseContext);
  const { quizes, quizDispatch } = useContext(QuizContext);
  const { isAdmin } = useContext(AuthContext);
  const topicId = topic.id;

  return (
    <div className="topic-container">
      <Accordion
        defaultActiveKey="1"
        className={topicId}
        bsPrefix="customise-css"
      >
        <Row className="m-3 ml-4">
          <Col xs={7} className="text-dark">
            <h4>
              <b>{topic.topicName}</b>
            </h4>
          </Col>

          <Col xs={1} className="text-danger">
            {isAdmin ? (
              <a
                type="button"
                onClick={() => {
                  deleteCourseFunction(topic.id, "Topics", dispatch);
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </a>
            ) : null}
          </Col>
          <Col xs={1} className="text-primary">
            {isAdmin ? <EditCourseTopic topic={topic} /> : null}
          </Col>
          <Col xs={1} className="text-info">
            {isAdmin ? (
              <AddVideo topicId={topic.id} courseId={courseId} />
            ) : null}
          </Col>
          <Col xs={1}>
            <Accordion.Toggle eventKey="0" className="accordian-toggle">
              <i className="fas list-down fa-chevron-down"></i>
            </Accordion.Toggle>
          </Col>
        </Row>

        {/* Add Quiz or see Quiz here */}
        <Accordion.Collapse eventKey="0">
          <div>
            {videos &&
              videos.videos.map((video) => {
                if (video.courseId === courseId && video.topicId === topic.id) {
                  return (
                    <Row key={video.id} className="m-3 ml-4">
                      <Col xs={1}></Col>
                      <Col xs={6} className="text-dark">
                        <h5>{video.videoName}</h5>
                      </Col>
                      <Col xs={1} className="text-danger">
                        {isAdmin ? (
                          <a
                            type="button"
                            onClick={() => {
                              deleteCourseFunction(
                                video.id,
                                "Videos",
                                dispatch
                              );
                            }}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </a>
                        ) : null}
                      </Col>
                      <Col xs={1} className="text-primary">
                        {isAdmin ? <EditVideoTopic video={video} /> : null}
                      </Col>
                      <Col xs={1} onClick={() => displayVideo(video)}>
                        <i className=" pt-2 article-read fas fa-book-reader"></i>
                      </Col>
                    </Row>
                  );
                }
              })}
              {
                quizes.quizes && quizes.quizes.map(quiz=>{
                  return quiz.courseId != null ? null : (
                    quiz.topicId === topic.id ) ? (
                      <Row key={quiz.id} className="m-3 ml-4">
                        <Col xs={1}></Col>
                        <Col xs={6}>
                          <h5>{quiz.quizName} quiz</h5>
                        </Col>
                        {isAdmin ? (
                          <Col
                            xs={1}
                            className="text-danger"
                            onClick={() => deleteQuiz(quizDispatch, quiz.id)}
                          >
                          <i className="fas fa-trash-alt"></i>
                          
                          </Col>
                        ) : null}

                        <Col xs={1} onClick={() => displayQuiz(quiz)}>
                          <i className="pt-2 article-read fas fa-book-reader"></i>
                        </Col>
                      </Row>
                    ) : (null)
                })
              }
              {isAdmin ? (
                <Row
                className="m-3 ml-4"
                onClick={() =>
                  showTemplateOfAddQuiz(topic.id, "topics")
                }>

                <Col xs={1}></Col>
                <Col xs={6}>Add Quiz</Col>
                <Col xs={2}></Col>
                <Col xs={1}>
                  <i
                    variant="primary"
                    className="fas edit-icon fa-plus"
                  ></i>
                  </Col>
                </Row>
            ) : null}
          </div>
        </Accordion.Collapse>
      </Accordion>
      <hr />
    </div>
  );
};

export default _Topic;
