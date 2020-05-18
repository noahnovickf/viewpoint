import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import firebase from "firebase";

import CreatePost from "containers/create-post";
import Home from "containers/home";
import Login from "containers/login";
import ProtectedRoute from "containers/protected-route";
import { addUserToState } from "store/thunks/users";

function App(props) {
  const [isUserLoading, setIsUserLoading] = useState(false);

  useEffect(() => {
    //on authstate changed
    const firebaseListener = firebase
      .auth()
      .onAuthStateChanged(function (user) {
        if (user) {
          props.addUserToStateThunk(user);
        }
        setIsUserLoading(true);
      });
    return () => {
      firebaseListener();
    };
  }, []);

  if (!isUserLoading) return <div>LOADING...</div>;

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-post">Create a Post</Link>
          </li>
        </ul>
        {/* Protected Routes */}
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute path="/create-post" component={CreatePost} />
        {/* Public Routes */}
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addUserToStateThunk: (user) => dispatch(addUserToState(user)),
});

export default connect(null, mapDispatchToProps)(App);
