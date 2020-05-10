import { connect } from "react-redux";
import Home from "./home.component";
import { logout } from "store/thunks/users";

const mapDispatchToProps = (dispatch) => ({
  logoutThunk: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Home);
