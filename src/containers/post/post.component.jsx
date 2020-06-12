import React, { useState, useEffect } from "react";
import { voteForOption } from "database/votePost";
import { useSelector } from "react-redux";

const Post = (props) => {
  const [canUserViewVote, setCanUserViewVote] = useState(false);
  const [voteACount, setVoteACount] = useState(0);
  const [voteBCount, setVoteBCount] = useState(0);
  const userIDFromState = useSelector((state) => state.users.user.userId);
  // console.log(voteACount, voteBCount);
  // console.log(props);

  const handleVote = ({ optionName, postId, userId }) => {
    setCanUserViewVote(true);
    voteForOption({ optionName, postId, userId });
    if (optionName === "option_a") {
      setVoteACount(voteACount + 1);
    } else {
      setVoteBCount(voteBCount + 1);
    }
  };

  useEffect(() => {
    setCanUserViewVote(props.hasUserVoted);
    setVoteACount(props.optionA.length);
    setVoteBCount(props.optionB.length);
  }, []);

  const voteAPercent = (voteACount / (voteACount + voteBCount)) * 100;
  const voteBPercent = (voteBCount / (voteACount + voteBCount)) * 100;
  return (
    <li className="rounded border-4 border-orange-600 mt-2">
      <h6>{props.body}</h6>
      {/* <p>{props.created_at}</p> */}
      <div className="flex justify-center">
        <button
          className={`${
            canUserViewVote ? "hidden" : "show"
          } bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-l-lg border-r-2 border-gray-600`}
          onClick={() =>
            handleVote({
              optionName: "option_a",
              postId: props.id,
              userId: userIDFromState,
            })
          }
        >
          {props.optionAName}
        </button>
        <button
          className={`${
            canUserViewVote ? "hidden" : "show"
          } bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-r-lg `}
          onClick={() =>
            handleVote({
              optionName: "option_b",
              postId: props.id,
              userId: userIDFromState,
            })
          }
        >
          {props.optionBName}
        </button>
      </div>
      <div className="flex justify-center w-100">
        <div
          className={`${
            canUserViewVote ? "show" : "hidden"
          } bg-gray-300 h-10 rounded-l-lg border-r-2 border-gray-600`}
          style={{ width: voteAPercent + "%" }}
        >
          {props.optionAName}: {voteACount}
        </div>
        <div
          className={`${
            canUserViewVote ? "show" : "hidden"
          } bg-gray-300 h-10 rounded-r-lg`}
          style={{ width: voteBPercent + "%" }}
        >
          {props.optionBName}: {voteBCount}
        </div>
      </div>
    </li>
  );
};

export default Post;
