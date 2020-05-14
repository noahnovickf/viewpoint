import React from "react";

const Login = (props) => {

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
export default Login;
