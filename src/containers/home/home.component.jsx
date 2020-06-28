/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "containers/post";
import Profile from "containers/profile";
import Modal from "components/modal";
import Navbar from "containers/navbar";
import Sidebar from "containers/sidebar";

const Home = ({
  fetchPostsThunk,
  fetchUserAvatarThunk,
  view,
  sidebarViewThunk,
  logoutThunk,
}) => {
  // Check whether user has a username
  const userFromState = useSelector((state) => state.users.user);
  const doesUserHaveUsername = !!userFromState.username;

  // Information about the posts
  const postsFromState = useSelector((state) => state.posts.posts); //Fix this posts.posts shit

  // Sidebar view
  const showSidebar = useSelector((state) => state.sidebarView.sidebarView);

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
    <div className="bg-blueGray flex-col">
      {/* Navbar */}
      <div>
        <Navbar
          navigation="/create-post"
          topRightIcon="post_add"
          sidebarView={sidebarViewThunk}
        />
      </div>
      <div className="flex">
        <div
          className={` ${
            showSidebar
              ? "transition-all duration-500 w-2/3 -mr-56 z-10 border-r-2 border-grayy"
              : "transition-all duration-500 w-0"
          }`}
        >
          <Sidebar logout={logoutThunk} sidebarView={sidebarViewThunk} />
        </div>
        {/* Posts */}
        <div
          className={` ${
            showSidebar ? "opacity-50" : ""
          } bg-blueGray w-full h-full `}
          onClick={() => sidebarViewThunk({ toggleView: false })}
        >
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
    </div>
  );
};

export default Home;
