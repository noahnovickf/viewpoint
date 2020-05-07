import { combineReducers } from "redux";
import users from "store/reducers/users";

// List of all the objects in the global Redux state
export default combineReducers({
  users,
});
