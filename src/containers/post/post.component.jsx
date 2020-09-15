/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { voteForOption, addVoteToUser } from "database/votePost";
import { fetchPostUserAvatar } from "database/postUser";

import PostHeader from "components/post-header";
import PostFooter from "components/post-footer";
import PostBody from "components/post-body";
import { SORT_BY_NEWEST } from "database/utils";
import { storage } from "database";

const Post = ({ post, user, fetchLatestPosts }) => {
  const { userId } = user;
  const {
    title,
    body,
    picID: picID,
    id: postId,
    owner_username: ownerUsername,
    total_votes: totalVotes,
    option_a_name: optionAName,
    option_b_name: optionBName,
    img_post,
  } = post;

  const hasUserVotedForA = post.option_a.includes(user.userId);
  const hasUserVotedForB = post.option_b.includes(user.userId);
  const hasUserVoted = hasUserVotedForA || hasUserVotedForB;

  const [postOwnerAvatar, setpostOwnerAvatar] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  const handleVote = async ({ optionName, postId, userId }) => {
    try {
      await voteForOption({ optionName, postId, userId });
      await addVoteToUser({ postId, userId });
      fetchLatestPosts({ sortBy: SORT_BY_NEWEST });
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch the avatar of the user who created the post
  useEffect(() => {
    const fetchAvatar = async () => {
      const postOwnerAvatar = await fetchPostUserAvatar(ownerUsername);
      setpostOwnerAvatar(postOwnerAvatar);
    };

    fetchAvatar();
  }, []);

  useEffect(() => {
    if (img_post) {
      storage
        .ref(`posts/${picID}-01`)
        .getDownloadURL()
        .then((img1Url) => {
          setImg1(img1Url);
        });
      storage
        .ref(`posts/${picID}-02`)
        .getDownloadURL()
        .then((img2Url) => {
          setImg2(img2Url);
        });
    }
  }, []);

  return (
    <div className="rounded-lg pt-1 m-1 mt-3 bg-bluey  tracking-wide">
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
      <PostBody
        title={title}
        userData={{ userId }}
        postData={{ body, postId, optionAName, optionBName }}
        showVoteResults={hasUserVoted}
        handleVote={handleVote}
        img1={img1}
        img2={img2}
      />
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
