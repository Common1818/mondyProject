export const certificateReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CERTIFICATES":
      return {
        ...state,
        certificates: action.certificates,
        errorCode: 200,
      };
    case "FETCH_CERTIFICATE_ERROR":
      return {
        ...state,
        errorCode: 100,
      };
    default:
      return state;
  }
};
