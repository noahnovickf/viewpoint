import { connect } from "react-redux";
import Home from "./home.component";
import { logout } from "store/thunks/users";
import { getAllPostsToRender } from "store/thunks/posts";

const mapDispatchToProps = (dispatch) => ({
  logoutThunk: () => dispatch(logout()),
  getAllPostsToRenderThunk: () => dispatch(getAllPostsToRender()),
});

export default connect(null, mapDispatchToProps)(Home);
