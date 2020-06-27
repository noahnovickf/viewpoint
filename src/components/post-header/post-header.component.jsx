import React, { useState } from "react";

const PostHeader = ({ user, votes, showVoteResults }) => {
  const { postOwnerAvatar, username } = user;
  const { voteACount, voteBCount } = votes;

  const [viewTotalVotes, setViewTotalVotes] = useState(false);

  return (
    <div className="flex justify-between">
      <div className="flex mb-1">
        <img
          src={postOwnerAvatar}
          alt="User avatar"
          className="rounded-full h-6 w-6 align-center ml-2"
        />
        <h4 className="text-grayy ml-2">{username}</h4>
      </div>
      {showVoteResults && (
        <div>
          <button onClick={() => setViewTotalVotes(!viewTotalVotes)}>
            <i className={"material-icons color-grayy mr-2"}>more_horiz</i>
          </button>
          {viewTotalVotes && (
            <div className={"text-grayy text-center"}>
              Total votes: {voteBCount + voteACount}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostHeader;
