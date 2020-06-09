import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import "/Users/user/Desktop/judger/src/styles/login.css";

const Login = (props) => {
  const isUserLoggedIn = !!useSelector((state) => state.users.user.email);
  if (isUserLoggedIn) props.history.push("/");

  return (
    <div className="bg-bluey">
      <h1 className="text-center text-grayy text-xl">Welcome to D-Side</h1>
      <div className="flex justify-center">
        <button onClick={props.signInWithGoogleThunk}>
          <img
            src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png"
            alt="Google"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default withRouter(Login);
