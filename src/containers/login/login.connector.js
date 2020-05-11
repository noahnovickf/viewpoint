import { connect } from "react-redux";
import { signInWithGoogle } from "store/thunks/users";
import Login from "./login.component";

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogleThunk: () => dispatch(signInWithGoogle()),
});

export default connect(null, mapDispatchToProps)(Login);
