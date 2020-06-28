import { connect } from "react-redux";
import Home from "./home.component";

import { fetchPosts } from "store/thunks/posts";
import { fetchUserAvatar } from "store/thunks/users";

const mapDispatchToProps = (dispatch) => ({
  fetchPostsThunk: ({ sortBy }) => dispatch(fetchPosts({ sortBy })),
  fetchUserAvatarThunk: ({ username }) =>
    dispatch(fetchUserAvatar({ username })),
});

export default connect(null, mapDispatchToProps)(Home);
