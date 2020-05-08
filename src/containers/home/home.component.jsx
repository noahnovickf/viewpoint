import React from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";

import SampleDummy from "components/sampleDummy";

const Home = (props) => {
  const { fetchUserThunk } = props;

  // This is how to fetch data from the global state
  const user = useSelector((state) => state.users.user);

  //google sign in code
  var provider = new firebase.auth.GoogleAuthProvider();

  const googleSignUp = () => {
    console.log("logging in...");
    firebase.auth().signInWithRedirect(provider);
    //should be what goes after ^
    firebase
      .auth()
      .getRedirectResult()
      .then(function (result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
        console.log(user);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-center">{JSON.stringify(user)}</div>
      <button className="bg-blue w-full bg-orange-600" onClick={fetchUserThunk}>
        FETCH A USER
      </button>

      {/* Use of presentational components
       * Simply pass down props and display UI
       */}
      <SampleDummy text="Sample Text" />
      <button onClick={googleSignUp}>Sign up with google</button>
    </div>
  );
};

export default Home;
