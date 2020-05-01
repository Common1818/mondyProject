import React, { useState, useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import "./css/editCourseCard.css";
import { CourseContext } from "../../../contexts/courseContext";
import { updateCourseFunction } from "../../crudFunctions/coursesFunctions";
import { AuthContext } from "../../../contexts/authContext";

const EditCourseCard = (props) => {
  const courseId = props.match.params.id;
  const { courses, dispatch } = useContext(CourseContext);
  const [imageUrl, setImageUrl] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [noOfModules, setNoOfModules] = useState(0);

  var currentCourse;
  courses.courses &&
    courses.courses.map((course) => {
      if (course.id === courseId) {
        currentCourse = course;
      }
      return null;
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    updateCourseFunction(
      {
        imageUrl,
        courseName,
        courseDuration,
        noOfModules,
      },
      dispatch,
      courseId,
      "Courses"
    );
  };

  var status;
  if (useContext(CourseContext).courses.errorCode === 100) {
    status = { text: "Error updating ", class: "text-danger" };
  }
  if (useContext(CourseContext).courses.errorCode === 200) {
    status = { text: "Updated Successfully", class: "text-success" };
  } else {
    status = null;
  }
  const { isAdmin } = useContext(AuthContext);

  return (
    <div className="add-card-container">
      {isAdmin ? (
        <Form onSubmit={handleSubmit}>
          <Card className="add-card">
            <Card.Header className="" as="h2">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                defaultValue={currentCourse && currentCourse.imageUrl}
                placeholder="Enter Url"
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </Card.Header>
            <Card.Body>
              <Card.Title className="course-name">
                <h3>
                  <b>
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control
                      defaultValue={currentCourse && currentCourse.courseName}
                      type="text"
                      placeholder="Enter CourseName here"
                      onChange={(e) => {
                        setCourseName(e.target.value);
                      }}
                      required
                    />
                  </b>
                </h3>
              </Card.Title>
              <Card.Text as="div">
                <Row>
                  <Col>
                    <Form.Label>Number of modules</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Number of modules"
                      defaultValue={currentCourse && currentCourse.noOfModules}
                      onChange={(e) => {
                        setNoOfModules(e.target.value);
                      }}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Label>Course Duration</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Course Duration in Hours"
                      defaultValue={
                        currentCourse && currentCourse.courseDuration
                      }
                      onChange={(e) => {
                        setCourseDuration(e.target.value);
                      }}
                      required
                    />
                  </Col>
                </Row>
              </Card.Text>
              <Button
                className="submit-add-course"
                variant="primary"
                type="submit"
              >
                Update Course
              </Button>
              <div className={status && status.class}>
                {status && status.text}
              </div>
            </Card.Body>
          </Card>
        </Form>
      ) : null}
    </div>
  );
};

export default EditCourseCard;
