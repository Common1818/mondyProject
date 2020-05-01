import React, { createContext, useReducer, useEffect } from "react";
import { certificateReducer } from "../reducers/certificateReducer";
import { getCertificates } from "../components/crudFunctions/certificateFunctions";

export const CertificateContext = createContext();
const initState = {
  error: null,
};

const CertificateContextProvider = (props) => {
  const [certificates, dispatch] = useReducer(certificateReducer, initState);
  useEffect(() => {
    getCertificates(dispatch);
  }, []);
  return (
    <CertificateContext.Provider value={{ certificates, dispatch }}>
      {props.children}
    </CertificateContext.Provider>
  );
};

export default CertificateContextProvider;
