import React from "react";
import "./Preloader.css";

const Preloader = (props) => {
  return (
    <div className="PreloaderContainer">
      <h1 className="mt-5">BOOTING UP</h1>
      <div className="logo-image">
        <img
          src="https://www.svgrepo.com/show/154629/big-owl.svg"
          width="100px"
          alt=""
        />
      </div>
      <ul className="loader">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Preloader;
