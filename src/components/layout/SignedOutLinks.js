import React, { useEffect } from "react";
import { Accordion, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import $ from "jquery";

const SignedOutLinks = () => {
  useEffect(() => {
    $(".hamBurg-cont button").click(function () {
      $(".nav-icon1").toggleClass("open");

      $("html, body").animate({ scrollTop: 410 }, 600);
    });
  }, []);

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
                <NavLink to="/login">LogIn</NavLink>
              </div>
              <div className="extra-links">
                <NavLink to="/signup">SignUp</NavLink>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </div>
  );
};

export default SignedOutLinks;
