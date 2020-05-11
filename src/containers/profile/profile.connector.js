import { connect } from "react-redux";
import { username } from "store/thunks/users";
import Profile from "./profile.component";

const mapDispatchToProps = (dispatch) => ({
  usernameThunk: (data) => dispatch(username(data)),
});

export default connect(null, mapDispatchToProps)(Profile);
