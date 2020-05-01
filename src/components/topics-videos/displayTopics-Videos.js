import React, { Fragment, useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import { TopicContext } from "../../contexts/topicContext";
import { VideoContext } from "../../contexts/videoContext";
import { CourseContext } from "../../contexts/courseContext";
import { QuizContext } from "../../contexts/quizContext";
import { AuthContext } from "../../contexts/authContext";

import { deleteQuiz } from "../crudFunctions/quizesFunctions";

import Video from "./Video";
import Topic from "./Topic";
import TopicQuiz from "../quizes/topicQuiz";
import AddTopic from "./addTopic";
import AddQuiz from "../quizes/addQuiz";

import "./css/displayTopics-Video.css";

const _displayTopicsVideos = (props) => {

  const { authState, isAdmin } = useContext(AuthContext);
  const { topics } = useContext(TopicContext);
  const { videos } = useContext(VideoContext);
  const { quizes, quizDispatch } = useContext(QuizContext);

  const [selected, setSelection] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState();
  const [selectedQuiz, setSelectedQuiz] = useState();
  const [showAddQuizTempelate, setShowAddQuizTempelate] = useState(false);
  const [quizTopicId, setQuizTopicId] = useState();
  const [quizCourseId, setQuizCourseId] = useState();
  const [showScoreBoard, setShowScoreBoard] = useState(false);
  const [score, setScore] = useState(0);

  const { id } = props.match.params;

  const displayVideo = async (video) => {
    await setSelectedVideo(video);
    await setSelection(true); //after the first render it became automatically false
  };

  const displayQuiz = async (quiz) => {
    console.log("clicked", quiz);
    await setSelectedVideo();
    await setScore(0);
    await setShowScoreBoard(false);
    await setSelectedQuiz(quiz);
    await setSelection(true);
  };

  const showTemplateOfAddQuiz = async (id, string) => {
    setSelectedVideo();
    setSelectedQuiz();

    if (string === "courses") {
      await setQuizTopicId();
      await setQuizCourseId(id);
    } else {
      await setQuizCourseId();
      await setQuizTopicId(id);
    }
    await setShowAddQuizTempelate(true);
  };

  var status;
  if (useContext(CourseContext).courses.errorCode === 300) {
    status = { text: "Error Deleting ", class: "text-danger" };
  }
  if (useContext(CourseContext).courses.errorCode === 400) {
    status = { text: "Deleted Successfully", class: "text-success" };
  } else {
    status = null;
  }

  const courseId = props.match.params.id;
  const courses = useContext(CourseContext).courses.courses;
  const error = useContext(QuizContext);
  var quizMessage;
  if (error && error.quizes.errorCode === 200) {
    quizMessage = "Added Quiz Successfully";
  }
  if (error && error.quizes.errorCode === 100) {
    quizMessage = "Error Adding Quiz";
  } else {
    quizMessage = "";
  }

  var courseName;
  courses &&
    courses.map((course) => {
      if (course.id === courseId) {
        courseName = course.courseName;
      }
      return null;
    });

  var loginCode;
  if (authState !== null) {
    loginCode = 200;
  } else {
    loginCode = 100;
  }

  let descriptionString = "";
  
 topics.topics &&  topics.topics.map(item=>{
   
    descriptionString = descriptionString.concat((item.topicsName));
    return descriptionString
    
  })

  if (loginCode !== 200) return <Redirect to="/courses" />;
  return topics.topics != null ? (
    <Fragment>
      <Helmet>
        <meta name="robots" content="index follow" />
        <meta name="description" content={descriptionString} />
      </Helmet>
      <Row>
        <Col>
          <div className="">
            <h1 className="course-heading">
              {courses &&
                courses.map((course) => {
                  if (course.id === courseId) {
                    return course.courseName;
                  }
                  return null;
                })}
            </h1>
            {isAdmin ? <AddTopic id={id} /> : null}
            <div className={status && status.class}>
              {status && status.text}
              {quizMessage}
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={4} className="topics-courses-container">
          <h2 className="topicsOverview">Topic Overview</h2>
          {topics.topics &&
            topics.topics.map((topic) => {
              if (topic.courseId === id) {
                return (
                  <div key={topic.id}>
                    <Topic
                      topic={topic}
                      key={topic.id}
                      videos={videos}
                      courseId={id}
                      displayVideo={displayVideo}
                      displayQuiz={displayQuiz}
                      showTemplateOfAddQuiz={showTemplateOfAddQuiz}
                    />
                  </div>
                );
              }
              return null;
            })}
          {quizes.quizes &&
            quizes.quizes.map((quiz) => {
              return quiz.topicId != null ? null:(
                quiz.courseId === id ) ? (
                <Row key={quiz.id} className="m-3 ml-4">
                  <Col xs={1}></Col>
                  <Col xs={6}>
                    <h5>Quiz</h5>
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
                    <i className=" pt-2 article-read fas fa-book-reader"></i>
                  </Col>
                </Row>
              ) : null
            })}
            <Row
              className="m-3 ml-4"
              onClick={() => showTemplateOfAddQuiz(id, "courses")}
            >
              <Col xs={1}></Col>
              <Col xs={6}>Add Quiz</Col>
              <Col xs={2}></Col>
              <Col xs={1}>
                <i variant="primary" className="fas edit-icon fa-plus"></i>
              </Col>
            </Row>
        </Col>
        <Col className="video-cont" lg={8}>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              {selectedVideo != null && selected === true ? (
                <Video selectedVideo={selectedVideo} />
              ) : selected === true && selectedQuiz != null ? (
                <TopicQuiz
                  courseName={courseName}
                  courseId={props.match.params.id}
                  selectedQuiz={selectedQuiz}
                  showScoreBoard={showScoreBoard}
                  setShowScoreBoard={setShowScoreBoard}
                  score={score}
                  setScore={setScore}
                />
              ) : showAddQuizTempelate === true ? (
                <AddQuiz topicId={quizTopicId} courseId={quizCourseId} />
              ) : null}
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  ) : (
    <div>Loading....</div>
  );
};

export default _displayTopicsVideos;