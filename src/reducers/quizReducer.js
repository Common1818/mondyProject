export const quizReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_QUIZES":
      return {
        ...state,
        quizes: action.quizes,
      };
    case "ADD_QUIZ":
      return {
        ...state,
        quizes: action.quizes,
        errorCode: action.errorCode,
      };
    case "DELETE_QUIZ":
      return {
        ...state,
        quizes: action.quizes,
        errorCode: action.errorCode,
      };

    default:
      return state;
  }
};
