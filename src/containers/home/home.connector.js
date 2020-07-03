import { connect } from "react-redux";
import Home from "./home.component";

import { fetchPosts } from "store/thunks/posts";
import { fetchUserAvatar } from "store/thunks/users";
import { sidebarView } from "store/thunks/sidebarView";
import { logout } from "store/thunks/users";

const mapDispatchToProps = (dispatch) => ({
  fetchPostsThunk: ({ sortBy }) => dispatch(fetchPosts({ sortBy })),
  fetchUserAvatarThunk: ({ username }) =>
    dispatch(fetchUserAvatar({ username })),
  sidebarViewThunk: ({ toggleView }) => dispatch(sidebarView({ toggleView })),
  logoutThunk: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Home);
