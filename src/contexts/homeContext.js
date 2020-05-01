import React, { createContext, useReducer, useEffect } from "react";
import { homeReducer } from "../reducers/homeReducer";
import { getContent } from "../components/crudFunctions/homePageFunctions";

export const HomeContext = createContext();
const initState = {
  error: null,
  isReady: false,
};

const HomeContextProvider = (props) => {
  const [content, dispatch] = useReducer(homeReducer, initState);
  useEffect(() => {
    getContent(dispatch);
  }, []);
  return (
    <HomeContext.Provider value={{ content, dispatch }}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
