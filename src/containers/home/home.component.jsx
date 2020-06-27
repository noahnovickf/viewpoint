import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "containers/new-post";
import Profile from "containers/profile";
import Modal from "components/modal";
import Navbar from "containers/navbar";

const Home = ({ fetchPostsThunk, fetchUserAvatarThunk, view }) => {
  // Check whether user has a username
  const userFromState = useSelector((state) => state.users.user);
  const doesUserHaveUsername = !!userFromState.username;

  const [displayPosts, setDisplayPosts] = useState([]);
  const [selectDisplayPostOption, setSelectDisplayPostOption] = useState(
    "Newest"
  );

  const postsFromState = useSelector((state) => state.posts.posts); //Fix this
  const renderPost = (post, index) => {
    return <Post post={post} key={index} />;
  };

  //Fetch newest posts on default on component mount
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
      <div>{postsFromState.map(renderPost)}</div>
    </div>
  );
};

export default Home;
