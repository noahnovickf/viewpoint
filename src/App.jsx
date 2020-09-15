import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import firebase from "firebase";

import CreatePost from "containers/create-post";
import Home from "containers/home";
import Login from "containers/login";
import ProtectedRoute from "containers/protected-route";
import { addUserToState, handleNewUserSignup } from "store/thunks/users";
import Sidebar from "containers/sidebar";
import { sidebarView } from "store/thunks/sidebarView";
import { logout } from "store/thunks/users";

function App({
  addUserToStateThunk,
  handleNewUserSignupThunk,
  logoutThunk,
  sidebarViewThunk,
}) {
  const [isUserLoading, setIsUserLoading] = useState(true);
  useEffect(() => {
    //on authstate changed
    const firebaseListener = firebase
      .auth()
      .onAuthStateChanged(function (user) {
        if (user) {
          addUserToStateThunk(user);
        }
        firebase
          .auth()
          .getRedirectResult()
          .then((res) => {
            setIsUserLoading(false);
            if (res.user) {
              if (res.additionalUserInfo.isNewUser) {
                handleNewUserSignupThunk(res);
              } else {
                addUserToStateThunk(user);
              }
            }
          });
        setIsUserLoading(false);
      });
    return () => {
      firebaseListener();
    };
  }, []);

  if (isUserLoading)
    return (
      <div className="h-screen w-screen bg-blueGray text-grayy flex justify-center items-center text-xl  tracking-wide">
        Loading...
      </div>
    );

  return (
    <Router>
      <div>
        {/* Protected Routes */}
        <ProtectedRoute exact path="/" component={Home} view={"home"} />
        <ProtectedRoute
          path="/create-post"
          component={CreatePost}
          sidebarToggle={sidebarViewThunk}
          logout={logoutThunk}
        />

        <ProtectedRoute
          path="/user/:username/posts"
          component={Home}
          view={"userPosts"}
        />
        <ProtectedRoute
          path="/user/:username/vote-history"
          component={Home}
          view={"voteHistory"}
        />
        {/* Public Routes */}
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addUserToStateThunk: (user) => dispatch(addUserToState(user)),
  handleNewUserSignupThunk: (userObject) =>
    dispatch(handleNewUserSignup(userObject)),
  logoutThunk: () => dispatch(logout()),
  sidebarViewThunk: ({ toggleView }) => dispatch(sidebarView({ toggleView })),
});

export default connect(null, mapDispatchToProps)(App);
