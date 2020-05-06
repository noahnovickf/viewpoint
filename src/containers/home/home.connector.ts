import { connect } from "react-redux";
import Home from "./home.component";
import { fetchUser } from "./../../store/thunks/users";

import { useSelector } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  fetchUserThunk: () => dispatch(fetchUser()),
});

export default connect(null, mapDispatchToProps)(Home);
