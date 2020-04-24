import React, {  useContext } from "react";
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

const _Topic = (props) => {

  const { topic, videos, courseId, displayVideo, displayQuiz, showTemplateOfAddQuiz } = props;

  const { dispatch } = useContext(CourseContext);
  const { quizes, quizDispatch } = useContext(QuizContext);
  const { adminData } = useContext(AdminContext);

  // var status;
  //   if (useContext(CourseContext).courses.errorCode === 300) {
  //     status = { text: "Error Deleting ", class: "text-danger" };
  //   }
  //   if (useContext(CourseContext).courses.errorCode === 400) {
  //     status = { text: "Deleted Successfully", class: "text-success" };
  //   } else {
  //     status = null;
  //   }

  return (
    <>
      <Accordion defaultActiveKey="1" bsPrefix="customise-css">
        <Row className="m-3 ml-4">
          <Col xs={7} className="text-dark">
            <h4>
              <b>{topic.topicName}</b>
            </h4>
          </Col>
          <Col xs={1} className="text-danger">
            {adminData.isAdmin ? (
              <a
                type="button"
                onClick={() => {
                  deleteCourseFunction(topic.id, "Topics", dispatch);
                }}>
                <i className="fas fa-trash-alt"></i>
              </a>
            ) : null}
          </Col>
          <Col xs={1} className="text-primary">
            {adminData.isAdmin ? <EditCourseTopic topic={topic} /> : null}
          </Col>
          <Col xs={1} className="text-info">
            {adminData.isAdmin ? (
              <AddVideo topicId={topic.id} courseId={courseId} />
            ) : null}
          </Col>
          <Col xs={1} className="text-secondary">
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
                        {adminData.isAdmin ? (
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
                        {adminData.isAdmin ? (
                          <EditVideoTopic video={video} />
                        ) : null}
                      </Col>
                      <Col xs={1} onClick={() => displayVideo(video)}>
                        <i className=" pt-2 article-read fas fa-book-reader"></i>
                      </Col>
                    </Row>
                  );
                }
              })}
            {quizes.quizes &&
              quizes.quizes.map((quiz) => {
                console.log(quiz);
                return(
                    (quiz.topicId === topic.id) ? (    
                    <Row key={quiz.id} className="m-3 ml-4">
                      <Col xs={1}></Col>
                      <Col xs={6}>
                        <h5>{quiz.quizName} quiz</h5>
                      </Col>
                      <Col xs={1} className="text-danger" onClick={()=>
                      deleteQuiz(quizDispatch, quiz.id)}>
                        {/* {adminData.isAdmin ? (
                          <i className="fas fa-trash-alt"></i>
                        ) : null} */}
                        <i className="fas fa-trash-alt"></i>
                      </Col>
                      <Col xs={1} onClick={() => displayQuiz(quiz)}>
                        <i className="pt-2 article-read fas fa-book-reader"></i>
                      </Col>
                    </Row>
                  ):quiz.courseId != null ? null:(
                    <Row key={quiz.id} className="m-3 ml-4" onClick={()=>showTemplateOfAddQuiz(topic.id, "topics")}>
                      <Col xs={1}></Col>                    
                      <Col xs={6}>Add Quiz</Col>
                      <Col xs={2}></Col>
                      <Col xs={1}>
                        <i variant="primary" className="fas edit-icon fa-plus" ></i>
                      </Col>
                    </Row>                 
                  )
                )                
              })}
          </div>
        </Accordion.Collapse>
      </Accordion>
      
      <hr />
    </>
  );
};

export default _Topic;
