export const footerReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FOOTER":
      return {
        ...state,
        content: action.content,
      };

    case "EDIT_FOOTER":
      return {
        ...state,
        errorCode: action.errorCode,
      };

    default:
      return state;
  }
};
