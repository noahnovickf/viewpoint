import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { googleSignInMethod } from "database";

const Login = (props) => {
  const isUserLoggedIn = !!useSelector((state) => state.users.user.email);

  useEffect(() => {
    if (isUserLoggedIn) props.history.push("/");
  });

  return (
    <div className="bg-blueGray flex flex-col items-center justify-center text-center h-screen  ">
      <div className="">
        <h1 className="typewriter text-grayy text-center text-xl ">
          Welcome to ViewPoint.
        </h1>
        <div className="object-center pt-8">
          <button onClick={googleSignInMethod}>
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
