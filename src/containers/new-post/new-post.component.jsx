/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { voteForOption, addVoteToUser } from "database/votePost";
import { fetchPostUser, fetchPostUserAvatar } from "database/postUser";

import PostHeader from "components/post-header";
import PostFooter from "components/post-footer";

const Post = ({ post, user }) => {
  console.log("post", post);
  const {
    owner_username: ownerUsername,
    total_votes: totalVotes,
    option_a_name: optionAName,
    option_b_name: optionBName,
  } = post;
  const hasUserVotedForA = post.option_a.includes(user.userId);
  const hasUserVotedForB = post.option_b.includes(user.userId);
  const hasUserVoted = hasUserVotedForA || hasUserVotedForB;

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
    <div className="rounded-lg pt-1 m-1 mt-3 bg-bluey font-noto tracking-wide">
      <PostHeader
        userData={{
          username: ownerUsername,
          postOwnerAvatar,
        }}
        voteData={{
          numOfVotesForOptionA: post.option_a.length,
          numOfVotesForOptionB: post.option_b.length,
        }}
        showVoteResults={hasUserVoted}
      />
      <div>{JSON.stringify(post)}</div>
      <PostFooter
        voteData={{
          hasUserVotedForA,
          hasUserVotedForB,
          numOfVotesForOptionA: post.option_a.length,
          numOfVotesForOptionB: post.option_b.length,
          totalVotes,
          optionAName,
          optionBName,
        }}
        showVoteResults={hasUserVoted}
      />
    </div>
  );
};

export default Post;
