import { connect } from "react-redux";
import Sidebar from "./sidebar.component";
import { logout } from "store/thunks/users";

const mapDispatchToProps = (dispatch) => ({
  logoutThunk: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Sidebar);
