import React, { useState, useEffect } from "react";
import { voteForOption, addVoteToUser } from "database/votePost";
import { fetchPostUser, fetchPostUserAvatar } from "database/postUser";
import { useSelector } from "react-redux";
import PostHeader from "components/post-header";

const Post = ({ post }) => {
  console.log("post", post);
  const { owner_username: ownerUsername } = post;

  const [postOwnerAvatar, setpostOwnerAvatar] = useState("");

  // Fetch the avatar of the user who created the post
  useEffect(() => {
    const fetchAvatar = async () => {
      const postOwnerAvatar = await fetchPostUserAvatar(ownerUsername);
      setpostOwnerAvatar(postOwnerAvatar);
    };

    fetchAvatar();
  }, []);

  return (
    <div>
      <div>This is a new post</div>
      <PostHeader
        user={{
          username: ownerUsername,
          postOwnerAvatar,
        }}
        votes={{ voteACount: 10, voteBCount: 5 }}
        showVoteResults
        // TODO: Add the logic here
      />
      <div>{JSON.stringify(post)}</div>
    </div>
  );
};

export default Post;
