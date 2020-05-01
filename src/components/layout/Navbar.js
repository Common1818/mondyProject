/* eslint-disable */
import React, { useEffect, useContext } from "react";
import "./css/Navbar.css";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import $ from "jquery";
import firebase from "../../config/fbConfig";
import { AuthContext } from "../../contexts/authContext";
import { getAuth } from "../crudFunctions/authFunctions";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { authState } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const userName = authState && authState.displayName;

  // const [auth, setAuth] = useState(uid);
  // useEffect(() => {
  //   // window.location.reload();
  // }, [auth]);

  useEffect(() => {
    getAuth(dispatch);
  }, []);

  useEffect(() => {
    var yourNavigation = $(".nav");
    const stickyDiv = "sticky";
    const yourHeader = $(".header").height();
    const width = window.innerWidth;
    if (width >= 660) {
      $(".hamBurg-cont").addClass("hide-hamburg");
      $(".collapse").addClass("show");

      $(window).scroll(function () {
        if ($(this).scrollTop() > yourHeader) {
          yourNavigation.addClass(stickyDiv);
        } else {
          yourNavigation.removeClass(stickyDiv);
        }
      });
    }
    if (width < 600) {
      $(".nav").css("flex-direction", "column");
    }

    $(window).resize(() => {
      if (window.innerWidth >= 660) {
        $(".collapse").addClass("show");
        $(".hamBurg-cont").addClass("hide-hamburg");
        $(".nav").css("flex-direction", "row");
        $(window).scroll(function () {
          if ($(this).scrollTop() > yourHeader) {
            yourNavigation.addClass(stickyDiv);
          } else {
            yourNavigation.removeClass(stickyDiv);
          }
        });
      }
      if (window.innerWidth < 660) {
        $(".hamBurg-cont").removeClass("hide-hamburg");
        $(".nav").css("flex-direction", "column");
      }
    });

    $(window).on("orientationchange", function (event) {
      if (width >= 660) {
        $(".hamBurg-cont").addClass("hide-hamburg");
        $(".collapse").addClass("show");

        $(window).scroll(function () {
          if ($(this).scrollTop() > yourHeader) {
            yourNavigation.addClass(stickyDiv);
          } else {
            yourNavigation.removeClass(stickyDiv);
          }
        });
      }
      if (width < 600) {
        $(".nav").css("flex-direction", "column");
        $(window).scroll(function () {
          if ($(this).scrollTop() > yourHeader) {
            yourNavigation.removeClass(stickyDiv);
          }
        });
      }
    });
  });

  var loginCode;
  if (authState !== null) {
    loginCode = 200;
  } else {
    loginCode = 100;
  }

  return (
    <div className="nav-container">
      {userName ? (
        <h5 style={{ fontFamily: "Dosis", padding: "10px" }}>Hi {userName},</h5>
      ) : null}
      <div className="header">
        <div className="header-content">
          <div className="header-content-flex">
            <NavLink to="/">
              <div className="header-logo">
                <img
                  src="https://www.svgrepo.com/show/154629/big-owl.svg"
                  alt=""
                />
              </div>
            </NavLink>
            <div className="header-logo-name">
              <span className="logo-name">Marketing Acad</span>
              <br />
              <span className="logo-motto">Learning is free here</span>
            </div>
          </div>
        </div>
      </div>

      {loginCode === 200 ? <SignedInLinks /> : <SignedOutLinks />}
    </div>
  );
};

export default Navbar;
