const firebase = require("firebase");
var provider = new firebase.auth.GoogleAuthProvider();

export const getAuth = (dispatch) => {
  const uid = firebase.auth().currentUser && firebase.auth().currentUser.uid;
  if (uid != null) {
    dispatch({
      type: "LOGIN",
      loginCode: 200,
    });
  } else {
    dispatch({
      type: "LOGIN",
      loginCode: 100,
    });
  }
};

export const signIn = (email, password, dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: "LOGIN",
        loginCode: 200,
        errorMessage: null,
      });
      console.log("logged in successfully");
    })
    .catch((err) => {
      dispatch({
        type: "LOGIN",
        loginCode: 100,
        errorMessage: "Error Logging In",
      });
      console.log("error logging in ");
    });
};

export const signUp = (props, dispatch) => {
  const firestore = firebase.firestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(props.email, props.password)
    .then((res) => {
      return firestore
        .collection("Users")
        .doc(res.user.uid)
        .set({
          firstName: props.firstName,
          lastName: props.lastName,
          initials: props.firstName[0] + props.lastName[0],
        });
    })
    .then(() => {
      var user = firebase.auth().currentUser;
      user
        .updateProfile({
          displayName: props.firstName + " " + props.lastName,
        })
        .then(() => {
          dispatch({
            type: "SIGN_UP",
            loginCode: 200,
            errorMessage: null,
          });
        })
        .catch((err) => {
          dispatch({
            type: "SIGN_UP",
            loginCode: 100,
            errorMessage: "Error signing Up",
          });
        });
    });
};

export const signOut = (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logged out successfully");
      dispatch({
        type: "LOGOUT",
        loginCode: 100,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOGOUT",
        loginError: "Error Logging In",
      });
      console.log(err, "error logging out ");
    });
};

export const LoginWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log("login success");
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log("login error");
    });
};

export const forgetPassword = (email, dispatch) => {
  var auth = firebase.auth();

  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      dispatch({
        type: "PASSWORD_RESET",
        ResetMessage:
          "An email has been sent to you, containing Password Reset Link",
      });
    })
    .catch(function (error) {
      dispatch({
        type: "PASSWORD_RESET",
        ResetMessage: "Error sending Email",
      });
    });
};
