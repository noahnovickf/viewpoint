import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    console.log(props.hasUserVoted);
    setCanUserViewVote(props.hasUserVoted);
    setVoteACount(props.optionA.length);
    setVoteBCount(props.optionB.length);
  }, []);

  const voteAPercent = (voteACount / (voteACount + voteBCount)) * 100;
  const voteBPercent = (voteBCount / (voteACount + voteBCount)) * 100;
  return (
    <li className="rounded-lg pt-1 m-1 mt-3 bg-bluey ">
      <h4 className="text-grayy ml-2">Username here</h4>
      <h6 className="text-grayy p-2 mx-2 mb-2 rounded-lg border-2 border-grayy">
        {props.body}
      </h6>
      {/* <p>{props.created_at}</p> */}
      <div className="flex justify-center text-bluey ">
        <button
          className={`${
            canUserViewVote ? "hidden" : "show"
          } bg-pinky w-20 h-10 rounded-l-lg border-r-2 border-gray-600 mb-2 w-1/3`}
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
          } bg-orangy w-20 h-10 rounded-r-lg mb-2 w-1/3`}
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
      <div className="flex justify-center w-100 text-bluey">
        <span
          className={`${
            canUserViewVote ? "show" : "hidden"
          } text-center align-middle bg-pinky h-10 rounded-l-lg border-r-2 border-gray-600  ml-2 mb-2`}
          style={{ width: voteAPercent + "%" }}
        >
          {props.optionAName}: {voteACount}
        </span>
        <div
          className={`${
            canUserViewVote ? "show" : "hidden"
          }  text-center  bg-orangy h-10 rounded-r-lg  mr-2 mb-2`}
          style={{ width: voteBPercent + "%" }}
        >
          {props.optionBName}: {voteBCount}
        </div>
      </div>
    </li>
  );
};

export default Post;
