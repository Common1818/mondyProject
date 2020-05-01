export const topicReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TOPICS":
      return {
        ...state,
        topics: action.topics,
      };

    default:
      return state;
  }
};
