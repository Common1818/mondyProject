import React, { createContext, useReducer, useEffect } from "react";
import { courseReducer } from "../reducers/courseReducer";
import { getCourses } from "../components/crudFunctions/coursesFunctions.js";

export const CourseContext = createContext();
const initState = {
  error: null,
};

const CourseContextProvider = (props) => {
  const [courses, dispatch] = useReducer(courseReducer, initState);
  useEffect(() => {
    getCourses(dispatch);
  }, []);
  return (
    <CourseContext.Provider value={{ courses, dispatch }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
