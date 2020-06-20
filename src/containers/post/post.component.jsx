import React, { useState, useEffect } from "react";
import { voteForOption, addVoteToUser } from "database/votePost";
import { useSelector } from "react-redux";

const Post = (props) => {
  const [canUserViewVote, setCanUserViewVote] = useState(false);
  const [voteACount, setVoteACount] = useState(props.optionA.length);
  const [voteBCount, setVoteBCount] = useState(props.optionB.length);
  const [viewTotalVotes, setViewTotalVotes] = useState(false);
  const userIDFromState = useSelector((state) => state.users.user.userId);
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
    setCanUserViewVote(props.hasUserVoted);
    setVoteACount(props.optionA.length);
    setVoteBCount(props.optionB.length);
  }, [props.hasUserVoted]);

  const voteAPercent = (voteACount / (voteACount + voteBCount)) * 100;
  const voteBPercent = (voteBCount / (voteACount + voteBCount)) * 100;
  return (
    <li className="rounded-lg pt-1 m-1 mt-3 bg-bluey font-noto tracking-wide">
      <div className="flex justify-between">
        <div className="flex mb-1">
          <img
            src={props.postOwnerAvatar}
            className="rounded-full h-6 w-6 align-center ml-2"
          />
          <h4 className="text-grayy ml-2">{props.postOwnerUsername}</h4>
        </div>
        <button onClick={() => setViewTotalVotes(!viewTotalVotes)}>
          <i
            className={`${
              canUserViewVote ? " show " : " hidden "
            } material-icons color-grayy mr-2`}
          >
            more_horiz
          </i>
        </button>
      </div>
      <h6 className="text-grayy p-2 mx-2 mb-2 rounded-lg border border-grayy font-thin">
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
            canUserViewVote && voteBPercent !== 100 ? "show" : "hidden"
          } ${
            voteAPercent === 100
              ? " rounded-lg mr-2 "
              : " rounded-l-lg border-r-2 border-gray-600 "
          } flex items-center text-center justify-center align-middle bg-pinky h-10 ml-2 mb-2`}
          style={{ width: voteAPercent + "%" }}
        >
          {" "}
          <div>
            {props.optionAName}: {voteAPercent}%
          </div>
        </span>
        <div
          className={`${
            canUserViewVote && voteAPercent !== 100 ? "show" : "hidden"
          } ${
            voteBPercent === 100 ? " rounded-lg ml-2 " : " rounded-r-lg "
          } flex items-center justify-center text-center  bg-orangy h-10 mr-2 mb-2`}
          style={{ width: voteBPercent + "%" }}
        >
          <div>
            {props.optionBName}: {voteBPercent}%
          </div>
        </div>
      </div>
      <div
        className={`${
          viewTotalVotes ? " show " : " hidden "
        }" text-grayy text-center "`}
      >
        Total votes: {voteBCount + voteACount}
      </div>
    </li>
  );
};

export default Post;
