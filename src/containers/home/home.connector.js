import { connect } from "react-redux";
import Home from "./home.component";
import { logout } from "store/thunks/users";
import { fetchPosts } from "store/thunks/posts";

const mapDispatchToProps = (dispatch) => ({
  logoutThunk: () => dispatch(logout()),
  fetchPostsThunk: () => dispatch(fetchPosts()),
});

export default connect(null, mapDispatchToProps)(Home);
