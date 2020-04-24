import React, { createContext, useReducer, useEffect } from "react";
import { blogReducer } from "../reducers/blogReducer";
import { getContent } from "../components/crudFunctions/blogFunctions";

export const BlogContext = createContext();

const initState = {
  error: null,
};

const BlogContextProvider = (props) => {
  const [content, dispatch] = useReducer(blogReducer, initState);
  useEffect(() => {
    getContent(dispatch);
  }, []);
  return (
    <BlogContext.Provider value={{ content, dispatch }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
