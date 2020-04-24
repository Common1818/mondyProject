import React, { Fragment, useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";

import { TopicContext } from "../../contexts/topicContext";
import { VideoContext } from "../../contexts/videoContext";
import { CourseContext } from "../../contexts/courseContext";
import { AdminContext } from "../../contexts/adminContext";
import { QuizContext } from "../../contexts/quizContext";

import { deleteQuiz } from "../crudFunctions/quizesFunctions";


import Video from "./Video";
import Topic from "./Topic";
import TopicQuiz from "../quizes/topicQuiz";
import AddTopic from "./addTopic";
import AddQuiz from "../quizes/addQuiz"

const _displayTopicsVideos = (props) => {

  const { adminData } = useContext(AdminContext);
  const { topics } = useContext(TopicContext);
  const { videos } = useContext(VideoContext);
  const { quizes, quizDispatch } = useContext(QuizContext);


  const [selected, setSelection] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState();
  const [selectedQuiz, setSelectedQuiz] = useState();
  const [showAddQuizTempelate, setShowAddQuizTempelate] = useState(false)
  const [quizTopicId, setQuizTopicId] = useState()
  const [quizCourseId, setQuizCourseId] = useState()
  const [showScoreBoard, setShowScoreBoard] = useState(false)
  const [score, setScore] = useState(0)
  


  console.log(useContext(TopicContext));
  const { id } = props.match.params;
  console.log(selectedVideo);

  const displayVideo = async (video) => {
    await setSelectedVideo(video);
    await setSelection(true); //after the first render it became automatically false
  };

  const displayQuiz = async (quiz) => {
    console.log("clicked", quiz)
    await setSelectedVideo()
    await setScore(0)
    await setShowScoreBoard(false)
    await setSelectedQuiz(quiz);
    await setSelection(true);
  };

  const showTemplateOfAddQuiz = async (id, string)=>{
     setSelectedVideo()
     setSelectedQuiz();

     if(string === "courses"){
      await setQuizTopicId()
      await setQuizCourseId(id)
      
     }else{
      await setQuizCourseId()
      await setQuizTopicId(id)
     }
     await setShowAddQuizTempelate(true)
  }

  var status;
  if (useContext(CourseContext).courses.errorCode === 300) {
    status = { text: "Error Deleting ", class: "text-danger" };
  }
  if (useContext(CourseContext).courses.errorCode === 400) {
    status = { text: "Deleted Successfully", class: "text-success" };
  } else {
    status = null;
  }
  console.log(useContext(CourseContext));
  console.log(status);

  return topics.topics != null ? (
    <Fragment>
      <Row>
        <Col>
          <div className="text-center">
            <h1 className="">
              <b>HEADER</b>
            </h1>
            {adminData.isAdmin ? <AddTopic id={id} /> : null}
            <div className={status && status.class}>
              {status && status.text}
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={5} className="bg-light">
          <h2 className="text-center mt-3">
            <b>Topics</b>
          </h2>
          {topics.topics &&
            topics.topics.map((topic) => {
              if (topic.courseId === id) {
                return (
                  <div>
                  <Topic
                    topic={topic}
                    key={topic.id}
                    videos={videos}
                    courseId={id}
                    displayVideo={displayVideo}
                    displayQuiz={displayQuiz}
                    showTemplateOfAddQuiz= {showTemplateOfAddQuiz}
                  />
                  
        </div>
                );
              }
            })}
            {
              quizes.quizes && quizes.quizes.map(quiz=>{
                console.log(quiz.courseId, id)

                return(
                  (quiz.courseId != null && quiz.courseId === id) ? (
                    <Row key={quiz.id} className="m-3 ml-4">
                      <Col xs={1}></Col>
                      <Col xs={6}>
                        <h5>Quiz</h5>
                      </Col>
                      <Col xs={1} className="text-danger" onClick={()=>
                      deleteQuiz(quizDispatch, quiz.id)}>
                        {/* {adminData.isAdmin ? (
                          <i className="fas fa-trash-alt"></i>
                        ) : null} */}
                        <i className="fas fa-trash-alt"></i>
                      </Col>
                      <Col xs={1} onClick={() => displayQuiz(quiz)}>
                        <i className=" pt-2 article-read fas fa-book-reader"></i>
                      </Col>
                    </Row>
                  ): quiz.topicId != null ? null : (
                    <Row key={quiz.id} className="m-3 ml-4" onClick={()=>showTemplateOfAddQuiz(id, "courses")}>
                      <Col xs={1}></Col>                    
                      <Col xs={6}>Add Quiz</Col>
                      <Col xs={2}></Col>
                      <Col xs={1}>
                        <i variant="primary" className="fas edit-icon fa-plus" ></i>
                      </Col>
                    </Row>  
                  )
                )           
              })
            }
        </Col>
        <Col md={6}>
          {selectedVideo != null && selected === true ? (
            <Video 
              selectedVideo={selectedVideo} />
          ) : selected === true && selectedQuiz != null ? (

            <TopicQuiz 
              selectedQuiz={selectedQuiz}
              showScoreBoard={showScoreBoard}
              setShowScoreBoard={setShowScoreBoard} 
              score={score}
              setScore={setScore}/>

          ) : showAddQuizTempelate === true ? (
              <AddQuiz 
                topicId={quizTopicId} 
                courseId={quizCourseId} />
          ):null}
        </Col>
      </Row>
    </Fragment>
  ) : (
    <div>Loading....</div>
  );
};

export default _displayTopicsVideos;
