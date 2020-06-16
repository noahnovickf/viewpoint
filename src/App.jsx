import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import firebase from "firebase";

import CreatePost from "containers/create-post";
import Home from "containers/home";
import Login from "containers/login";
import ProtectedRoute from "containers/protected-route";
import { addUserToState, handleNewUser } from "store/thunks/users";

function App(props) {
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    //on authstate changed
    const firebaseListener = firebase
      .auth()
      .onAuthStateChanged(function (user) {
        firebase
          .auth()
          .getRedirectResult()
          .then((res) => {
            setIsUserLoading(true);
            if (res.user) {
              if (res.additionalUserInfo.isNewUser) {
                props.handleNewUserThunk(res);
              } else {
                props.addUserToStateThunk(user);
              }
            }
          });
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
  handleNewUserThunk: (userObject) => dispatch(handleNewUser(userObject)),
});

export default connect(null, mapDispatchToProps)(App);
