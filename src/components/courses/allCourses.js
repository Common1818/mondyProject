import React, { useContext, useState, useEffect } from "react";
import "./css/allCourses.css";
import { NavLink } from "react-router-dom";
import { CardDeck, Button, Row, Col } from "react-bootstrap";
import { CourseContext } from "../../contexts/courseContext";
import DisplayCourse from "./displayCourse";
import { AdminContext } from "../../contexts/adminContext";

const _allCourses = () => {
  const { courses } = useContext(CourseContext);
  console.log(courses.courses);
  const { adminData } = useContext(AdminContext);
  // console.log(courses)
  var status;
  if (useContext(CourseContext).courses.errorCode === 300) {
    status = { text: "Error Deleting ", class: "text-danger" };
  }
  if (useContext(CourseContext).courses.errorCode === 400) {
    status = { text: "Deleted Successfully", class: "text-success" };
  } else {
    status = null;
  }

  return courses.courses != null ? (
    <div className="course-home-container">
      {adminData.isAdmin ? (
        <div className="Add-course-card">
          <NavLink to="courses/add">
            <Button variant="primary">Add Course card</Button>
            <div className={status && status.class}>
              {status && status.text}
            </div>
          </NavLink>
        </div>
      ) : null}
      <Row>
        {courses.courses.map((course) => {
          return <DisplayCourse key={course.id} course={course} />;
        })}
      </Row>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default _allCourses;
