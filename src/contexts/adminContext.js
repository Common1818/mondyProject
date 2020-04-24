import React, { createContext, useReducer } from "react";
import { adminReducer } from "../reducers/adminReducer";

export const AdminContext = createContext();

const initState = {
  error: null,
};

const AdminContextProvider = (props) => {
  const [adminData, dispatch2] = useReducer(adminReducer, initState);

  return (
    <AdminContext.Provider value={{ adminData, dispatch2 }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
