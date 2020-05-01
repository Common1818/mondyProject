import React, { createContext, useReducer, useEffect, useState } from "react";
import { authReducer } from "../reducers/authReducer";
import firebase from "../config/fbConfig";

export const AuthContext = createContext();

const initState = {
  error: null,
  isReady: false,
};

const AuthContextProvider = (props) => {
  const [authData, dispatch] = useReducer(authReducer, initState);
  const [authState, setAuthState] = useState("");
  const [isAdmin, SetisAdmin] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setAuthState(user);
      user &&
        user.getIdTokenResult(true).then((idTokenResult) => {
          const isAdmin = idTokenResult.claims.admin;
          SetisAdmin(isAdmin);
        });
    });
  });

  return (
    <AuthContext.Provider value={{ authData, dispatch, authState, isAdmin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
