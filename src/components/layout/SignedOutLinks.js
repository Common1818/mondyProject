import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <div className="">
        <Accordion className="" defaultActiveKey="13">
          <div className="hamBurg-cont">
            <Accordion.Toggle
              as={Button}
              className="hamBurg"
              variant="link"
              eventKey="13"
            >
              <i className="fa fa-bars"></i>
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
