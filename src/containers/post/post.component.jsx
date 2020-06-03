import React, { useState } from "react";
import { voteForOption } from "database/votePost";
import { useSelector } from "react-redux";

const Post = (props) => {
  const [voteView, setVoteView] = useState(false);
  const [voteACount, setVoteACount] = useState(props.optionA.length);
  const [voteBCount, setVoteBCount] = useState(props.optionB.length);
  const userIDFromState = useSelector((state) => state.users.user.userId);

  const handleVote = (obj) => {
    setVoteView(true);
    voteForOption(obj, userIDFromState);
    if (obj.optionName === "option_a") {
      setVoteACount(voteACount + 1);
    } else {
      setVoteBCount(voteBCount + 1);
    }
  };

  const voteAPercent = (voteACount / (voteACount + voteBCount)) * 100;
  const voteBPercent = (voteBCount / (voteACount + voteBCount)) * 100;
  return (
    <li className="rounded border-4 border-orange-600 mt-2">
      <h6>{props.body}</h6>
      {/* <p>{props.created_at}</p> */}
      <div className="flex justify-center">
        <button
          className={`${
            voteView ? "hidden" : "show"
          } bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-l-lg border-r-2 border-gray-600`}
          onClick={() =>
            handleVote({ optionName: "option_a", postId: props.id })
          }
        >
          {props.optionAName}
        </button>
        <button
          className={`${
            voteView ? "hidden" : "show"
          } bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-r-lg `}
          onClick={() =>
            handleVote({ optionName: "option_b", postId: props.id })
          }
        >
          {props.optionBName}
        </button>
      </div>
      <div className="flex justify-center w-100">
        <div
          className={`${
            voteView ? "show" : "hidden"
          } bg-gray-300 h-10 rounded-l-lg border-r-2 border-gray-600`}
          style={{ width: voteAPercent + "%" }}
        >
          {props.optionAName}: {voteACount}
        </div>
        <div
          className={`${
            voteView ? "show" : "hidden"
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
