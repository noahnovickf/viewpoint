import React, { useState } from "react";
import { voteForOption } from "database/votePost";
import { useSelector } from "react-redux";

const Post = (props) => {
  const [canUserViewVote, setCanUserViewVote] = useState(false);
  const [voteACount, setVoteACount] = useState(props.optionA.length);
  const [voteBCount, setVoteBCount] = useState(props.optionB.length);
  const userIDFromState = useSelector((state) => state.users.user.userId);

  const handleVote = ({ optionName, postId, userId }) => {
    setCanUserViewVote(true);
    voteForOption({ optionName, postId, userId });
    if (optionName === "option_a") {
      setVoteACount(voteACount + 1);
    } else {
      setVoteBCount(voteBCount + 1);
    }
  };

  const voteAPercent = (voteACount / (voteACount + voteBCount)) * 100;
  const voteBPercent = (voteBCount / (voteACount + voteBCount)) * 100;
  return (
    <li className="rounded m-1 bg-bluey ">
      <h6 className="text-grayy">{props.body}</h6>
      {/* <p>{props.created_at}</p> */}
      <div className="flex justify-center text-bluey">
        <button
          className={`${
            canUserViewVote ? "hidden" : "show"
          } bg-pinky w-20 h-10 rounded-l-lg border-r-2 border-gray-600`}
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
          } bg-orangy w-20 h-10 rounded-r-lg `}
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
      <div className="flex justify-center w-100 py-px">
        <div
          className={`${
            canUserViewVote ? "show" : "hidden"
          } bg-pinky h-10 rounded-l-lg border-r-2 border-gray-600`}
          style={{ width: voteAPercent + "%" }}
        >
          {props.optionAName}: {voteACount}
        </div>
        <div
          className={`${
            canUserViewVote ? "show" : "hidden"
          } bg-orangy h-10 rounded-r-lg`}
          style={{ width: voteBPercent + "%" }}
        >
          {props.optionBName}: {voteBCount}
        </div>
      </div>
    </li>
  );
};

export default Post;
