/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "containers/post";
import Profile from "containers/profile";
import Modal from "components/modal";
import Navbar from "containers/navbar";
import PostSort from "components/post-filter";
import { SORT_BY_NEWEST } from "database/utils";

const Home = ({ fetchPostsThunk, fetchUserAvatarThunk, view }) => {
  // Check whether user has a username
  const userFromState = useSelector((state) => state.users.user);
  const doesUserHaveUsername = !!userFromState.username;

  // Information about the posts
  const postsFromState = useSelector((state) => state.posts.posts); //Fix this posts.posts shit

  const fetchLatestPosts = ({ sortBy = SORT_BY_NEWEST }) =>
    fetchPostsThunk({
      sortBy,
    });

  // Fetch latest posts when user sorts
  const handleSort = (event) => {
    const sortBy = event.target.value;
    fetchLatestPosts({ sortBy });
  };

  // Fetch latest posts latest first by default on component mount
  useEffect(() => {
    fetchLatestPosts({ sortBy: SORT_BY_NEWEST });
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
      <Navbar navigation="/create-post" topRightIcon="post_add" />
      {/* Filter */}
      <PostSort handleSort={handleSort} />
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
