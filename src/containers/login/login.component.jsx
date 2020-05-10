import React, { useEffect, useState } from "react";
import { auth } from "database";
import { useSelector } from "react-redux";
import Home from "containers/home";

const Login = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged(async (nextUser) => {
      console.log("User changed to: ", nextUser);
      if (auth.currentUser) {
        setUser(auth.currentUser);
      } else {
        setUser({});
      }
    });
  }, []);

  const userFromState = useSelector((state) => state.users.user);

  return !userFromState.fullname ? (
    <div className="flex flex-col justify-center w-full max-w-md">
      <div className="flex justify-center">Please sign in with google</div>
      <button
        className="bg-blue w-full bg-blue-600 mb-2"
        onClick={props.signInWithGoogleThunk}
      >
        Sign in With Google
      </button>
    </div>
  ) : (
    <Home />
  );
};
export default Login;
