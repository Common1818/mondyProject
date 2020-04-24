export const adminReducer = (state, action) => {
  switch (action.type) {
    case "CHECKING_ADMIN":
      console.log("checking admin");
      return {
        ...state,
        isAdmin: action.isAdmin,
      };
    case "ERROR_CHECKING_ADMIN":
      return {
        ...state,
        err: "error making admin",
      };

    // case "DISPLAY_ADMIN_MESSAGE":
    //   return {
    //     ...state,
    //     message: action.message,
    //   };
  }
};
