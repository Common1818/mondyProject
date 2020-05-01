import React, { useState, useContext } from "react";
import { QuizContext } from "../../contexts/quizContext";
import { Card, Button } from "react-bootstrap";
import { deleteQuestion } from "../crudFunctions/quizesFunctions";
import ScoreBoard from "./scoreBoard";
import Options from "./options";
import $ from "jquery";
import "./css/TopicQuiz.css";
import { AdminContext } from "../../contexts/adminContext";

const _topicQuiz = (props) => {
  const { quizDispatch } = useContext(QuizContext);
  const { quizQuestionAnswer } = props.selectedQuiz;
  const { showScoreBoard, setShowScoreBoard, score, setScore } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [optionsChoosed, setOptionsChoosed] = useState([]);
  const { adminData } = useContext(AdminContext);

  const removeClass = () => {
    $(".option1").removeClass("user-ans");
    $(".option2").removeClass("user-ans");
    $(".option3").removeClass("user-ans");
    $(".option4").removeClass("user-ans");
  };

  const changeQues = async (direction) => {
    if (direction === "back") {
      await setCurrentPage(currentPage - 1);
      let optionId;

      if (optionsChoosed[currentPage - 2] != null) {
        optionId = optionsChoosed[currentPage - 2];
        removeClass();
        $(".option" + optionId).toggleClass("user-ans");
      } else {
        removeClass();
      }
    } else if (direction === "next") {
      await setCurrentPage(currentPage + 1);
      let optionId;
      if (optionsChoosed[currentPage] != null) {
        optionId = optionsChoosed[currentPage];
        removeClass();
        $(".option" + optionId).toggleClass("user-ans");
      } else {
        removeClass();
      }
    }
  };

  const choosenOption = (optionId) => {
    removeClass();
    $(".option" + optionId).toggleClass("user-ans");

    let newArr = [...optionsChoosed];
    newArr[currentPage - 1] = optionId;
    setOptionsChoosed(newArr);

    const option = "option" + optionId;

    if (
      quizQuestionAnswer[currentPage - 1].correctAnswer ===
      quizQuestionAnswer[currentPage - 1][option]
    ) {
      setScore(score + 1);
    }
  };

  return (
    <div className=" ">
      <h2 className="text-center pt-2">
        <b>Quiz</b>
      </h2>
      {quizQuestionAnswer.slice(currentPage - 1, currentPage).map((item) => {
        return showScoreBoard !== true ? (
          <div className="m-5" key={props.selectedQuiz.id + currentPage}>
            <Card className="p-2 question ">
              <Card.Title>
                <h4>{item.question}</h4>
              </Card.Title>
            </Card>

            <div className="mt-4 ">
              <Options item={item} choosenOption={choosenOption} />

              <div className="ml-4 float-left mt-3">
                {currentPage > 1 ? (
                  <Button
                    onClick={() => changeQues("back")}
                    className="primary"
                  >
                    Previous
                  </Button>
                ) : (
                  <Button
                    onClick={() => changeQues("back")}
                    className="primary"
                    disabled
                  >
                    Previous
                  </Button>
                )}
              </div>
              <div className="clearflex"></div>
              <div className="mr-3 float-right mt-3">
                {quizQuestionAnswer.length - 1 >= currentPage ? (
                  <Button
                    onClick={() => changeQues("next")}
                    className="primary"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={() => changeQues("next")}
                    className="primary"
                    disabled
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
            <div className="mt-4 p-1"></div>
            <div className="mt-5">
              <div className="text-center mt-5">
                {currentPage === quizQuestionAnswer.length ? (
                  <Button
                    variant={"primary"}
                    onClick={() => setShowScoreBoard(true)}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button variant={"primary"} disabled>
                    Submit
                  </Button>
                )}
              </div>
              {adminData.isAdmin ? (
                <div className="text-center text-danger mt-4">
                  <i
                    className="fas fa-trash-alt"
                    onClick={() =>
                      deleteQuestion(
                        quizDispatch,
                        currentPage,
                        props.selectedQuiz.id
                      )
                    }
                  ></i>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <ScoreBoard
            key={props.courseId}
            courseName={props.courseName}
            courseId={props.courseId}
            score={score}
            total={quizQuestionAnswer.length}
            setShowScoreBoard={setShowScoreBoard}
            quiz={props.selectedQuiz}
          />
        );
      })}
    </div>
  );
};
export default _topicQuiz;
