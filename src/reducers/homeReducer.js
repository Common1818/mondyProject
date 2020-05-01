export const homeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_HOME_CONTENT":
      return {
        ...state,
        content: action.content,
        isReady: true,
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
      return {
        ...state,

        errorCode: action.errorCode,
      };
    default:
      return state;
  }
};
