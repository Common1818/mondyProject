export const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return {
        ...state,
        errCode: action.errCode,
      };

    case "FETCH_BLOG_CONTENT":
      return {
        ...state,
        content: action.content,
      };

    case "EDIT_BLOG_ARTICLE":
      return {
        ...state,
        error: action.error,
        errorCode: action.errorCode,
      };

    case "DELETE_BLOG_ARTICLE":
      return {
        ...state,
        errCode: action.errCode,
      };

    default:
      return state;
  }
};
