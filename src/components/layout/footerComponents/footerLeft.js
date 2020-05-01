import React from "react";
import { NavLink } from "react-router-dom";

const FooterLeft = () => {
  return (
    <div className="footer-left">
      <h3 style={{ fontFamily: "Dosis" }}>
        Marketing
        <span style={{ fontFamily: "Dosis" }}> Acad</span>
        <span>
          {" "}
          <img
            width="50px"
            src="https://www.svgrepo.com/show/154629/big-owl.svg"
            alt=""
          />
        </span>
      </h3>

      <p className="footer-links">
        <NavLink to="/" className="link-1">
          Home
        </NavLink>

        <NavLink to="/courses">Courses</NavLink>

        <NavLink to="/blog">Blog</NavLink>
      </p>

      <p className="footer-company-name">Marketing Acad © 2020</p>
    </div>
  );
};

export default FooterLeft;
