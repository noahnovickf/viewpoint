/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { voteForOption, addVoteToUser } from "database/votePost";
import { fetchPostUser, fetchPostUserAvatar } from "database/postUser";
import { useSelector } from "react-redux";

const Post = (props) => {
  const {
    optionA,
    optionB,
    body,
    ownerID,
    hasUserVotedForA,
    hasUserVotedForB,
    id,
    optionAName,
    optionBName,
  } = props;
  const [canUserViewVote, setCanUserViewVote] = useState(false);
  const [voteACount, setVoteACount] = useState(optionA.length);
  const [voteBCount, setVoteBCount] = useState(optionB.length);

  const userIDFromState = useSelector((state) => state.users.user.userId);
  const voteAPercent = (voteACount / (voteACount + voteBCount)) * 100;
  const voteBPercent = (voteBCount / (voteACount + voteBCount)) * 100;

  const handleVote = ({ optionName, postId, userId }) => {
    setCanUserViewVote(true);
    voteForOption({ optionName, postId, userId });
    addVoteToUser({ postId, userId });
    if (optionName === "option_a") {
      setVoteACount(voteACount + 1);
    } else {
      setVoteBCount(voteBCount + 1);
    }
  };

  useEffect(() => {
    if (hasUserVotedForA || hasUserVotedForB) {
      setCanUserViewVote(true);
    }
    setVoteACount(optionA.length);
    setVoteBCount(optionB.length);
  }, [hasUserVotedForA, hasUserVotedForB]);

  return (
    <li className="rounded-lg pt-1 m-1 mt-3 bg-bluey font-noto tracking-wide">
      {/* Post Body  */}
      <h6 className="text-grayy p-2 mx-2 mb-2 rounded-lg border border-grayy font-thin">
        {body}
      </h6>
      <div className="flex justify-center text-bluey ">
        <button
          className={`${
            canUserViewVote ? "hidden" : "show"
          } bg-pinky w-20 h-10 rounded-l-lg border-r-2 border-gray-600 mb-2 w-1/3`}
          onClick={() =>
            handleVote({
              optionName: "option_a",
              postId: id,
              userId: userIDFromState,
            })
          }
        >
          {optionAName}
        </button>
        <button
          className={`${
            canUserViewVote ? "hidden" : "show"
          } bg-orangy w-20 h-10 rounded-r-lg mb-2 w-1/3`}
          onClick={() =>
            handleVote({
              optionName: "option_b",
              postId: id,
              userId: userIDFromState,
            })
          }
        >
          {optionBName}
        </button>
      </div>
      {/* Post Footer  */}
    </li>
  );
};

export default Post;
