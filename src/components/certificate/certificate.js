/* eslint-disable */
import React, { useContext, useState } from "react";
import $ from "jquery";
import "./css/certificate.css";
import { CourseContext } from "../../contexts/courseContext";
const firebase = require("firebase");

const Certificate = (props) => {
  const serialNum =
    firebase.auth() &&
    firebase.auth().currentUser.uid.slice(1, 10) +
      props.match.params.id.slice(1, 5);

  const currentEmail = firebase.auth().currentUser.email;
  const userName = firebase.auth().currentUser.displayName;

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateObj = new Date();
  let month = monthNames[dateObj.getMonth()];
  let day = String(dateObj.getDate()).padStart(2, "0");
  let year = dateObj.getFullYear();
  let output = day + " " + month + "," + year;
  console.log(output);

  const url =
    "https://script.google.com/macros/s/AKfycbxTlWouaMZFhVxYIhq4BKshKSxXWEkIlB6K625hagqgQjgB6dlJ/exec";
  const courseId = props.match.params.id;
  const courses = useContext(CourseContext).courses.courses;
  var courseName;
  courses &&
    courses.map((course) => {
      if (course.id === courseId) {
        courseName = course.courseName;
      }
      return null;
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, serialNum });
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $("form").serialize(),
    })
      .then(() => {
        const firestore = firebase.firestore();
        firestore
          .collection("Certificates")
          .add({
            currentEmail,
            serialNum,
            userName,
          })
          .then(() => {
            setMessage(
              "Requested for certificate, you'll receive Certificate by email"
            );
          })
          .catch((err) => {
            setMessage("Error Applying for certificate");
          });
      })
      .catch((err) => {
        setMessage("Error Applying for certificate");
      });
  };

  return (
    <div className="certificate-form-container">
      <form onSubmit={handleSubmit} id="test-form">
        <h3>Enter Details for CERTIFICATE</h3>
        <svg width="100%" height="100%">
          <path className="hidden" d="M0 0 H200 V200 H0 Z"></path>
        </svg>
        <input placeholder="Full Name" required type="text" name="Full_Name" />

        <div className="hidden-fields">
          <input
            required
            type="email"
            name="Email"
            defaultValue={currentEmail}
            placeholder="example@mail.com"
          />
        </div>
        <div className="hidden-fields">
          <label>Course Name</label>
          <input
            defaultValue={courseName}
            type="text"
            name="Course_Name"
            placeholder="Course Name"
          />
        </div>

        <div className="hidden-fields">
          <label>Issue Date</label>
          <input
            defaultValue={output}
            type="text"
            name="Issue_Date"
            placeholder="Issue Date"
          />
        </div>

        <div className="hidden-fields">
          <label>Serial Number</label>
          <input
            defaultValue={serialNum}
            type="text"
            name="Serial_Number"
            placeholder="Serial Number"
          />
        </div>
        <button id="submit-form" type="submit">
          Submit!
        </button>
        <h4>{message}</h4>
      </form>
    </div>
  );
};

export default Certificate;
