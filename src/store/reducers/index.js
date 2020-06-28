import { combineReducers } from "redux";
import users from "store/reducers/users";
import posts from "store/reducers/posts";
import sidebarView from "store/reducers/sidebarView";

// List of all the objects in the global Redux state
export default combineReducers({
  users,
  posts,
  sidebarView,
});
