const INITIAL_POST_STATE = {
  posts: [],
};

export default (state = INITIAL_POST_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
