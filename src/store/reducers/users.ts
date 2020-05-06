const INTIAL_USER_STATE = {
  user: {},
};

export default (state = INTIAL_USER_STATE, action) => {
  switch (action.type) {
    case "USER_FETCHED":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
