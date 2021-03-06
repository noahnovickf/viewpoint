/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "containers/post";
import Profile from "containers/profile";
import Modal from "components/modal";
import Navbar from "containers/navbar";
import { SORT_BY_USER_POST, SORT_BY_USER_VOTE } from "database/utils";
import Sidebar from "containers/sidebar";
import PostSort from "components/post-filter";
import { SORT_BY_NEWEST } from "database/utils";

const Home = ({
  fetchPostsThunk,
  fetchUserAvatarThunk,
  view,
  sidebarViewThunk,
  logoutThunk,
}) => {
  // Check whether user has a username
  const userFromState = useSelector((state) => state.users.user);
  const currentUserID = userFromState.userId;
  const doesUserHaveUsername = !!userFromState.username;

  // Information about the posts
  const postsFromState = useSelector((state) => state.posts.posts); //Fix this posts.posts shit

  const showSidebar = useSelector((state) => state.sidebarView.sidebarView);

  const fetchLatestPosts = ({ sortBy = SORT_BY_NEWEST }) => {
    fetchPostsThunk({
      sortBy,
      currentUserID,
    });
  };

  // Fetch latest posts when user sorts
  const handleSort = (event) => {
    const sortBy = event.target.value;
    fetchLatestPosts({ sortBy });
  };

  useEffect(() => {
    if (view === "userPosts") {
      fetchLatestPosts({ sortBy: SORT_BY_USER_POST, currentUserID });
    } else if (view === "voteHistory") {
      fetchLatestPosts({ sortBy: SORT_BY_USER_VOTE, currentUserID });
    } else {
      fetchLatestPosts({ sortBy: SORT_BY_NEWEST });
    }
  }, [view]);

  // Fetch latest posts latest first by default on component mount
  useEffect(() => {
    fetchUserAvatarThunk({ username: userFromState.username });
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
              ? "transition-width duration-500  w-2/3 -mr-56 z-10 border-r-2 border-grayy"
              : "z-10 transition-width duration-500 w-0 overflow-hidden "
          }`}
        >
          <Sidebar
            logout={logoutThunk}
            sidebarView={sidebarViewThunk}
            fetchLatestPosts={fetchLatestPosts}
          />
        </div>
        {/* Posts */}
        <div
          className={` ${
            showSidebar ? "opacity-50" : ""
          } bg-blueGray w-full h-full `}
          onClick={() => sidebarViewThunk({ toggleView: false })}
        >

          <div
            className={` ${
              view === "userPosts" || view === "voteHistory" ? "hidden" : ""
            } `}
          >
            <PostSort handleSort={handleSort} />
          </div>
          <div>
            {postsFromState.map((post, index) => {
              return (
                <Post
                  post={post}
                  key={post.id}
                  user={userFromState}
                  fetchLatestPosts={fetchLatestPosts}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
