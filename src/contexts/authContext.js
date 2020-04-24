import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import { getAuth } from "../components/crudFunctions/authFunctions";

export const AuthContext = createContext();

const initState = {
  error: null,
};

const AuthContextProvider = (props) => {
  const [authData, dispatch] = useReducer(authReducer, initState);

  return (
    <AuthContext.Provider value={{ authData, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
