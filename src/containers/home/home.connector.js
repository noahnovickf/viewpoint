import { connect } from "react-redux";
import Home from "./home.component";
import { logout } from "store/thunks/users";
import { fetchPosts } from "store/thunks/posts";
import { fetchUserAvatar } from "store/thunks/users";

const mapDispatchToProps = (dispatch) => ({
  logoutThunk: () => dispatch(logout()),
  fetchPostsThunk: () => dispatch(fetchPosts()),
  fetchUserAvatarThunk: ({ username }) =>
    dispatch(fetchUserAvatar({ username })),
});

export default connect(null, mapDispatchToProps)(Home);
