/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "containers/post";
import Profile from "containers/profile";
import Modal from "components/modal";
import Navbar from "containers/navbar";

const Home = ({ fetchPostsThunk, fetchUserAvatarThunk, view }) => {
  // Check whether user has a username
  const userFromState = useSelector((state) => state.users.user);
  const doesUserHaveUsername = !!userFromState.username;

  // Information about the posts
  const postsFromState = useSelector((state) => state.posts.posts); //Fix this posts.posts shit

  const fetchLatestPosts = () =>
    fetchPostsThunk({
      sortBy: "newest",
    });

  // Fetch latest posts on default on component mount
  useEffect(() => {
    fetchLatestPosts();
  }, []);

  // Ask user for avatar and username when one doesn't exist
  if (!doesUserHaveUsername) {
    return (
      <Modal show>
        <Profile />
      </Modal>
    );
  }

  return (
    <div className="bg-blueGray">
      {/* Navbar */}
      <div>
        <Navbar navigation="/create-post" topRightIcon="post_add" />
      </div>
      {/* Posts */}
      <div>
        {postsFromState.map((post, index) => {
          return (
            <Post
              post={post}
              key={index}
              user={userFromState}
              fetchLatestPosts={fetchLatestPosts}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
