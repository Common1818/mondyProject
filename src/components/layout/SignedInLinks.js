/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Accordion, Button } from "react-bootstrap";
import { signOut } from "../crudFunctions/authFunctions";
import { AuthContext } from "../../contexts/authContext";
import $ from "jquery";

const SignedInLinks = (props) => {
  const [loggedOut, setLoggedOut] = useState(false);
  const { dispatch, isAdmin } = useContext(AuthContext);
  // const [loginCode,setLoginCode] = useState(200)

  useEffect(() => {
    $(".hamBurg-cont button").click(function () {

      $(".nav-icon1").toggleClass("open");
      $("html, body").animate({ scrollTop: 410 }, 600);
      
    });
  }, []);

  const handleSignout = (props) => {
    signOut(dispatch);
    setLoggedOut(true);
  };

  if (loggedOut === true) {
    window.location.reload();
  }

  // const { adminData, dispatch2 } = useContext(AdminContext);
  // useEffect(() => {
  //   isAdmin(dispatch2);
  // }, []);
  return (
    <div>
      <div className="">
        <Accordion className="" defaultActiveKey="">
          <div className="hamBurg-cont">
            <Accordion.Toggle
              as={Button}
              className="hamBurg"
              variant="link"
              eventKey="13"
            >
              <div className="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Accordion.Toggle>
          </div>
          <Accordion.Collapse className="" eventKey="13">
            <div className="nav">
              <div className="main-links">
                <NavLink to="/">Home</NavLink>
              </div>

              <div className="main-links">
                <NavLink to="/courses">Courses</NavLink>
              </div>

              <div className="main-links">
                <NavLink to="/blog">Blog</NavLink>
              </div>

              <div className="extra-links">
                <NavLink to="/livestream">LiveSession</NavLink>
              </div>

              <div className="extra-links">
                <a href="/" id="logout-btn" onClick={handleSignout}>
                  Logout
                </a>
              </div>
              {isAdmin ? (
                <div className="extra-links">
                  <NavLink to="/adminpanel">
                    <i className="fas fa-tools"></i>
                  </NavLink>
                </div>
              ) : null}
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </div>
  );
};

export default SignedInLinks;
