import { connect } from "react-redux";
import { addUsernameToState, uploadProfileAvatar } from "store/thunks/users";
import Profile from "./profile.component";

const mapDispatchToProps = (dispatch) => ({
  addUsernameToStateThunk: (data) => dispatch(addUsernameToState(data)),
  uploadProfileAvatarThunk: ({ image, username }) =>
    dispatch(uploadProfileAvatar({ image, username })),
});

export default connect(null, mapDispatchToProps)(Profile);
