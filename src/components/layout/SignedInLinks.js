import React, { useContext, useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Accordion, Button } from "react-bootstrap";
import { signOut } from "../crudFunctions/authFunctions";
import { AuthContext } from "../../contexts/authContext";
import $ from "jquery";
import { AdminContext } from "../../contexts/adminContext";
import { isAdmin } from "../crudFunctions/adminFunctions";

const SignedInLinks = (props) => {
  const [loggedOut, setLoggedOut] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const handleSignout = (props) => {
    signOut(dispatch);
    setLoggedOut(true);
  };

  if (loggedOut == true) {
    window.location.reload();
  }

  const { adminData, dispatch2 } = useContext(AdminContext);
  useEffect(() => {
    isAdmin(dispatch2);
  }, []);
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
                <NavLink to="/livestream">LiveSession</NavLink>
              </div>

              <div className="extra-links">
                <a id="logout-btn" onClick={handleSignout}>
                  Logout
                </a>
              </div>
              {adminData.isAdmin ? (
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
