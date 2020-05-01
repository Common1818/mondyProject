import React, { useContext } from "react";
import "./css/allCourses.css";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { deleteCourseFunction } from "../crudFunctions/coursesFunctions";
import { CourseContext } from "../../contexts/courseContext";
import { AuthContext } from "../../contexts/authContext";

const _displayCourse = ({ course }) => {
  const width = window.innerWidth;
  const { dispatch } = useContext(CourseContext);
  const { authState, isAdmin } = useContext(AuthContext);
  var loginCode;
  if (authState !== null) {
    loginCode = 200;
  } else {
    loginCode = 100;
  }

  const courseId = course.id;

  const handleDelete = () => {
    deleteCourseFunction(course.id, "Courses", dispatch);
  };

  return width < 1000 ? (
    <Col sm={6}>
      <Card className="course-card">
        <Card.Img variant="top" src={course.imageUrl} />
        <hr />
        <Card.Body>
          <Card.Title className="course-name">
            <h3>
              <b>{course.courseName}</b>
            </h3>
          </Card.Title>
          <Card.Text as="div">
            <div className="course-card-icons">
              <div className="modules">
                <i className="far card-icon fa-list-alt">
                  <span className="card-icon-text">
                    <b>{course.noOfModules}</b>
                  </span>
                </i>
              </div>
              <div className="start-icon">
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      {loginCode !== 200 ? (
                        <strong className="text-danger">Login to View!!</strong>
                      ) : (
                        <strong>Start Course...!!!</strong>
                      )}
                    </Tooltip>
                  }
                >
                  {loginCode !== 200 ? (
                    <strong className="text-danger">Login to View!!</strong>
                  ) : (
                    <NavLink to={"/courses/topics/" + course.id}>
                      <i className="fas start-course-icon fa-caret-right"></i>
                    </NavLink>
                  )}
                </OverlayTrigger>
              </div>
              <div className="clock">
                <i className="far card-icon fa-clock">
                  <span className="card-icon-text">
                    <b>{course.courseDuration}</b>
                  </span>
                </i>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="course-card-footer text-muted">
            A Course By{" "}
            <span style={{ fontFamily: "Dosis" }}>Marketing Acad</span> &copy;
            &reg;
          </small>
          {isAdmin ? (
            <div className=" edit-course-card ">
              <button onClick={handleDelete} className="centerMe">
                <div className="icon">
                  <i className="fa fa-trash-o"></i>
                </div>
                <div className="text">
                  <span>DELETE</span>
                </div>
              </button>
              <NavLink to={"/course/" + courseId + "/edit"} rel="nofollow">
                <button className=" centerMe">
                  <div className="icon">
                    <i className="fa fa-edit"></i>
                  </div>
                  <div className="text">
                    <span>EDIT</span>
                  </div>
                </button>
              </NavLink>
            </div>
          ) : null}
        </Card.Footer>
      </Card>
      <br />
    </Col>
  ) : (
    <Col sm={4}>
      <Card className="course-card">
        <Card.Img variant="top" src={course.imageUrl} />
        <hr />
        <Card.Body>
          <Card.Title className="course-name">
            <h3>
              <b>{course.courseName}</b>
            </h3>
          </Card.Title>
          <Card.Text as="div">
            <div className="course-card-icons">
              <div className="modules">
                <i className="far card-icon fa-list-alt">
                  <span className="card-icon-text">
                    <b>{course.noOfModules}</b>
                  </span>
                </i>
              </div>
              <div className="start-icon">
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      {loginCode !== 200 ? (
                        <strong>Login to start This Course!!</strong>
                      ) : (
                        <strong>Start Course...!!!</strong>
                      )}
                    </Tooltip>
                  }
                >
                  {loginCode !== 200 ? (
                    <strong className="text-danger">Login to View!!</strong>
                  ) : (
                    <NavLink to={"/courses/topics/" + course.id}>
                      <i className="fas start-course-icon fa-caret-right"></i>
                    </NavLink>
                  )}
                </OverlayTrigger>
              </div>
              <div className="clock">
                <i className="far card-icon fa-clock">
                  <span className="card-icon-text">
                    <b>{course.courseDuration}</b>
                  </span>
                </i>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="course-card-footer text-muted">
            A Course By{" "}
            <span style={{ fontFamily: "Dosis" }}>Marketing Acad</span> &copy;
            &reg;
          </small>
          {isAdmin ? (
            <div className=" edit-course-card ">
              <button onClick={handleDelete} className=" centerMe">
                <div className="icon">
                  <i className="fa fa-trash-o"></i>
                </div>
                <div className="text">
                  <span>DELETE</span>
                </div>
              </button>
              <NavLink to={"/course/" + courseId + "/edit"} rel="nofollow">
                <button className=" centerMe">
                  <div className="icon">
                    <i className="fa fa-edit"></i>
                  </div>
                  <div className="text">
                    <span>EDIT</span>
                  </div>
                </button>
              </NavLink>
            </div>
          ) : null}
        </Card.Footer>
      </Card>
      <br />
    </Col>
  );
};

export default _displayCourse;
