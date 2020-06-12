import React, { useEffect, useState } from "react";
import { auth } from "database";
import { useSelector } from "react-redux";
import Post from "containers/post";
import Profile from "containers/profile";
import Modal from "components/modal";
import Navbar from "containers/navbar";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const userFromState = useSelector((state) => state.users.user);
  const doesUserHaveUsername = !!userFromState.username;
  const signOut = () => {
    auth.signOut();
    props.logoutThunk();
  };
  const postsFromState = useSelector((state) => state.posts);

  useEffect(() => {
    props.fetchPostsThunk();
    setPosts(postsFromState);
  }, [posts, props]);

  //Get user's profile picture
  useEffect(() => {
    const username = userFromState.username;
    if (username) {
      props.fetchUserAvatarThunk({ username });
    }
  }, []);

  let displayPost = [];

  if (postsFromState.posts.length > 0) {
    displayPost = postsFromState.posts.map((post) => {
      return (
        <Post
          body={post.body}
          optionA={post.option_a}
          optionB={post.option_b}
          created_at={post.created_at}
          id={post.id}
          optionAName={post.option_a_name}
          optionBName={post.option_b_name}
        />
      );
    });
  }
  if (!doesUserHaveUsername) {
    return (
      <Modal show>
        <Profile />
      </Modal>
    );
  } else {
    return (
      <div className="bg-blueGray">
        <div>
          <Navbar navigation="/create-post" postAdd="post_add" />
        </div>
        <h1 className="flex justify-center text-grayy">
          {userFromState.full_name} is logged in with the username:
          {userFromState.username}
        </h1>
        <div className="flex items-center justify-center rounded-full">
          {userFromState.avatar_link && (
            <img
              src={userFromState.avatar_link}
              alt="Avatar"
              className="rounded full h-16 w-16"
            />
          )}
        </div>
        <button className="bg-blue w-full bg-red-600" onClick={signOut}>
          Sign out
        </button>
        <ul>{displayPost}</ul>
      </div>
    );
  }
};

export default Home;
