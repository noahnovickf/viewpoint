const INTIAL_USER_STATE = {
  user: {
    email: "",
    username: "",
    posts: [],
    full_name: "",
    avatar_link: "",
  },
};

export default (state = INTIAL_USER_STATE, action) => {
  switch (action.type) {
    case "USER_SIGNED_IN":
      return {
        ...state,
        user: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        user: {
          email: "",
          username: "",
          posts: [],
          full_name: "",
          avatar_link: "",
        },
      };
    default:
      return state;
  }
};
