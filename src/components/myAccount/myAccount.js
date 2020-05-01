import React, { useEffect, useContext, useState } from "react";
import "./css/myAccount.css";
import { Row, Col, Button } from "react-bootstrap";
const firebase = require("firebase");

const MyAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(firebase.auth().currentUser);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        user.providerData.forEach(function (profile) {
          setName(profile.displayName);
          setEmail(profile.email);
        });
      } else {
        console.log("no user");
      }
    });
  }, []);

  console.log(email, name);

  return (
    <div className="my-account-container ">
      <div>
        <h2>Your Account</h2>
      </div>
      <div>
        <h3>Hello, {name} !!</h3>
      </div>
      <div className="my-account-content">
        <Row>
          <Col sm={2}></Col>
          <Col className="profile-fields" sm={8}>
            <div className="field">
              <div className="f">
                Registered Email : <span className="text-primary">{email}</span>
              </div>
              <button className=" centerMe">
                <div className="icon">
                  <i className="fa fa-sync"></i>
                </div>
                <div className="text">
                  <span>Update Email</span>
                </div>
              </button>
            </div>

            <div className="field">
              <div className="f">
                Display Name : <span className="text-primary">{name}</span>
              </div>
              <button className=" centerMe">
                <div className="icon">
                  <i className="fa fa-sync"></i>
                </div>
                <div className="text">
                  <span>Update Name</span>
                </div>
              </button>
            </div>
            <div className="field">
              <Button type="primary">Change Password</Button>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </div>
    </div>
  );
};

export default MyAccount;
