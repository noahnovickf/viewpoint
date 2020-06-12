const INTIAL_USER_STATE = {
  user: {
    email: "",
    username: "",
    posts: [],
    full_name: "",
    avatar_link: "",
    id: "",
  },
};

export default (state = INTIAL_USER_STATE, action) => {
  switch (action.type) {
    case "USER_SIGNED_IN":
      return {
        ...state,
        user: action.payload,
      };
    case "USER_AVATAR_FETCHED":
      return {
        ...state,
        user: {
          ...state.user,
          avatar_link: action.payload,
        },
      };
    case "USER_LOGOUT":
      return {
        ...state,
        user: INTIAL_USER_STATE.user,
      };
    default:
      return state;
  }
};
