import React, { useState, useEffect } from "react";
import { voteForOption, addVoteToUser } from "database/votePost";
import { fetchPostUser, fetchPostUserAvatar } from "database/postUser";
import { useSelector } from "react-redux";

const Post = ({ post }) => {
  console.log("post", post);

  return (
    <div>
      <div>This is a new post</div>
      <div>{JSON.stringify(post)}</div>
    </div>
  );
};

export default Post;
