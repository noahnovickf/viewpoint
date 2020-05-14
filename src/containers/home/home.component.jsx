import React, { useEffect, useState } from "react";

import { auth } from "database";

import { fetchPosts } from "database/posts";

import { useSelector } from "react-redux";
import { POINT_CONVERSION_COMPRESSED } from "constants";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const userFromState = useSelector((state) => state.users.user);

  const signOut = () => {
    auth.signOut();
    props.logoutThunk();
  };
  const postsFromState = useSelector((state) => state.posts);

  useEffect(() => {
    props.getAllPostsToRenderThunk();
    setPosts(postsFromState);
  }, [posts]);

  let displayPost;

  if (postsFromState.posts.length > 0) {
    displayPost = postsFromState.posts.map((post) => {
      return <h1>{post.body}</h1>;
    });
  }
  return (
    <div>
      <h1 className="flex justify-center">
        {userFromState.full_name} is logged in with the username:
        {userFromState.username}
      </h1>
      <button className="bg-blue w-full bg-red-600" onClick={signOut}>
        Sign out
      </button>
      <div>{displayPost}</div>
    </div>
  );
};

export default Home;
