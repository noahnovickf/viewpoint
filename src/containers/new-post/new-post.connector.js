import { connect } from "react-redux";
import Post from "./new-post.component";

import { fetchPosts } from "store/thunks/posts";

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, null)(Post);
