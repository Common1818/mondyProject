export const courseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        errorCode: action.errorCode,
      };
    case "FETCH_COURSES":
      return {
        ...state,
        courses: action.courses,
      };

    case "EDIT_COURSE":
      return {
        ...state,
        error: action.error,
        errorCode: action.errorCode,
      };

    case "DELETE_COURSE":
      return {
        ...state,
        errorCode: action.errCode,
      };

    case "ADD_COURSE_VIDEO":
      return {
        ...state,
        errorCode: action.errorCode,
      };

    case "ADD_COURSE_TOPIC":
      return {
        ...state,
        errorCode: action.errorCode,
      };

    default:
      return state;
  }
};
