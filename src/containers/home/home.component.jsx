import React from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";

import SampleDummy from "components/sampleDummy";

const Home = (props) => {
  const { fetchUserThunk } = props;

  // This is how to fetch data from the global state
  const users = useSelector((state) => state.users.user);

  //google sign in code
  var provider = new firebase.auth.GoogleAuthProvider();

  const googleSignUp = () => {
    console.log("logging in...");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          console.log(user);
        });
      });
  };

  const getUserInfo = () => {
    console.log("pressed");
    console.log(firebase.auth().currentUser);
  };

  if (true) {
    return (
      <div className="w-full max-w-md">
        <div className="flex justify-center">{JSON.stringify(users)}</div>
        <button
          className="bg-blue w-full bg-orange-600"
          onClick={fetchUserThunk}
        >
          FETCH A USER
        </button>

        {/* Use of presentational components
         * Simply pass down props and display UI
         */}
        <SampleDummy text="Sample Text" />
        <div className="m-10">
          <button onClick={googleSignUp}>Sign up with google</button>
        </div>
        <div className="m-10">
          <button onClick={getUserInfo}>get Current user</button>
        </div>
      </div>
    );
  } else {
    return <h2>HI</h2>;
  }
};

export default Home;
