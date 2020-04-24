import React, { useState, useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import "./css/addCourse.css";
import { CourseContext } from "../../contexts/courseContext";
import { addCourseFunction } from "../crudFunctions/coursesFunctions";
import { AdminContext } from "../../contexts/adminContext";

const _addCourse = () => {
  const { adminData } = useContext(AdminContext);
  const { courses, dispatch } = useContext(CourseContext);
  const [imageUrl, setImageUrl] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [noOfModules, setNoOfModules] = useState(0);
  var status;
  if (useContext(CourseContext).courses.errorCode === 100) {
    status = { text: "Error Adding Course ", class: "text-danger" };
  }
  if (useContext(CourseContext).courses.errorCode === 200) {
    status = { text: "Course Added Successfully", class: "text-success" };
  } else {
    status = null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourseFunction(
      {
        imageUrl,
        courseName,
        courseDuration,
        noOfModules,
      },
      dispatch
    );
  };

  return (
    <div>
      {adminData.isAdmin ? (
        <div className="add-card-container">
          <Form onSubmit={handleSubmit}>
            <Card className="add-card">
              <Card.Header className="" as="h2">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
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
                  Add Course
                </Button>
                <div className={status && status.class}>
                  {status && status.text}
                </div>
              </Card.Body>
            </Card>
          </Form>
          {courses.error != null ? (
            <div className="text-primary">Error</div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default _addCourse;
