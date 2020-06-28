import React from "react";

const PostFooter = ({ voteData, showVoteResults }) => {
  const {
    numOfVotesForOptionA,
    numOfVotesForOptionB,
    totalVotes,
    hasUserVotedForA,
    hasUserVotedForB,
    optionAName,
    optionBName,
  } = voteData;

  const voteAPercent = (numOfVotesForOptionA / totalVotes) * 100 || 0;
  const voteBPercent = (numOfVotesForOptionB / totalVotes) * 100 || 0;

  // TODO: Cleanup the way the option percentage are handled. Remove showing and hiding DOM elements
  return (
    <div className="flex justify-center w-100 text-bluey">
      <span
        className={`${
          showVoteResults && voteBPercent !== 100 ? "show" : "hidden"
        } ${
          voteAPercent === 100
            ? " rounded-lg mr-2 "
            : " rounded-l-lg border-r-2 border-gray-600 "
        } ${
          hasUserVotedForB ? "opacity-50" : " "
        } flex items-center text-center justify-center align-middle bg-pinky h-10 ml-2 mb-2`}
        style={{ width: voteAPercent + "%" }}
      >
        <div>
          {optionAName}: {voteAPercent}%
        </div>
      </span>
      <div
        className={`${
          showVoteResults && voteAPercent !== 100 ? "show" : "hidden"
        } ${voteBPercent === 100 ? " rounded-lg ml-2 " : " rounded-r-lg "} ${
          hasUserVotedForA ? "opacity-50" : " "
        } items-center justify-center text-center  bg-orangy h-10 mr-2 mb-2`}
        style={{ width: voteBPercent + "%" }}
      >
        <div>
          {optionBName}: {voteBPercent}%
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
