const INITIAL_POST_STATE = {
  sidebarView: false,
};

export default (state = INITIAL_POST_STATE, action) => {
  switch (action.type) {
    case "TOGGLED_SIDEBAR":
      return {
        ...state,
        sidebarView: action.payload,
      };
    default:
      return state;
  }
};
