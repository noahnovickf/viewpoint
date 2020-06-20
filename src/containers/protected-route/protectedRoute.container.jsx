import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePost from "containers/create-post";

const ProtectedRoute = (props) => {
  const { component: Component, ...parentProps } = props;
  const isUserLoggedIn = !!useSelector((state) => state.users.user.email);

  return (
    <Route
      {...parentProps}
      render={(props) =>
        isUserLoggedIn ? (
          <Component {...parentProps} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
