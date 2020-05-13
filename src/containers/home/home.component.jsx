import React from "react";

import { auth } from "database";

import { fetchPosts } from "database/posts";

import { useSelector } from "react-redux";

const Home = (props) => {
  const userFromState = useSelector((state) => state.users.user);

  const signOut = () => {
    auth.signOut();
    props.logoutThunk();
  };

  return (
    <div>
      <h1 className="flex justify-center">
        {userFromState.full_name} is logged in with the username:
        {userFromState.username}
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
    </div>
  );
};

export default Home;
