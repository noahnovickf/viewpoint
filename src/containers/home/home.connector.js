import { connect } from "react-redux";
import Home from "./home.component";
import { signInWithGoogle } from "store/thunks/users";

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogleThunk: () => dispatch(signInWithGoogle()),
});

export default connect(null, mapDispatchToProps)(Home);
