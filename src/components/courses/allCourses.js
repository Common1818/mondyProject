import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { CourseContext } from "../../contexts/courseContext";
import { AdminContext } from "../../contexts/adminContext";

import DisplayCourse from "./displayCourse";

import "./css/allCourses.css";

const _allCourses = () => {

  const { courses } = useContext(CourseContext);
  const { adminData } = useContext(AdminContext);

  var status;

  if (useContext(CourseContext).courses.errorCode === 300) {
    status = { text: "Error Deleting ", class: "text-danger" };
  }

  if (useContext(CourseContext).courses.errorCode === 400) {
    status = { text: "Deleted Successfully", class: "text-success" };
  } else {
    status = null;
  }

  let descriptionString = "";
  
   courses.courses && courses.courses.map(item=>{
   
    descriptionString = descriptionString.concat((item.courseName).toString());
    return descriptionString
    
  })

  return courses.courses != null ? (
    <div className="course-home-container">

      <Helmet>
        <meta name="description" content={descriptionString}/>
      </Helmet>

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
    <div>
      Loading...
    </div>
  );
};

export default _allCourses;
