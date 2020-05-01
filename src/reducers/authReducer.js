export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loginCode: action.loginCode,
        errorMessage: action.errorMessage,
        isReady: true,
      };
    case "LOGOUT":
      return {
        ...state,
        loginCode: action.loginCode,
        loginError: action.loginError,
      };
    case "SIGN_UP":
      return {
        ...state,
        loginCode: action.loginCode,
        errorMessage: action.errorMessage,
      };

    case "PASSWORD_RESET":
      return {
        ...state,
        ResetMessage: action.ResetMessage,
      };

    default:
      return state;
  }
};
