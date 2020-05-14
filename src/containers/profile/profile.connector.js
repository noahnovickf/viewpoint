import { connect } from "react-redux";
import { addUsernameToState } from "store/thunks/users";
import Profile from "./profile.component";

const mapDispatchToProps = (dispatch) => ({
  addUsernameToStateThunk: (data) => dispatch(addUsernameToState(data)),
});

export default connect(null, mapDispatchToProps)(Profile);
