const INITIAL_POST_STATE = {
  posts: [],
};

export default (state = INITIAL_POST_STATE, action) => {
  switch (action.type) {
    case "POSTS_FETCHED":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
