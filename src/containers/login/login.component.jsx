import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const isUserLoggedIn = !!useSelector((state) => state.users.user.email);
  if (isUserLoggedIn) props.history.push("/");

  return (
    <div className="flex flex-col justify-center w-full max-w-md">
      <div className="flex justify-center">Please sign in with google</div>
      <button
        className="bg-blue w-full bg-blue-600 mb-2"
        onClick={props.signInWithGoogleThunk}
      >
        Sign in With Google
      </button>
    </div>
  );
};

export default withRouter(Login);
