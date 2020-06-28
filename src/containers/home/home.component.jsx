/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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

  // Fetch latest posts on default on component mount
  // TODO: Make this a listener real time
  useEffect(() => {
    fetchPostsThunk({
      sortBy: "newest",
      whereCondition1: "created_at",
      whereAssertion: ">",
      whereCondition2: 0,
    });
  }, []);

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
          return <Post post={post} key={index} user={userFromState} />;
        })}
      </div>
    </div>
  );
};

export default Home;
