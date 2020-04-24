export const homeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_HOME_CONTENT":
      console.log(action.content);
      return {
        ...state,
        content: action.content,
      };

    case "EDIT_CAROUSEL":
      return {
        ...state,

        errorCode: action.errorCode,
      };
    case "EDIT_HOME_VIDEO":
      return {
        ...state,

        errorCode: action.errorCode,
      };
    case "EDIT_USP_SLIDE":
      return {
        ...state,

        errorCode: action.errorCode,
      };
    case "EDIT_STAT_SLIDE":
      console.log(state);
      return {
        ...state,

        errorCode: action.errorCode,
      };
    default:
      return state;
  }
};
