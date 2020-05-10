import React, { useEffect, useState } from "react";

import { auth } from "database";

import { fetchPosts } from "database/posts";
import { addPost } from "database/addPost";

import { useSelector } from "react-redux";

const Home = (props) => {
  const [user, setUser] = useState({});
  const userFromState = useSelector((state) => state.users.user);

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

  const signOut = () => {
    auth.signOut();
    props.logoutThunk();
  };
  return !userFromState.full_name ? (
    <div className="flex flex-col justify-center w-full max-w-md">
      <div className="flex justify-center">
        {userFromState.full_name
          ? userFromState.full_name
          : "Please sign in with google"}
      </div>
      <button
        className="bg-blue w-full bg-blue-600 mb-2"
        onClick={props.signInWithGoogleThunk}
      >
        Sign in With Google
      </button>
    </div>
  ) : (
    <div>
      <h1 className="flex justify-center">
        {userFromState.full_name} is logged in.
      </h1>
      <button className="bg-blue w-full bg-red-600" onClick={signOut}>
        Sign out
      </button>
      <button
        className="bg-blue w-full bg-orange-600 mt-2"
        onClick={fetchPosts}
      >
        get posts
      </button>

      <input
        id="post"
        className="border flex justify-center"
        type="text"
        placeholder="Type some post"
      ></input>
      <button
        className="bg-blue w-full bg-purple-600 mt-2"
        onClick={() => {
          addPost(document.getElementById("post").value);
        }}
      >
        POST IT
      </button>
    </div>
  );
};

export default Home;
