import React, { createContext, useReducer, useEffect } from "react";
import { footerReducer } from "../reducers/footerReducer";
import { getFooter } from "../components/crudFunctions/footerFunctions";

export const FooterContext = createContext();
const initState = {
  error: null,
};

const FooterContextProvider = (props) => {
  const [content, dispatch] = useReducer(footerReducer, initState);
  useEffect(() => {
    getFooter(dispatch);
  }, []);

  return (
    <FooterContext.Provider value={{ content, dispatch }}>
      {props.children}
    </FooterContext.Provider>
  );
};

export default FooterContextProvider;
