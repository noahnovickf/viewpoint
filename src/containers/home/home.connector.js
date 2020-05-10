import { connect } from "react-redux";
import Home from "./home.component";
import { signInWithGoogle, logout } from "store/thunks/users";

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogleThunk: () => dispatch(signInWithGoogle()),
  logoutThunk: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Home);
