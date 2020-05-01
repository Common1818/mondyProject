export const videoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return {
        ...state,
        videos: action.videos,
      };
    default:
      return state;
  }
};
