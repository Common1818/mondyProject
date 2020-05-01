import React, { useContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./css/signUp.css";
import { NavLink, Redirect } from "react-router-dom";
import { signUp, LoginWithGoogle } from "../crudFunctions/authFunctions";
import { AuthContext } from "../../contexts/authContext";
import $ from "jquery";

const SignUp = () => {
  const { authData, dispatch } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    LoginWithGoogle(dispatch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    $(".spinner").css("display", "block");
    setLoading(true);
    signUp({ firstName, lastName, email, password }, dispatch);
  };
  var status = authData.errorMessage;

  if (authData.loginCode === 200) return <Redirect to="/" />;
  return (
    <div className="login-form-container">
      <div className="login-div">
        <div className="logo">
          <img src="https://www.svgrepo.com/show/154629/big-owl.svg" alt="" />
        </div>
        <div className="title">Sign Up For Martketing Acad</div>

        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="username">
              <svg fill="#999" className="svg-icon" viewBox="0 0 20 20">
                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
              </svg>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="user-input"
                required
                placeholder="First Name"
              />
            </div>
            <div className="username">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="#999"
                  d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
	l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
	c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
	c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
	S1.293,9.212,1.729,9.212z"
                ></path>
              </svg>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="user-input"
                required
                placeholder="Last Name"
              />
            </div>

            <div className="username">
              <svg fill="#999" viewBox="0 0 1024 1024">
                <path
                  className="path1"
                  d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
                ></path>
              </svg>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="user-input"
                required
                placeholder="email"
              />
            </div>
            <div className="password">
              <svg fill="#999" viewBox="0 0 1024 1024">
                <path
                  className="path1"
                  d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"
                ></path>
              </svg>
              <input
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="pass-input"
                placeholder="password"
              />
            </div>
          </div>
          <button type="submit" className="signin-button">
            <div className="center">Sign Up</div>
          </button>
          {loading ? (
            <div className=" spinner text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : null}
          <div className="text-danger">{status}</div>
          <div className="link">
            Already a Member ?
            <NavLink className="text-primary" to="/login">
              LogIn
            </NavLink>{" "}
            or
          </div>
          <button
            onClick={handleLoginWithGoogle}
            className="signin-button signin-with-google"
          >
            <div className="center">
              Continue With{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
                className="google-logo"
                alt="Google Logo"
              />
            </div>
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default SignUp;
