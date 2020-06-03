import React, { useState } from "react";
import { voteForOption } from "database/votePost";
import { useSelector } from "react-redux";

const Post = (props) => {
  const [voteView, setVoteView] = useState(false);
  const userFromState = useSelector((state) => state.users.user);
  //console.log(userFromState);
  //console.log(props);

  const handleVote = (obj) => {
    setVoteView(true);
    voteForOption(obj);
  };
  return (
    <li className="rounded border-4 border-orange-600 mt-2">
      <h6>{props.body}</h6>
      {/* <p>{props.created_at}</p> */}
      <div className="flex justify-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-l-lg border-r-2 border-gray-600"
          onClick={() =>
            handleVote({ optionName: "option_a", postId: props.id })
          }
        >
          {props.optionAName}
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-r-lg "
          onClick={() =>
            handleVote({ optionName: "option_b", postId: props.id })
          }
        >
          {props.optionBName}
        </button>
      </div>
      <div className="flex justify-center">
        <div
          className={`${
            voteView ? "show" : "hidden"
          } bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-l-lg border-r-2 border-gray-600`}
        >
          {props.optionAName}: {props.optionA + 1}
        </div>
        <div
          className={`${
            voteView ? "show" : "hidden"
          } bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-r-lg`}
        >
          {props.optionBName}: {props.optionB + 1}
        </div>
      </div>
    </li>
  );
};

export default Post;
