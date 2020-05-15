import React, { useEffect, useState } from "react";
import { auth } from "database";
import { useSelector } from "react-redux";
import CreatePost from "containers/create-post/create-post.component";
import Post from "containers/post/post.component";

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
      return (
        <Post
          body={post.body}
          up={post.up}
          down={post.down}
          created_at={post.created_at}
          id={post.id}
        />
      );
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
      <ul>{displayPost}</ul>
      <div>
        <CreatePost />
      </div>
    </div>
  );
};

export default Home;
