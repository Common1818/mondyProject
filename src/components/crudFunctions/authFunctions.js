const firebase = require("firebase");
var provider = new firebase.auth.GoogleAuthProvider();
require("firebase/functions");

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
    })
    .catch((err) => {
      dispatch({
        type: "LOGIN",
        loginCode: 100,
        errorMessage: "Error Logging In",
      });
      return "problem";
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
          const functions = firebase.functions();
          const sendEmail = functions.httpsCallable("sendEmail");
          const data = {
            email: props.email,
            subject: "Hey There !!!",
            text: "You are now signed up for Marketing Acad ",
          };
          sendEmail(data)
            .then((res) => {})
            .catch((err) => {});

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
    });
};

export const LoginWithGoogle = (dispatch) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const functions = firebase.functions();
      const sendEmail = functions.httpsCallable("sendEmail");
      const data = {
        email: result.user.email,
        subject: "Hey There !!!",
        text: "You are now Logged in to Marketing Acad ",
      };
      sendEmail(data)
        .then((res) => {})
        .catch((err) => {});

      dispatch({
        type: "LOGIN",
        loginCode: 200,
        errorMessage: null,
      });
    })
    .catch(function (error) {
      dispatch({
        type: "LOGIN",
        loginCode: 100,
        errorMessage: "Error Logging In",
      });
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
