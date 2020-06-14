import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const isUserLoggedIn = !!useSelector((state) => state.users.user.email);
  if (isUserLoggedIn) props.history.push("/");

  return (
    <div class="bg-blueGray flex flex-col items-center justify-center text-center h-screen  ">
      <div className="">
        <h1 className=" typewriter text-grayy text-center text-xl font-mono">
          Welcome to Undefined.
        </h1>
        <div className="object-center pt-8">
          <button onClick={props.signInWithGoogleThunk}>
            <img
              src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png"
              alt="Google"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
