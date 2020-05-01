/* eslint-disable */
import React, { useState, useContext } from "react";
import { CertificateContext } from "../../contexts/certificateContext";
import "./css/verifyPage.css";

const VerifyCertificate = () => {
  const { certificates } = useContext(CertificateContext);
  const allCertificates = certificates.certificates;
  const [serialNumInput, setSerialNum] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleCheck = () => {
    allCertificates &&
      allCertificates.every((certificate) => {
        if (certificate.serialNum === serialNumInput) {
          setImageUrl("https://www.svgrepo.com/show/286749/check.svg");
          setMessage(
            `This Certificate Is Verified and Authentic and was issued to "${certificate.userName}"`
          );
          console.log(certificate.currentEmail);
          return false;
        }
        if (certificate.serialNum !== serialNumInput) {
          setImageUrl("https://www.svgrepo.com/show/286696/cross.svg");
          setMessage(
            "Your Certificate Code is Invalid, Did you enter Correct Code? Try Again"
          );
          return true;
        }
        return null;
      });

    console.log(imageUrl, message);
  };

  return (
    <div className="verify-container">
      <h2 id="validate">Validate Your Certificate</h2>
      <div className="container">
        <input
          onChange={(e) => {
            setSerialNum(e.target.value);
          }}
          id="searchBar"
          className="searchbar"
          type="text"
          placeholder="Your Certificate Code"
        ></input>
        <a id="btnSearch" className="btn-search">
          <button onClick={handleCheck}>
            {" "}
            <i className="fa fa-search"></i>
          </button>
        </a>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="search-result">
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt="" />
            ) : (
              <img
                src="https://www.svgrepo.com/show/100046/certificate.svg"
                alt=""
              />
            )}
          </div>
          <div>
            {message ? (
              <h3>{message}</h3>
            ) : (
              <h3>
                Enter Your Unique Certificate code to check whether it is valid
                or not
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
