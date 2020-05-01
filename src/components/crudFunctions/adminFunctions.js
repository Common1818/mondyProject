const firebase = require("firebase");
// var provider = new firebase.auth.GoogleAuthProvider();

export const isAdmin = (dispatch) => {
  // firebase
  //   .auth()
  //   .currentUser.getIdTokenResult(true)
  // .then((idTokenResult) => {
  //   const isAdmin = idTokenResult.claims.admin;
  //   dispatch({ type: "CHECKING_ADMIN", isAdmin });
  // })
  //   .catch((err) => {
  //     dispatch({ type: "ERROR_CHECKING_ADMIN", err: "error making admin" });
  //   });
  console.log(firebase.auth());
};

// export const displayAdminMessage = (dispatch, message) => {
//   dispatch({
//     type: "DISPLAY_ADMIN_MESSAGE",
//     message: message,
//   });
// };
